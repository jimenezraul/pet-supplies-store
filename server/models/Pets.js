const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const PetsSchema = new Schema(
  {
    petText: {
      type: String,
      required: 'You need to leave a thought!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    petName: {
      type: String,
      required: true
    },
   
  },
  {
    toJSON: {
      getters: true
    }
  }
);



const Pets = model('Pets', PetsSchema);

module.exports = Pets;
