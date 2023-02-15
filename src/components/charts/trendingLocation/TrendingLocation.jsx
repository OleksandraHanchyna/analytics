import React, {useEffect, useState} from 'react';
import ChartHeaderSettings from "../../headers/chartHeaderSettings/ChartHeaderSettings";
import TrendingLocationItem from "./item/TrendingLocationItem";
import sort from './../../../icons/button/sort.svg';
import { defaultTrendingLocation, visibleItems } from "../../../data/trendingLocation";
import './TrendingLocation.scss';

const TrendingLocation = () => {
  const [isDownSorted, setIsDownSorted] = useState(true);
  const [data, setDate] = useState(defaultTrendingLocation);

  useEffect(() => {
    let dataSource = [...data];
    dataSource = dataSource.sort((a,b) => {
      if(a.countVisits > b.countVisits) {
        return isDownSorted ? -1 : 1;
      }
      if(a.countVisits < b.countVisits) {
        return isDownSorted ? 1 : -1;
      }
      return 0;
    });
    setDate([...dataSource]);
  }, [isDownSorted]);

  return (
    <div className="location">
      <ChartHeaderSettings title="Trending Location" />
      <div className="location__table">
        <div className="location__table__header">
          <p className="location__table__header-country">Country</p>
          <p className="location__table__header-city">City</p>
          <div className="location__table__header__visits">
            <p>Visits</p>
            <div className="location__table__header__sort" onClick={() => setIsDownSorted(!isDownSorted)}>
              <img
                alt=""
                className={isDownSorted ? 'location__table__header__sort-down': 'location__table__header__sort-up'}
                src={sort}
              />
            </div>
          </div>

        </div>
        <div className="location__table__body">
          {
            data.slice(0, visibleItems).map(item => (
              <TrendingLocationItem
                key={item.id}
                countryCode={item.countryCode}
                city={item.city}
                countVisits={item.countVisits}
                isGrow={item.isGrow}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default TrendingLocation;
