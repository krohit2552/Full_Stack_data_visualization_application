Your mission, should you choose to accept it, will be to build a data visualization web
application that can analyze e-commerce data from a sample Shopify store stored in
MongoDB. You will build an API layer that reads the data from the database and performs the
necessary queries to manipulate data and serve it to the front end through a REST API. The
front end should connect to your API and visualize the data using Chart.js or a similar
JavaScript visualization library.

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
