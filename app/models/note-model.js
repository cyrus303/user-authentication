const mongoose = require('mongoose');
const {Schema, model} = mongoose;

//title, body, userID

const noteSchema = new Schema(
  {
    title: String,
    body: String,
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {timestamps: true}
);

const Note = model('Note', noteSchema);
module.exports = Note;
