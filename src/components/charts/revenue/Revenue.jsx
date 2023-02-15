import React from 'react';
import ChartHeaderSettings from "../../headers/chartHeaderSettings/ChartHeaderSettings";
import { data } from "../../../data/revenue";
import './Revenue.scss';

const Revenue = () => {

  return (
    <div className="revenue">
      <ChartHeaderSettings title="Revenue" />
      <div className="revenue__body">
        {
          data.map(item => (
            <div key={item.id} className="revenue__body__item">
              <p className="revenue__body__item__title">{item.title}</p>
              <div className="revenue__body__item__value">
                <p className="revenue__body__item-pounds">£{item.pounds}</p>
                <p className="revenue__body__item-percent">+ {item.percent} %</p>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Revenue;
