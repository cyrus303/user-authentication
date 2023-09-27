const express = require('express');
const router = express.Router();
const userCltr = require('../app/controllers/users-cltr');
const greetCltr = require('../app/controllers/greet-cltr');

const {checkSchema} = require('express-validator');

const {
  userRegistrationSchema,
  userLoginSchema,
} = require('../app/helpers/userValidationSchema');

router.post(
  '/users/register',
  checkSchema(userRegistrationSchema),
  userCltr.register
);

// router.get('/users/login');

router.post(
  '/users/login',
  checkSchema(userLoginSchema),
  userCltr.login
);

router.get('/greet/welcome', greetCltr.welcome);
router.get('/greet/goodbye', greetCltr.goodbye);

module.exports = router;
