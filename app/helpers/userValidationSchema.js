// userSchema -- username, email, password

const emailSchema = {
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
  email: emailSchema,
  password: passwordSchema,
};

const userLoginSchema = {
  email: emailSchema,
  password: passwordSchema,
};

module.exports = {userRegistrationSchema, userLoginSchema};
