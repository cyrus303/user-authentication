const greetCltr = {};

greetCltr.welcome = (request, response) => {
  response.send({message: 'welcome to the website'});
};
greetCltr.goodbye = (request, response) => {
  response.send({message: 'Thankyou for visiting'});
};

module.exports = greetCltr;
