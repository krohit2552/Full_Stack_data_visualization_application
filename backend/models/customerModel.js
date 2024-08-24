const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  created_at: Date,
  default_address: {
    city: String,
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Customer', customerSchema);
