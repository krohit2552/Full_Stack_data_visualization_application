import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import axios from 'axios';

const RepeatCustomers = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/customers/repeat`)
      .then(response => {
        const repeatData = response.data.map(item => ({
          x: item._id,
          y: item.count,
        }));
        setData(repeatData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const chartData = {
    datasets: [{
      label: 'Number of Repeat Customers',
      data,
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
    }],
  };

  return (
    <div>
      <h2>Number of Repeat Customers</h2>
      <Line data={chartData} />
    </div>
  );
};

export default RepeatCustomers;
