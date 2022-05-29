const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category, SubCategory } = require("../models");
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
          .populate("cart")
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
        .populate("cart")
        .populate("wishlist")
        .populate({
          path: "orders.products",
          populate: "category",
        });
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

    addToCart: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("Not logged in");
      }
      // if id is in cart, increment quantity
      // else add to cart
      const user = await User.findOne({ _id: context.user._id });

      if (user.cart.includes(args._id)) {
        const productIndex = user.cart.indexOf(args._id);
        user.cart[productIndex].quantity += args.quantity;
      } else {
        user.cart.push(args);
      }

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
      console.log(user.wishlist);
      await user.save();

      return user;
    },
  },
};

module.exports = resolvers;
