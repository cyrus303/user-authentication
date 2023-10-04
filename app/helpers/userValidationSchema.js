// userSchema -- username, email, password
const User = require('../models/user-model');

const registerEmailSchema = {
  notEmpty: {
    errorMessage: 'Email is required',
  },
  isEmail: {
    errorMessage: 'Email format is invalid',
  },
  custom: {
    options: async (value) => {
      const user = await User.findOne({email: value});
      if (user) {
        throw new Error('user record found');
      } else {
        return true;
      }
    },
  },
};

const loginEmailSchema = {
  notEmpty: {
    errorMessage: 'Email is required',
  },
  isEmail: {
    errorMessage: 'Email format is invalid',
  },
};

const passwordSchema = {
  notEmpty: {
    errorMessage: 'Password is required',
  },
  isLength: {
    options: {min: 8, max: 128},
    errorMessage:
      'password should be between 8 - 128 characters long',
  },
};

const usernameSchema = {
  isLength: {
    errorMessage: 'username should be minimum 3 characters',
    options: {min: 3},
  },
};

const userRegistrationSchema = {
  username: usernameSchema,
  email: registerEmailSchema,
  password: passwordSchema,
};

const userLoginSchema = {
  email: loginEmailSchema,
  password: passwordSchema,
};

module.exports = {userRegistrationSchema, userLoginSchema};
