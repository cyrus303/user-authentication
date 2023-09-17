// userSchema -- username, email, password
const userValidationSchema = {
  username: {
    isLength: {
      errorMessage: 'username should be minimum 3 characters',
      options: {min: 3},
    },
  },
  email: {
    isEmail: {
      errorMessage: 'email format is invalid',
    },
  },
  password: {
    isLength: {
      options: {min: 8, max: 12},
      errorMessage:
        'password should be between 8 - 128 characters long',
    },
  },
};

module.exports = userValidationSchema;
