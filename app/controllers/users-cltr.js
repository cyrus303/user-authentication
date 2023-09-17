const User = require('../models/user-model');

const userCltr = {};

userCltr.register = (request, response) => {
  const body = request.body;
  const user = User.create(body)
    .then((user) => {
      response.send(user);
    })
    .catch((error) => {
      response.sendStatus(400);
    });
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
