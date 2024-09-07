import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, Button } from 'antd';

const data = [
  { time: '00:00', value: 2920 },
  { time: '01:00', value: 2940 },
  { time: '02:00', value: 2950 },
  
];

const MyChart = () => {
  return (
    <Card style={{ backgroundColor: '#1e1e1e', color: '#fff', borderRadius: 10 }}>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#444" />
          <XAxis dataKey="time" tick={{ fill: '#fff' }} />
          <YAxis tick={{ fill: '#fff' }} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line type="monotone" dataKey="value" stroke="#00bfff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 20 }}>
        <Button type="primary">24 Hours</Button>
        <Button>30 Days</Button>
        <Button>3 Months</Button>
        <Button>1 Year</Button>
      </div>
    </Card>
  );
};

export default MyChart;
