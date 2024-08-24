const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  customer_id: mongoose.Schema.Types.ObjectId,
  // Add other fields as needed
});

module.exports = mongoose.model('Product', productSchema);
