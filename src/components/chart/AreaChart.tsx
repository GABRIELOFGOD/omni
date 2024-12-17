import React, { useRef, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { ChartData, ChartOptions } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const AreaChart: React.FC = () => {
  const chartRef = useRef<any>(null);
  
  const data: ChartData<'line'> = {
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [
      {
        label: 'Orders',
        data: [0, 200, 320, 450, 150, 280, 550],
        borderColor: '#2D9CDB',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
        tension: 0.4,
        pointRadius: 1,
      },
    ],
  };

  const options: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
        position: 'top',
      },
      tooltip: {
        enabled: true,
        mode: 'index',
      },
    },
    scales: {
      x: {
        display: false,
        title: {
          display: false,
          text: 'days',
        },
      },
      y: {
        display: false,
        title: {
          display: true,
          text: 'Sales (in USD)',
        },
        beginAtZero: true,
      },
    },
  };

  const createGradient = (ctx: CanvasRenderingContext2D) => {
    const gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(75, 192, 192, 1)');
    gradient.addColorStop(1, 'rgba(75, 192, 192, 0)');
    return gradient;
  };

  useEffect(() => {
    const ctx = chartRef.current?.chartInstance?.ctx;
    if (ctx) {
      const gradient = createGradient(ctx);
      data.datasets[0].backgroundColor = gradient;
    }
  }, [data.datasets]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <Line ref={chartRef} data={data} options={options} />
    </div>
  );
};

export default AreaChart;
