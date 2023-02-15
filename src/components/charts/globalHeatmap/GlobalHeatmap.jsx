import React from 'react';
import ChartHeader from "../../headers/chartHeader/ChartHeader";
import map from './../../../icons/Map.svg';
import './GlobalHeatmap.scss';
import {LabelSeries, MarkSeries, XYPlot} from "react-vis";
import {AutoSizer} from "react-virtualized";
import DateRange from "../../headers/components/date-range/DateRange";
import DatePicker from "../../headers/components/date-picker/DatePicker";

const GlobalHeatmap = () => {
  const dots = [
    {
      id: 1,
      title: '1m+',
      color: '#005BD1'
    },
    {
      id: 2,
      title: '500k+',
      color: '#006EFF'
    },
    {
      id: 3,
      title: '100k+',
      color: '#4299FF'
    },
    {
      id: 4,
      title: '10k+',
      color: '#85C4FF'
    },
    {
      id: 3,
      title: '<5k',
      color: '#C1E0FD'
    }
  ]

  return (
    <div className="global">
      <ChartHeader title="Global Heatmap" bigComponent={<DateRange />} smallComponent={<DatePicker />}/>
      <div className="global-map">
        <img src={map} alt=""/>
      </div>
      <div className="global__footer">
        <div className="global__footer__dots">
          {
            dots.map(dot => (
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
