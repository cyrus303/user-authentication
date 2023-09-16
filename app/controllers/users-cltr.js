const User = require('../models/user-model');

const userCtlr = {};

userCtlr.register = (request, response) => {
  const body = request.body;
  response.send(body);
};

module.exports = userCtlr;
