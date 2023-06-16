const express = require('express');
const db = require('../utils/db');

const route2 = express.Router();

route2.post('/suggestions', (req, res) => {
  const name = req.body.name;
  const phoneNumber = req.body['phone number'];
  const suggestion = req.body.suggestion;

  const suggestions = db.suggestions;

  suggestions.insertOne({ name, phoneNumber, suggestion }, (err, result) => {
    if (err) {
      console.error('Failed to insert document:', err);
      res.status(500).send('Failed to insert document');
      return;
    }

      console.log('Form data inserted:', result.insertedId);
      res.send('Form data received');
  });
});

module.exports = route2;
