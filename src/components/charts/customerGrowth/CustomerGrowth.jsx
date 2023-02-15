import React, {useState} from 'react';
import './CustomerGrowth.scss';
import ChartHeaderSettings from "../../headers/chartHeaderSettings/ChartHeaderSettings";
import ReactApexChart from "react-apexcharts";
import {AutoSizer} from "react-virtualized";
import ChartFooter from "../../footer/chartFooter/ChartFooter";



const CustomerGrowth = () => {

  const [chart] = useState({
    series: [76, 67, 61],
    options: {
      chart: {
        type: 'radialBar',
      },
      plotOptions: {
        radialBar: {
          offsetY: 0,
          startAngle: -90,
          endAngle: 270,
          expandOnClick: false,
          hollow: {
            margin: 10,
            size: '50%',
            background: 'transparent',
            image: undefined,
          },
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              show: false,
            },
          }
        }
      },
      colors: ['#00CCF9', '#0987E1', '#1900B4'],
    },
  })


  return (
    <div className="customer">
      <ChartHeaderSettings title="Customer Growth" />
      <div className="customer__body">
        <AutoSizer>
          {({ height, width }) => (
            <ReactApexChart options={chart.options} series={chart.series} type="radialBar" height={height} width={width} />
          )}
        </AutoSizer>
        <div className="customer__body__title">
          <div className="customer__body__title-big">365</div>
          <div className="customer__body__title-small">days</div>
        </div>
      </div>
      <ChartFooter />
    </div>
  );
};

export default CustomerGrowth;
