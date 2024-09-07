import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Tooltip, Legend);

const CryptoChart = () => {
    const [chartData, setChartData] = useState({ labels: [], data: [] });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h');
            const data = await response.json();

            const labels = data.map((coin) => coin.name);
            const prices = data.map((coin) => coin.current_price);

            setChartData({ labels, data: prices });
        };

        fetchData();
    }, []);

    const chartConfig = {
        labels: chartData.labels,
        datasets: [
            {
                label: 'Kriptovalyuta Narxlari',
                data: chartData.data,
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                pointBackgroundColor: 'rgba(75, 192, 192, 1)',
            },
        ],
    };

    return (
        <div>
            <h1>Kriptovalyuta Narxlari</h1>
            <Line data={chartConfig} />
        </div>
    );
};

export default CryptoChart;
