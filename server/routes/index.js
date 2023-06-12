const express = require('express');
const DataController = require('../controllers/DataController');

const router = express.Router();

router.get('/api', (req, res) => {
  DataController.getPrices(req, res);
});

module.exports = router;
