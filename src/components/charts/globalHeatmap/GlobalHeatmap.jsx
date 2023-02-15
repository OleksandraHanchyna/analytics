import React from 'react';
import ChartHeader from '../../headers/chartHeader/ChartHeader';
import map from './../../../icons/Map.svg';
import { dotsData } from '../../../data/globalHeatmap';
import DateRange from '../../headers/components/date-range/DateRange';
import DatePicker from '../../headers/components/date-picker/DatePicker';
import './GlobalHeatmap.scss';

const GlobalHeatmap = () => {

  return (
    <div className="global">
      <ChartHeader title="Global Heatmap" bigComponent={<DateRange />} smallComponent={<DatePicker />}/>
      <div className="global-map">
        <img src={map} alt=""/>
      </div>
      <div className="global__footer">
        <div className="global__footer__dots">
          {
            dotsData.map(dot => (
              <div className="global__footer__dot" key={dot.id}>
                <span className="global__footer__dot-span" style={{ backgroundColor: dot.color}} />
                {dot.title}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default GlobalHeatmap;
