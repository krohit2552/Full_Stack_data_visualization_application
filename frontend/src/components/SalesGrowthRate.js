import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const SalesGrowthRate = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/orders/growth-rate`)
      .then(response => {
        const growthData = response.data.map(item => ({
          x: item._id,
          y: item.growthRate,
        }));
        setData(growthData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [{
      label: 'Sales Growth Rate Over Time',
      data,
      borderColor: 'rgba(153, 102, 255, 1)',
      backgroundColor: 'rgba(153, 102, 255, 0.2)',
    }],
  };

  return (
    <div>
      <h2>Sales Growth Rate Over Time</h2>
      <Line data={chartData} />
    </div>
  );
};

export default SalesGrowthRate;
