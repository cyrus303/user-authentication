const User = require('../models/user-model');
const {validationResult} = require('express-validator');

const userCltr = {};

userCltr.register = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.send({errors: errors.array()});
    } else {
      const body = request.body;
      const user = await User.create(body);
      response.send(user);
    }
  } catch (error) {
    response.sendStatus(400);
  }
};

userCltr.login = async (request, response) => {
  const body = request.body;
  try {
    const user = await User.create(body);
    response.send(user);
  } catch (error) {
    response.sendStatus(400);
  }
};

module.exports = userCltr;
