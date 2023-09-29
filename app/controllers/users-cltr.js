const User = require('../models/user-model');
const {validationResult} = require('express-validator');

const _ = require('lodash');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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
        const result = await bcrypt.compare(
          body.password,
          user.password
        );
        if (result) {
          const token = jwt.sign(
            {
              id: user._id,
            },
            'dct@123'
          );
          response.send({token});
        } else {
          response
            .status(404)
            .send('Username / Password is incorrect');
        }
      } else {
        response.status(404).send('Username / Password is incorrect');
      }
    }
  } catch (error) {}
};

userCltr.account = (request, response) => {
  const {authorization: token} = request.headers;
  jwt.verify(token, 'dct@123', async (error, decoded) => {
    if (error) {
      response.send({error});
    }
    const user = await User.findOne({_id: decoded.id});
    response.send(user);
  });
};

module.exports = userCltr;
