const express = require('express');
const router = express.Router();
const { getGeographicalDistribution } = require('../controllers/productController');

router.get('/geographical-distribution', getGeographicalDistribution);

// Add other routes as needed

module.exports = router;
