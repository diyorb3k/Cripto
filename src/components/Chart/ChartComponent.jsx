import React, { useEffect, useState } from 'react';
import '../../Scss/Chart.scss';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null); 
  const [timePeriod, setTimePeriod] = useState(24 * 60 * 60); 

  const fetchChartData = async () => {
    const endTime = Math.floor(Date.now() / 1000); 
    const startTime = endTime - timePeriod; 
    try {
      const response = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=inr&from=${startTime}&to=${endTime}`); 
      const data = await response.json();
      
      const prices = data.prices; 
      const labels = prices.map(price => new Date(price[0]).toLocaleTimeString()); 
      const priceValues = prices.map(price => price[1]); 

      const formattedData = {
        labels: labels, 
        datasets: [
          {
            label: 'Price (Last Period) in INR',
            data: priceValues, 
            borderColor: 'rgba(54, 162, 235, 1)',
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderWidth: 5,
            tension: 0.4,
            fill: true,
            pointRadius: 0,
          },
        ],
      };

      setChartData(formattedData);
    } catch (error) {
      console.error('API dan maʼlumot olishda xatolik:', error);
    }
  };

  useEffect(() => {
    fetchChartData();
  }, [timePeriod]);

  const handleTimePeriodChange = (period) => {
    setTimePeriod(period);
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: '#ffffff',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff',
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff',
        },
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
      },
    },
  };

  return (
    <div className='charrtt' style={{ width: '1292px', margin: '0 auto' }}>
      {chartData ? (
        <Line data={chartData} options={options} />
      ) : (
        <p>Yuklanmoqda...</p>
      )}
      <div className='bnn_grup'>
        <button className='btn1' onClick={() => handleTimePeriodChange(24 * 60 * 60)}><p>24 Hours</p></button>
        <button className='btn2' onClick={() => handleTimePeriodChange(30 * 24 * 60 * 60)}><p>30 Days</p></button>
        <button className='btn3' onClick={() => handleTimePeriodChange(3 * 30 * 24 * 60 * 60)}>3 Months</button>
        <button className='btn4' onClick={() => handleTimePeriodChange(365 * 24 * 60 * 60)}>1 Year</button>
      </div>
    </div>
  );
};

export default ChartComponent;
