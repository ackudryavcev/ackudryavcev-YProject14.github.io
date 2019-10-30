const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const Validator = [
  validate({
    validator: 'isURL',
    message: 'is no URL',
  }),
];

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: Validator,
  },
});

module.exports = mongoose.model('user', userSchema);
