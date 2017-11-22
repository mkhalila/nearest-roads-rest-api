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

app.get('/fromLocation', (req, res) => {
  let { lat, long, distance } = req.query;

  lat = parseFloat(lat);
  long = parseFloat(long);
  distance = parseFloat(distance);

  nearestRoads.fromLocation(lat, long, distance, (err, data) => {
    if (err) res.status(400).json({ error: err.message });
    else res.status(200).json({ data });
  });
});

app.get('*', (req, res) => res.status(404).json({ error: 'Route not found.' }));

app.listen(port);

module.exports = app; // for testing
