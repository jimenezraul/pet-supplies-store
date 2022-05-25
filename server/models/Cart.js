const mongoose = require('mongoose');

const { Schema } = mongoose;

const cartSchema = new Schema({
  date_added: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;



// Create Cart Model

// Cart schema
    // date_added
    // product reference