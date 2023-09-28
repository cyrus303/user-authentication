const User = require('../models/user-model');
const {validationResult} = require('express-validator');

const _ = require('lodash');
const bcrypt = require('bcryptjs');

const userCltr = {};

userCltr.register = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.send({errors: errors.array()});
    } else {
      const body = _.pick(request.body, [
        'username',
        'email',
        'password',
      ]);
      const salt = await bcrypt.genSalt();
      const hash = await bcrypt.hash(body.password, salt);
      body.password = hash;
      const user = await User.create(body);
      response.send(user);
    }
  } catch (error) {
    response.sendStatus(400);
  }
};

userCltr.login = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(400).send({errors: errors.array()});
    } else {
      const body = _.pick(request.body, ['email', 'password']);
      const user = await User.findOne({email: body.email});
      if (user) {
        response.send(user);
      } else {
        response.status(404).send({error: 'email not found'});
      }
    }
  } catch (error) {}
};

module.exports = userCltr;
