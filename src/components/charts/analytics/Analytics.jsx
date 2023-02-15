import React, {useEffect, useState} from 'react';
import ChartHeader from "../../headers/chartHeader/ChartHeader";
import './Analytics.scss';
import DateRange from "../../headers/components/date-range/DateRange";
import NextPrevButtons from "../../headers/components/next-prev/NextPrevButtons";
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
import { Line } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export


const Analytics = () => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768,
  });

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
          beginAtZero: true,
        },
        grid: {
          offset: true,
        },
        border: {
          display: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false,
        },
      },
    }
  };

  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        data: labels.map(() => 0),
        borderColor: 'transparent',
        backgroundColor: 'transparent',
      },
    ],
  };

  const optionsChart = {
    responsive: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        border:{
          display:false
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          drawBorder: false,
          display: false,
        },
        border: {
          display: false
        },
        max: 60,
      }
    },
    elements: {
      point: {
        radius: 0,
      }
    }
  };

  const labelsChart = [0,2,3,4,6,7,9,10,11,12,14,17,18,21,22,23,25,26,28,30,31,32,34,36,37,40,42,44,45,47,48,50];

  const dataChart = {
    labels : labelsChart,
    datasets: [
      {
        fill: true,
        data: [0,2,8,8,16,12,32,44,20,12,16,42,38,48,20,26,19,24,28,20,30,32,34,27,40,44,42,40,32,30,26,40],
        borderColor: 'rgba(0, 148, 255, 0.9)',
        backgroundColor: 'rgba(0, 148, 255, 0.4)',
        borderWidth: 0.5,
        borderJoinStyle: 'round'
      },
    ],
  };


  useEffect(() => {
    let mediaQuery = window.matchMedia("(min-width: 768px)");
    mediaQuery.addListener(setMQuery);
    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  return (
    <div className="analytics">
      <ChartHeader title="Analytics" bigComponent={<DateRange />} smallComponent={<NextPrevButtons />} />
      <div className="analytics__body">
        {
          mQuery && mQuery.matches && (
            <div className="analytics__body-buttons">
              <NextPrevButtons />
            </div>
          )
        }
        <div className="analytics__body__chart">
          <div className="analytics__body__chart__scale">
            <Line options={options} data={data} />
            <div className="analytics__body__chart__scale-labels">
              {
                labels.map(label => (
                  <div className="analytics__body__chart__scale-label">
                    <div>
                      {label}
                    </div>
                    22
                  </div>
                ))
              }
            </div>
          </div>

          <div className="analytics__body__chart__data">
            <Line options={optionsChart} data={dataChart} />
          </div>

          <div className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
