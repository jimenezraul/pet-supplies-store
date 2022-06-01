const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, SubCategory, Cart } = require("../models");
const { signToken } = require("../utils/auth");
const { GraphQLUpload } = require("graphql-upload");
const generateRandomString = require("../utils/helpers");
const path = require("node:path");
const fs = require("node:fs");

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

    get_cart: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      const cart = await User.find(
        { user: context.user._id }.select("-__v -password").populate("cart")
      );

      return cart;
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
    subcategories: async () => {
      return SubCategory.find();
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
      console.log(args);
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
      const { createReadStream, filename } = await image;
      const { ext } = path.parse(filename);
      const randomString = generateRandomString(10);
      const fileName = `${randomString}${ext}`;

      const stream = createReadStream();
      const pathName = path.join(
        __dirname,
        `../public/images/profile/${fileName}`
      );
      await stream.pipe(fs.createWriteStream(pathName));

      const user = await User.findOneAndUpdate(
        { _id: context.user._id },
        { image_url: `/images/profile/${fileName}` }
      );
      return user;
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
  },
};

module.exports = resolvers;
