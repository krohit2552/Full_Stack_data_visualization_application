const Order = require('../models/orderModel');

exports.getTotalSales = async (req, res) => {
  try {
    const sales = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$created_at" } },
          totalSales: { $sum: "$total_price_set.shop_money.amount" },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(sales);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implement other controllers similarly
