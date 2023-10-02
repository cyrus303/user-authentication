const noteCreateSchema = {
  title: {
    notEmpty: {errorMessage: 'Title is required'},
  },
};

module.exports = noteCreateSchema;
