const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//title, body, userID

const noteSchema = new Schema({
  title: String,
  body: String,
  userID: String,
});

const Note = model('Note', noteSchema);
module.exports = Note;
