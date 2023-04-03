'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 2 here
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);
  const area = width * height;
  const perimeter = 2 * (width + height);
  const result = { area: area, perimeter: perimeter };
  res.json(result);
});

// define endpoint for exercise 3 here
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  let result = Math.pow(base, exponent);
  let response = { result: result };
  if (req.query.root === 'true') {
    response.root = Math.sqrt(base);
  }
  res.json(response);
});

// define endpoint for exercise 4 here

const PORT = process.env.PORT || 3000;
app.listen(PORT);