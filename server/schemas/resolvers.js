const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, Order } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLUpload } = require("graphql-upload");
const generateRandomString = require("../utils/helpers");
const path = require("node:path");
const fs = require("node:fs");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");
const AWS = require("aws-sdk");
require("dotenv").config();

const resolvers = {
  Upload: GraphQLUpload,

  Query: {
    user: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("cart.product")
          .populate("wishlist")
          .populate({
            path: "orders.products",
            populate: "category",
          });
        const user = await User.findOne({ _id: context.user._id }).populate(
          "orders"
        );

        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    users: async () => {
      return User.find()
        .select("-__v -password")
        .populate("cart.product")
        .populate("wishlist")
        .populate({
          path: "orders.products",
          populate: "category",
        });
    },

    get_orders: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findOne({ _id: context.user._id }).populate(
          "orders"
        );
        return user.orders;
      }
      throw new AuthenticationError("Not logged in");
    },

    get_cart: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }

      const user = await User.findOne({ _id: context.user._id }).populate(
        "cart.product"
      );

      return user.cart;
    },

    products: async () => {
      return Product.find()
        .select("-__v")
        .populate("category")
        .populate("subCategory");
    },
    product: async (parent, { id }) => {
      return Product.findOne({ _id: id })
        .select("-__v")
        .populate("category")
        .populate("subCategory");
    },
    categories: async () => {
      return Category.find();
    },
    checkout: async (parent, args, context) => {
      const url = new URL(context.headers.referer).origin;

      const order = new Order({ products: args.products });
      const line_items = [];

      const { products } = await order.populate("products");

      for (let i = 0; i < products.length; i++) {
        const product = await stripe.products.create({
          name: products[i].name,
          description: products[i].description.substring(0, 20),
          images: [`${url}${products[i].image_url}`],
        });

        const price = await stripe.prices.create({
          product: product.id,
          unit_amount: products[i].price * 100,
          currency: "usd",
        });

        line_items.push({
          price: price.id,
          quantity: 1,
        });
      }

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items,
        mode: "payment",
        success_url: `${url}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${url}/`,
      });

      return { session: session.id };
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        args,
        { new: true }
      );

      return user;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);
      return { token, user };
    },

    signup: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    add2Cart: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      // if args._id already exists in cart, update quantity
      const user = await User.findOne({ _id: context.user._id });
      const cartProduct = user.cart.find(
        (item) => item.product._id.toString() === args._id.toString()
      );

      if (cartProduct) {
        cartProduct.quantity = args.quantity;
        await user.save();
        return user;
      }
      // if args._id does not exist in cart, add to cart
      user.cart.push({ product: args._id, quantity: args.quantity });
      await user.save();
      return user;
    },

    deleteFromCart: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }

      const user = await User.findOne({ _id: context.user._id })
        .select("-__v -password")
        .populate("cart.product");

      const cart = user.cart.filter((item) => {
        return item.product._id.toString() !== productId.toString();
      });

      user.cart = cart;

      await user.save();

      return user;
    },

    updateProfilePicture: async (parent, { image }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      });

      const { createReadStream, filename, mimetype, encoding } = await image;
      const { ext } = path.parse(filename);
      const randomString = generateRandomString(10);
      const fileName = `${randomString}${ext}`;

      const uploadFile = (file_name) => {
        // Setting up S3 upload parameters
        const params = {
          Bucket: process.env.AWS_BUCKET_NAME,
          Key: file_name, // File name you want to save as in S3
          Body: createReadStream(),
        };

        // Uploading files to the bucket
        s3.upload(params, async function (err, data) {
          if (err) {
            throw err;
          }

          const user = await User.findOneAndUpdate(
            { _id: context.user._id },
            { image_url: `${data.Location}` }
          );
          return user;
        });
      };

      uploadFile(fileName);
    },
    addToWishlist: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const user = await User.findOne({ _id: context.user._id });

      user.wishlist.addToSet(productId);

      await user.save();

      return user;
    },
    removeFromWishlist: async (parent, { productId }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const user = await User.findOne({ _id: context.user._id });
      // remove from wishlist
      user.wishlist.pull(productId);
      await user.save();

      return user;
    },

    addCategory: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      // create category and return new category
      const category = await Category.create(args);

      return category;
    },

    deleteCategory: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      const category = await Category.findOneAndDelete({ _id: id });

      return category;
    },

    updateCategory: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      const category = await Category.findOneAndUpdate(
        { _id: args._id },
        args,
        { new: true }
      );

      return category;
    },

    addProduct: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      const s3 = new AWS.S3({
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      });

      const { image, name, description, price, quantity, categoryId } = args;

      const { createReadStream, filename } = await image;
      const { ext } = path.parse(filename);
      const randomString = generateRandomString(10);
      const fileName = `${randomString}${ext}`;

      const params = {
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: fileName, // File name you want to save as in S3
        Body: createReadStream(),
      };

      // Uploading files to the bucket
      const res = await s3.upload(params).promise();

      // create product and return new product
      const product = await Product.create({
        image_url: `${res.Location}`,
        name: name,
        description: description,
        price: price,
        quantity: quantity,
        category: categoryId,
      });

      return product;
    },

    updateProduct: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      const product = await Product.findOneAndUpdate({ _id: args.id }, args, {
        new: true,
      });

      const newProduct = await Product.findOne({ _id: product._id }).populate(
        "category"
      );

      return newProduct;
    },

    deleteProduct: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      if (!context.user.isAdmin) {
        throw new AuthenticationError("Not authorized");
      }

      const product = await Product.findOneAndDelete({ _id: id });

      return product;
    },

    addOrder: async (parent, { products }, context) => {
      if (context.user) {
        const order = new Order({ products });

        await User.findByIdAndUpdate(context.user._id, {
          $push: { orders: order },
        });

        // empty cart
        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $set: { cart: [] } }
        );

        return order;
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
