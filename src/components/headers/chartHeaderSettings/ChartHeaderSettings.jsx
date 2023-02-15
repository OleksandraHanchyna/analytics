import React from 'react';
import gear from './../../../icons/button/gear.svg';
import menu from './../../../icons/button/menu.svg';
import './ChartHeaderSettings.scss';

const ChartHeaderSettings = ({ title }) => {
  return (
    <div className="chart-header-settings">
      {title}
      <div className="chart-header-settings__buttons">
        <div className="chart-header-settings__svg">
          <img src={gear} alt="" />
        </div>
        <div className="chart-header-settings__svg">
          <img src={menu} alt="" />
        </div>
      </div>

    </div>
  );
};

export default ChartHeaderSettings;
