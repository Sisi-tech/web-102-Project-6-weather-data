import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const BarChart = () => {
    const data={
        labels: ['2024-04-06', '2024-04-07', '2024-04-08', '2024-04-09', '2024-04-10', '2024-04-11', '2024-04-12'],
        datasets: [
            {
                label: 'Example Data',
                data: [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                backgroundColor: ["rgb(221 214 254)", "rgb(147 197 253)", "rgb(232 121 249)", "rgb(74 222 128)", "rgb(253 224 71)", "rgb(248 113 113)", "rgb(34 211 238)"],
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    }

    return (
        <div className='bg-violet-100/20 p-6 md:p-10 mb-20 rounded-xl'>
            <h2>Bar Chart</h2>
            <div>
                <Bar id="barChart" data={data}  />
            </div>
        </div>
    )
}

export default BarChart; 