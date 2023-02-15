import React from 'react';
import { flagsSrc } from "../../../../data/trendingLocation";
import increase from './../../../../icons/button/increase-arrow.svg';
import decrease from './../../../../icons/button/decrease-arrow.svg';
import './TrendingLocationItem.scss';

const TrendingLocationItem = ({ countryCode, city, countVisits, isGrow }) => {
  return (
    <div className="location-item">
      <div className="location-item__country">
        <div className="location-item__country-flag">
          <img src={flagsSrc[countryCode]} alt=""/>
        </div>
      </div>
      <div className="location-item__city">
        <p>{city}</p>
      </div>
      <div className="location-item__visits">
        <p>{countVisits}</p>
      </div>
      <div className="location-item__grow">
        <img src={isGrow ? increase : decrease}/>
      </div>
    </div>
  );
};

export default TrendingLocationItem;
