import React, { useRef, useEffect } from 'react';
import {
  createChart,
  IChartApi,
  CandlestickData,
  ISeriesApi,
} from 'lightweight-charts';

interface CandlestickChartProps {
  data: CandlestickData[]; // Data for the candlestick chart
}

const CandlestickChart: React.FC<CandlestickChartProps> = ({ data }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartInstance = useRef<IChartApi | null>(null);
  const candlestickSeries = useRef<ISeriesApi<'Candlestick'> | null>(null);

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create the chart instance
    chartInstance.current = createChart(chartContainerRef.current, {
      width: chartContainerRef.current.clientWidth,
      height: 400,
      layout: {
        // background: "#fff",
        textColor: '#333',
      },
      grid: {
        vertLines: {
          color: '#eee',
        },
        horzLines: {
          color: '#eee',
        },
      },
    });

    // Add a candlestick series
    candlestickSeries.current = chartInstance.current.addCandlestickSeries({
      upColor: '#4caf50',
      downColor: '#f44336',
      borderVisible: false,
      wickUpColor: '#4caf50',
      wickDownColor: '#f44336',
    });

    // Set the initial data
    candlestickSeries.current.setData(data);

    // Handle chart resizing
    const handleResize = () => {
      chartInstance.current?.resize(
        chartContainerRef.current?.clientWidth || 0,
        400
      );
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      chartInstance.current?.remove();
    };
  }, [data]);

  return (
    <div
      ref={chartContainerRef}
      style={{ position: 'relative', width: '100%' }}
    />
  );
};

export default CandlestickChart;
