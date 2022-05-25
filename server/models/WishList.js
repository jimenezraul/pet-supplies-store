const mongoose = require('mongoose');

const { Schema } = mongoose;

const wishlistSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true
  }
});

const WishList = mongoose.model('WishList', wishlistSchema);

module.exports = WishList;

// Create wishlist model

// Wishlist schema
    // date_added
    // product reference