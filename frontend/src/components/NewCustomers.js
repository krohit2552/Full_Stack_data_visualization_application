import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const NewCustomers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/customers/new`)
      .then(response => {
        const customerData = response.data.map(item => ({
          x: item._id,
          y: item.count,
        }));
        setData(customerData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [{
      label: 'New Customers Added Over Time',
      data,
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
    }],
  };

  return (
    <div>
      <h2>New Customers Added Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default NewCustomers;
