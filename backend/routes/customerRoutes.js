const express = require('express');
const router = express.Router();
const { getNewCustomers } = require('../controllers/customerController');

router.get('/new', getNewCustomers);

// Add other routes as needed

module.exports = router;
