import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const DataChart = () => {
  const data = {
    labels: ['2024-04-06', '2024-04-07', '2024-04-08', '2024-04-09', '2024-04-10', '2024-04-11', '2024-04-12'],
    datasets: [
      {
        label: 'Example Data',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };


  return (
    <div className='bg-violet-100/20 p-6 md:p-10 mb-20 rounded-xl'>
      <h2>Line Chart</h2>
      <div>
        <Line id="myChart" data={data} />
      </div>
    </div>
  );
};

export default DataChart;
