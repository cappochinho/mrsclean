const express = require('express');
const PricesController = require('../controllers/PricesController');

const router = express.Router();

router.get('/api', (req, res) => {
  PricesController.getPrices(req, res);
});

module.exports = router;
