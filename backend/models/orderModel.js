const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  created_at: Date,
  total_price_set: {
    shop_money: {
      amount: Number,
    },
  },
  // Add other fields as needed
});

module.exports = mongoose.model('Order', orderSchema);
