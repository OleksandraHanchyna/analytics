import React, { useRef, useState, useEffect } from 'react';
import ChartHeaderSettings from '../../headers/chartHeaderSettings/ChartHeaderSettings';
import ChartFooter from '../../footer/chartFooter/ChartFooter';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { data, options } from '../../../data/sales';
import './SalesData.scss';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const SalesData = () => {
  const chartRef = useRef(null);
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const createGradient = (ctx, area) => {
    const colorStart = '#0044AA';
    const colorMid = '#0094FF';
    const colorEnd = '#00CCF9';

    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);

    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(0.5, colorMid);
    gradient.addColorStop(1, colorEnd);

    return gradient;
  }

  useEffect(() => {
    const chart = chartRef.current;

    if (!chart) {
      return;
    }

    const chartData = {
      ...data,
      datasets: data.datasets.map(dataset => ({
        ...dataset,
        backgroundColor: createGradient(chart.ctx, chart.chartArea),
      })),
    };

    setChartData(chartData);
  }, []);

  return (
    <div className="sales-data">
      <ChartHeaderSettings title="Sales Data" />
      <div className="sales-data__body">
        <div className="sales-data__body__chart">
          <Bar ref={chartRef} options={options} data={chartData} />
        </div>
        <div className="sales-data__body__scale">
          {
            ['01', '02', '03', '04', '05', '06'].map((item, index) => (
              <div className="sales-data__body__scale-item" key={index}>
                {item}
              </div>
            ))
          }
        </div>
      </div>
      <ChartFooter />
    </div>
  );
};

export default SalesData;
