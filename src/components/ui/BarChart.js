import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jun-2023', value: 4000 },
  { name: 'Jul-2023', value: 3000 },
  { name: 'Aug-2023', value: 2000 },
  { name: 'Sep-2023', value: 2780 },
  { name: 'Oct-2023', value: 1890 },
  { name: 'Nov-2023', value: 2390 },
  { name: 'Dec-2023', value: 3490 },
  { name: 'Jan-2023', value: 3200 },
  { name: 'Feb-2023', value: 2500 },
  { name: 'Jun-2024', value: 4000 },
  { name: 'Jul-2024', value: 3000 },
  { name: 'Aug-2024', value: 2000 },
  { name: 'Sep-2024', value: 2780 },
  { name: 'Oct-2024', value: 1890 },
  { name: 'Nov-2024', value: 2390 },
  { name: 'Dec-2024', value: 3490 },
  { name: 'Jan-2024', value: 3200 },
  { name: 'Feb-2024', value: 2500 },
  // Add more data as needed
];

// Assuming current month is 'Aug-2024'
const currentMonth = 'Aug-2024';

const BarChartComponent = () => {
  // Map over the data to assign color
  const coloredData = data.map((item) => ({
    ...item,
    fill: item.name === currentMonth ? '#2eb335' : '#FFFFFF',
  }));

  return (
    <ResponsiveContainer width="100%" minHeight={400}>
      <BarChart
        width={1060}
        height={400}
        data={coloredData}
        margin={{ top: 20, right: 30, left: 20, bottom: 60 }} // Increased bottom margin
      >
        <CartesianGrid stroke="#FFFFFF" /> {/* White grid lines */}
        <XAxis dataKey="name" angle={-60} textAnchor="end" stroke="#FFFFFF" />
        <YAxis stroke="#FFFFFF" />
        <Tooltip contentStyle={{ backgroundColor: '#333', borderColor: '#FFFFFF' }} itemStyle={{ color: '#FFFFFF' }} />
        <Legend wrapperStyle={{ color: '#FFFFFF' }} />
        <Bar
          dataKey="value"
          radius={[10, 10, 0, 0]}
          fill={({ payload }) => payload.fill} // Use the fill color from the data
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
