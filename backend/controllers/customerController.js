const Customer = require('../models/customerModel');

exports.getNewCustomers = async (req, res) => {
  try {
    const customers = await Customer.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: "%Y-%m", date: "$created_at" } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]);
    res.json(customers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implement other controllers similarly
