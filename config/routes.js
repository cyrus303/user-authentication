const express = require('express');
const router = express.Router();
const userCltr = require('../app/controllers/users-cltr');
const greetCltr = require('../app/controllers/greet-cltr');

const {checkSchema} = require('express-validator');
const userValidationSchema = require('../app/helpers/userValidationSchema');

router.get(
  '/api/users/register',
  checkSchema(userValidationSchema),
  userCltr.register
);
router.get('/api/users/login', userCltr.login);

router.get('/api/greet/welcome', greetCltr.welcome);
router.get('/api/greet/goodbye', greetCltr.goodbye);

module.exports = router;
