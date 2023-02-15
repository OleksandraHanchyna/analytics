import React, { useEffect, useState } from 'react';
import ChartHeader from '../../headers/chartHeader/ChartHeader';
import DateRange from '../../headers/components/date-range/DateRange';
import NextPrevButtons from '../../headers/components/next-prev/NextPrevButtons';
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
import {
  optionsScale,
  dataScale,
  labels,
  dataChart,
  optionsChart
} from '../../../data/analytics'
import './Analytics.scss';

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

const Analytics = () => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth > 768,
  });

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
            <Line options={optionsScale} data={dataScale} />
            <div className="analytics__body__chart__scale-labels">
              {
                labels.map((label, index) => (
                  <div
                    key={index}
                    className="analytics__body__chart__scale-label"
                  >
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
