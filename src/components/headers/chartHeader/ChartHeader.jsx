import React, {useEffect, useState} from 'react';
import './ChartHeader.scss';

const ChartHeader = ({ title, bigComponent, smallComponent = bigComponent }) => {
  return (
    <div className="chart-header">
      <p>{title}</p>
      <div className="chart-header__big">
        {bigComponent}
      </div>
      <div className="chart-header__small">
        {smallComponent}
      </div>
    </div>
  );
};

export default ChartHeader;
