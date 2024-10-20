import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const HappinessChart = () => {
    const data = [
        {
          date: '2024-10-10',
          extremelyLikely: 10,
          veryLikely: 20,
          somewhatLikely: 15,
          notSoLikely: 5,
          notAtAllLikely: 3
        },
        {
          date: '2024-10-11',
          extremelyLikely: 12,
          veryLikely: 18,
          somewhatLikely: 13,
          notSoLikely: 6,
          notAtAllLikely: 4
        },
        {
            date: '2024-10-12',
            extremelyLikely: 9,
            veryLikely: 10,
            somewhatLikely: 7,
            notSoLikely: 6,
            notAtAllLikely: 8
          },
          {
            date: '2024-10-13',
            extremelyLikely: 12,
            veryLikely: 18,
            somewhatLikely: 13,
            notSoLikely: 6,
            notAtAllLikely: 4
          },
          {
            date: '2024-10-14',
            extremelyLikely: 12,
            veryLikely: 8,
            somewhatLikely: 13,
            notSoLikely: 6,
            notAtAllLikely: 10
          },
        // More data entries for each day
      ];
      
  return (
    <ResponsiveContainer width="50%" height={250}>
      <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="date" style={{ fontSize: '8px'}} />
        <YAxis style={{ fontSize: '8px'}} />
        <Tooltip />
        <Legend wrapperStyle={{ fontSize: '8px' }} /> 
        <Bar dataKey="extremelyLikely" stackId="a" fill="#82ca9d" />
        <Bar dataKey="veryLikely" stackId="a" fill="#8884d8" />
        <Bar dataKey="somewhatLikely" stackId="a" fill="#ffc658" />
        <Bar dataKey="notSoLikely" stackId="a" fill="#ff8042" />
        <Bar dataKey="notAtAllLikely" stackId="a" fill="#d32f2f" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default HappinessChart;
