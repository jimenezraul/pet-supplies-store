const mongoose = require("mongoose");

const { Schema } = mongoose;

const cartSchema = new Schema({
  Cart: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  quantity: {
    type: Number,
    min: 0,
    default: 1,
  },
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
