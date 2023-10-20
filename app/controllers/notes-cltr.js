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

notesCltr.show = async (request, response) => {
  const id = request.params.id;
  try {
    const note = await NoteModel.findOne({
      _id: id,
      userId: request.userId,
    });
    if (!note) {
      response.status(404).send({});
    } else {
      response.send(note);
    }
  } catch (error) {
    response.send(error);
  }
};

notesCltr.update = async (request, response) => {
  const id = request.params.id;
  const body = request.body;
  try {
    const note = await NoteModel.findOneAndUpdate(
      {
        _id: id,
        userId: request.userId,
      },
      body,
      {new: true}
    );

    if (!note) {
      response.status(404).send({});
    } else {
      response.send(note);
    }
  } catch (error) {
    response.send(error);
  }
};

notesCltr.destory = async (request, response) => {
  const id = request.params.id;
  try {
    const note = await NoteModel.findOneAndDelete({
      _id: id,
      userId: request.userId,
    });
    if (!note) {
      response.status(404).send({});
    } else {
      response.send(note);
    }
  } catch (error) {
    response.send(error);
  }
};

module.exports = notesCltr;
