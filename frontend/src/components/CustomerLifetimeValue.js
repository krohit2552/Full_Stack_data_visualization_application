import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

const CustomerLifetimeValue = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/customers/lifetime-value`)
      .then(response => {
        const valueData = response.data.map(item => ({
          x: item._id,
          y: item.lifetimeValue,
        }));
        setData(valueData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [{
      label: 'Customer Lifetime Value by Cohorts',
      data,
      backgroundColor: 'rgba(255, 159, 64, 0.2)',
      borderColor: 'rgba(255, 159, 64, 1)',
      borderWidth: 1,
    }],
  };

  return (
    <div>
      <h2>Customer Lifetime Value by Cohorts</h2>
      <Bar data={chartData} />
    </div>
  );
};

export default CustomerLifetimeValue;
