import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const SalesOverTime = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders/sales`)
      .then(response => {
        const salesData = response.data.map(item => ({
          x: item._id,
          y: item.totalSales,
        }));
        setData(salesData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [{
      label: 'Total Sales Over Time',
      data,
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
    }],
  };

  return (
    <div>
      <h2>Total Sales Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SalesOverTime;
