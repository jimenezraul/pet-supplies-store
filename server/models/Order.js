const mongoose = require('mongoose');

const { Schema } = mongoose;

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  order_status: {
    type: String,
    default: pending,
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;


// create order model

// order schema 
    // purchase_date
    // product reference
    //order_status
        //pending
        //processing
        //shipped
        //default: 'pending'
