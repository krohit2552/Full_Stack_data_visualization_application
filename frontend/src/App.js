import React from 'react';
import SalesOverTime from './components/SalesOverTime';
import SalesGrowthRate from './components/SalesGrowthRate';
import NewCustomers from './components/NewCustomers';
import RepeatCustomers from './components/RepeatCustomers';
import GeographicalDistribution from './components/GeographicalDistribution';
import CustomerLifetimeValue from './components/CustomerLifetimeValue';
import './styles.css';

function App() {
  return (
    <div className="App">
      <h1>Data Visualization Dashboard</h1>
      <SalesOverTime />
      <SalesGrowthRate />
      <NewCustomers />
      <RepeatCustomers />
      <GeographicalDistribution />
      <CustomerLifetimeValue />
    </div>
  );
}

export default App;
