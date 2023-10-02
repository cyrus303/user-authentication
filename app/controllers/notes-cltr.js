const NoteModel = require('../models/note-model');
const {validationResult} = require('express-validator');

const notesCltr = {};

notesCltr.create = (request, response) => {
  const body = request.body;
  response.send(body);
};

notesCltr.list = (request, response) => {};

module.exports = notesCltr;
