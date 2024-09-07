// ChartComponent.js
import React from 'react';
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
  Filler,  // Fill opsiyasi uchun kerak
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
  const data = {
    labels: [
      '12:00 AM', '12:15 AM', '12:30 AM', '12:45 AM', '1:00 AM', '1:15 AM', '1:30 AM', '1:45 AM', '2:00 AM',
      '2:15 AM', '2:30 AM', '2:45 AM', '3:00 AM', '3:15 AM', '3:30 AM', '3:45 AM', '4:00 AM', '4:15 AM', '4:30 AM', '4:45 AM', '5:00 AM'
    ], // Har 15 daqiqada vaqt belgilari
    datasets: [
      {
        label: 'Price (Past 24 Hours) in INR',
        data: [
          2800000, 2801000, 2802000, 2803000, 2805000, 2806000, 2807000, 2808000, 2810000,
          2811000, 2812000, 2813000, 2815000, 2816000, 2817000, 2818000, 2820000, 2821000, 2822000, 2823000, 2825000
        ], // Har bir vaqt belgisiga mos keladigan qiymatlar
        borderColor: 'rgba(54, 162, 235, 1)', // Chiziq rangi
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // To'ldirilgan joyning rangi
        borderWidth: 2,
        tension: 0.4, // Chiziqni yumshatish
        fill: true, // To'ldirilgan rangi chizish
        pointRadius: 0, // Nuqtalarni yashirish
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: false, // O'qdagi chiziqlarni yashirish
        },
        ticks: {
          color: '#ffffff', // Vaqt belgilarini oq rangda ko'rsatish (dark mode uchun)
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)', // Yengil grid chiziqlari
        },
        ticks: {
          color: '#ffffff', // O'qdagi raqamlarni oq rangda ko'rsatish
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: '#ffffff', // Legend tekstining rangi
        },
      },
      tooltip: {
        enabled: true, // Ko'rsatkich faollashishi
        mode: 'index', // Interaktivlikni yaxshilash
        intersect: false,
      },
    },
  };

  return (
    <div className='charrtt' style={{ width: '1292px', margin: '0 auto' }}>
      <Line  data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
