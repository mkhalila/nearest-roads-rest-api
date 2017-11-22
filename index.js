const express = require('express');
const bodyParser = require('body-parser');
const nearestRoads = require('nearest-roads');

const app = express();
const port = process.env.PORT || 3001;

// To support URL-encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ message: 'Welcome to Nearest Roads!' }));

app.listen(port);

module.exports = app; // for testing
