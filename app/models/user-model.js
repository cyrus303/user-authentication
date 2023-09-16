const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//userSchema = username, email, password

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {timestamps: true}
);

const User = model('User', userSchema);

module.exports = User;
