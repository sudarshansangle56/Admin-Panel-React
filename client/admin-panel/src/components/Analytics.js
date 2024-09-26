import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = () => {
  const [metrics, setMetrics] = useState({
    last24Hours: 0,
    last7Days: 0,
    last15Days: 0,
    last30Days: 0,
  });

  useEffect(() => {
    fetchMetrics();
  }, []);

  const fetchMetrics = async () => {
    const response = await axios.get('http://localhost:3000/users');
    const users = response.data;

    const currentDate = new Date();
    const oneDayAgo = new Date(currentDate);
    oneDayAgo.setDate(oneDayAgo.getDate() - 1);
    const sevenDaysAgo = new Date(currentDate);
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    const fifteenDaysAgo = new Date(currentDate);
    fifteenDaysAgo.setDate(fifteenDaysAgo.getDate() - 15);
    const thirtyDaysAgo = new Date(currentDate);
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const metrics = {
      last24Hours: users.filter(user => new Date(user.createdAt) > oneDayAgo).length,
      last7Days: users.filter(user => new Date(user.createdAt) > sevenDaysAgo).length,
      last15Days: users.filter(user => new Date(user.createdAt) > fifteenDaysAgo).length,
      last30Days: users.filter(user => new Date(user.createdAt) > thirtyDaysAgo).length,
    };
    
    setMetrics(metrics);
  };

  const chartData = {
    labels: ['Last 24 Hours', 'Last 7 Days', 'Last 15 Days', 'Last 30 Days'],
    datasets: [{
      label: 'User Registrations',
      data: [metrics.last24Hours, metrics.last7Days, metrics.last15Days, metrics.last30Days],
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
    }],
  };

  return (
    <div>
      <h2>User Registration Metrics</h2>
      <div>
        <p>Last 24 hours: {metrics.last24Hours}</p>
        <p>Last 7 days: {metrics.last7Days}</p>
        <p>Last 15 days: {metrics.last15Days}</p>
        <p>Last 30 days: {metrics.last30Days}</p>
      </div>
      <Bar data={chartData} />
    </div>
  );
};

export default Analytics;
