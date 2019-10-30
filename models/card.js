const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const Validator = [
  validate({
    validator: 'isURL',
    message: 'is no URL',
  }),
];

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: Validator,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    default: [],
    required: false,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
    required: false,
  },
});

module.exports = mongoose.model('card', cardSchema);
