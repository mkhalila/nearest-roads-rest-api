const express = require('express');
const bodyParser = require('body-parser');
const nearestRoads = require('nearest-roads');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3001;

if (process.env.NODE_ENV !== 'test') {
  // use morgan to log at command line
  app.use(morgan('dev'));
}

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ data: 'Welcome to Nearest Roads!' }));

app.get('*', (req, res) => res.status(404).json({ error: 'Not Found.' }));

app.listen(port);

module.exports = app; // for testing
