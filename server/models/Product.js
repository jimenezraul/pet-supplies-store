const mongoose = require('mongoose');

const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String
  },
  image_url: {
    type: String
  },
  price: {
    type: Number,
    required: true,
    min: 0.99
  },
  quantity: {
    type: Number,
    min: 0,
    default: 1
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  subcategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory',
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;



// create product model

// product schema

    // name
        // required
        // trim

    // description

    // image_url

    // price
        // required
        // min

    // quantity
        // min
        // default 1

    // category
        // ref
        // required

    // subCategory  
        // ref
        // required

        