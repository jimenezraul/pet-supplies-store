const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const Order = require("./Order");
const Product = require("./Product");

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    image_url: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    orders: [Order.schema],
    cart: [Product.schema],
    wishlist: [
      {
        type: Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
  }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;