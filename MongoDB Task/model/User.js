const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

// Model
const userSchema = new mongoose.Schema({
  name: {
    // Validation for MongoDB
    type: String,
    minlength: 3,
    maxlength: 20,
    required: true,
    trim: true,
    unique: true,
  },
  // Custom validation
  age: {
    type: Number,
    validate(value) {
      if (value < 18) {
        throw new Error(`Age can't be less than 18`);
      }
    },
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error('Email is not valid!');
      }
    },
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre('save', async function (next) {
  const user = this;
  console.log(user.isModified('password'));
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
