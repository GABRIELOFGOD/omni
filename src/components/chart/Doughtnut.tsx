import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { DoughtnutChartProps } from '../../utils';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ color, percentage, completeLabel, remainingLabel }: DoughtnutChartProps) => {
  const data = {
    labels: [completeLabel, remainingLabel],
    datasets: [
      {
        data: [percentage, 100 - percentage],
        backgroundColor: [color == "red" ? "#FF5B5B" : color == "blue" ? "#2D9CDB" : "#00B074", color == "red" ? "rgba(255, 91, 91, 0.13)" : color == "blue" ? "rgba(45, 156, 219, 0.13)" : "rgba(0, 176, 116, 0.13)"],
        hoverBackgroundColor: [color == "red" ? "#FF5B5B" : color == "blue" ? "#2D9CDB" : "#00B074", color == "red" ? "rgba(255, 91, 91, 0.13)" : color == "blue" ? "rgba(45, 156, 219, 0.13)" : "rgba(0, 176, 116, 0.13)"],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
  };

  // const [percentage, setPercentage] = useState(75);

  return (
    <div style={{ position: 'relative', width: '130px', height: '130px' }}>
      <Doughnut data={data} options={options} />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          fontSize: '24px',
          fontWeight: 'bold',
        }}
        className='w-full justify-center items-center flex flex-col'
      >
        <p>{`${percentage.toFixed(2)}%`}</p>
        <span className='text-xs font-semibold text-center'>
          {percentage >= 50 ? completeLabel : remainingLabel}
        </span>
      </div>
    </div>
  );
};

export default DoughnutChart;
