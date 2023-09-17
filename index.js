require('dotenv').config();
const express = require('express');
const cors = require('cors');
const configureDB = require('./config/db');
const routes = require('./config/routes');

const port = process.env.PORT || 3030;
const app = express();

configureDB();
app.use(express.json());
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
  console.log('server running on port', port);
});
