const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const Order = require('./Order');
const Cart = require('./Cart');

const userSchema = new Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
     last_name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    image_url: {
      type: String,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!']
    },
    password: {
      type: String,
      required: true,
      minlength: 5
    },
    isAdmin: {
      type: String,
      default: false
    },
    orders: [Order.schema],
    cart: [Cart.schema],
    
  },
  {
    toJSON: {
      virtuals: true
    }
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
  return bcrypt.compare(password, this.password);
};



const User = model('User', userSchema);

module.exports = User;


// create user model

// user schema 

    // first_name
        // required
        // trim

    // last_name
        // required
        // trim

    // image_url
        // trim

    // email
        // required
        // trim
        // unique

    // password
        // required
        // min

    // isAdmin
        // default false

    // orders
        // array of order schema

    // cart
        // array of cart schema
        
    // wishlist
        // array of wishlist schema

        
// set up pre-save middleware to create password

// compare the incoming password with the hashed password