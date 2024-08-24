Backend (Node.js with Express)
backend/
├── config/
│   └── db.js
├── controllers/
│   ├── customerController.js
│   ├── orderController.js
│   └── productController.js
├── models/
│   ├── customerModel.js
│   ├── orderModel.js
│   └── productModel.js
├── routes/
│   ├── customerRoutes.js
│   ├── orderRoutes.js
│   └── productRoutes.js
├── .env
├── app.js
├── package.json
└── .gitignore


Frontend (React with Chart.js)
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── SalesOverTime.js
│   │   ├── SalesGrowthRate.js
│   │   ├── NewCustomers.js
│   │   ├── RepeatCustomers.js
│   │   ├── GeographicalDistribution.js
│   │   └── CustomerLifetimeValue.js
│   ├── App.js
│   ├── index.js
│   └── styles.css
├── .env
├── package.json
└── .gitignore