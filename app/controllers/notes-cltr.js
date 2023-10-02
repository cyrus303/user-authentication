const NoteModel = require('../models/note-model');
const {validationResult} = require('express-validator');

const notesCltr = {};

notesCltr.create = (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.send({errors: errors.array()});
    } else {
      const body = request.body;
      response.send(body);
    }
  } catch (error) {
    response.status(400).send(error);
  }
};

notesCltr.list = (request, response) => {};

module.exports = notesCltr;
