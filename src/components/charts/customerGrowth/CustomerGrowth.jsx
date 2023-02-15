import React, { useState } from 'react';
import ChartHeaderSettings from '../../headers/chartHeaderSettings/ChartHeaderSettings';
import ReactApexChart from 'react-apexcharts';
import { AutoSizer } from 'react-virtualized';
import ChartFooter from '../../footer/chartFooter/ChartFooter';
import { customerData } from '../../../data/customer';
import './CustomerGrowth.scss';


const CustomerGrowth = () => {
  const [chart] = useState(customerData)

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
