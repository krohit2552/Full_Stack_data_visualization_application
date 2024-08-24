const Product = require('../models/productModel');

exports.getGeographicalDistribution = async (req, res) => {
  try {
    const distribution = await Product.aggregate([
      {
        $lookup: {
          from: "shopifyCustomers",
          localField: "customer_id",
          foreignField: "_id",
          as: "customer",
        },
      },
      { $unwind: "$customer" },
      {
        $group: {
          _id: "$customer.default_address.city",
          count: { $sum: 1 },
        },
      },
    ]);
    res.json(distribution);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Implement other controllers similarly
