const express = require('express');
const router = express.Router();
const userCltr = require('../app/controllers/users-cltr');
const greetCltr = require('../app/controllers/greet-cltr');
const notesCltr = require('../app/controllers/notes-cltr');

const {checkSchema} = require('express-validator');
const authenticateUser = require('../app/middlewares/authenticateUser');

const {
  userRegistrationSchema,
  userLoginSchema,
} = require('../app/helpers/userValidationSchema');

const noteCreateSchema = require('../app/helpers/noteValidationSchema');

router.post(
  '/users/register',
  checkSchema(userRegistrationSchema),
  userCltr.register
);

router.post(
  '/users/login',
  checkSchema(userLoginSchema),
  userCltr.login
);

router.get('/users/account', authenticateUser, userCltr.account);

router.post(
  '/notes/create',
  checkSchema(noteCreateSchema),
  authenticateUser,
  notesCltr.create
);

router.post('/notes/list', authenticateUser, notesCltr.list);

router.get('/greet/welcome', greetCltr.welcome);
router.get('/greet/goodbye', greetCltr.goodbye);

module.exports = router;
