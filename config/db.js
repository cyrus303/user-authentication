const mongoose = require('mongoose');
const configureDB = async () => {
  const url = process.env.DB_URL;
  const name = process.env.DB_NAME || 'test-app';
  try {
    await mongoose.connect(`${url}/${name}`);
    console.log('connected to db', name);
  } catch (e) {
    console.log('error connecting to db', e.message);
  }
};

module.exports = configureDB;
