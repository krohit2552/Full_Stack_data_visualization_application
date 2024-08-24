const express = require('express');
const router = express.Router();
const { getTotalSales } = require('../controllers/orderController');

router.get('/sales', getTotalSales);

// Add other routes as needed

module.exports = router;
