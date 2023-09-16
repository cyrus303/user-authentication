require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const userCtlr = require('./app/controllers/users-cltr');

const port = process.env.PORT || 3030;

const configureDB = require('./config/db');
const routes = require('./config/routes');
configureDB();
app.use(express.json());
app.use(cors());
app.use('/', routes);

app.get('/api/users/register', userCtlr.register);

app.listen(port, () => {
  console.log('server running on port', port);
});
