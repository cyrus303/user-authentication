const NoteModel = require('../models/note-model');
const {validationResult} = require('express-validator');

const notesCltr = {};

notesCltr.create = async (request, response) => {
  try {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.send({errors: errors.array()});
    } else {
      const body = request.body;
      body.userId = request.userId;
      const note = await NoteModel.create(body);
      response.send(note);
    }
  } catch (error) {
    response.status(400).send(error);
  }
};

notesCltr.list = async (request, response) => {
  try {
    const notes = await NoteModel.find({userId: request.userId});
    response.send(notes);
  } catch (error) {
    response.send(error);
  }
};

module.exports = notesCltr;
