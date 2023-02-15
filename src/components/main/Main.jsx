import React, {useState} from 'react';
import MediaQuery from 'react-responsive';
import './Main.scss';
import Header from '../headers/header/Header';
import Analytics from '../charts/analytics/Analytics';
import GlobalHeatmap from '../charts/globalHeatmap/GlobalHeatmap';
import CustomerGrowth from '../charts/customerGrowth/CustomerGrowth';
import SalesData from '../charts/salesData/SalesData';
import TrendingLocation from '../charts/trendingLocation/TrendingLocation';
import NewLeads from '../charts/newLeads/NewLeads';
import Revenue from '../charts/revenue/Revenue';
import Menu from "../menu/Menu";
import Footer from "../footer/Footer";

const Main = () => {
  const [isMenuShown, setIsMenuShown] = useState(false);

  const handleClick = () => {
    setIsMenuShown(!isMenuShown);
  }

  return (
    <div className="main">
      {
        isMenuShown
        ? <div className="main__menu main__menu-max-width">
            <Menu homeClick={handleClick} />
          </div>
        : <>
            <div className="main__menu main__menu-min-width">
              <Menu homeClick={handleClick} />
            </div>
            <div className="main__layout">
              <div className="main__layout__header">
                <Header homeClick={handleClick} />
              </div>
              <div className="main__layout__body">
                <div className="main__layout__body__content">
                  <div className="main__layout__body__content-item analytics-item">
                    <Analytics />
                  </div>
                  <div className="main__layout__body__content-item global-heatmap-item">
                    <GlobalHeatmap />
                  </div>
                </div>
                <div className="main__layout__body__content">
                  <div className="left-side">
                    <div className="main__layout__body__content">
                      <MediaQuery query="(max-width: 992px)">
                        <div className="main__layout__body__content-item trending-location-item">
                          <TrendingLocation />
                        </div>
                      </MediaQuery>
                      <div className="main__layout__body__content-item customer-growth-item">
                        <CustomerGrowth />
                      </div>
                      <div className="main__layout__body__content-item sales-data-item">
                        <SalesData />
                      </div>
                      <MediaQuery query="(max-width: 992px)">
                        <div className="main__layout__body__content-item revenue-item">
                          <Revenue />
                        </div>
                      </MediaQuery>
                      <div className="main__layout__body__content-item new-leads-item">
                        <NewLeads />
                      </div>
                    </div>
                  </div>
                  <div className="right-side">
                    <div className="main__layout__body__content-item trending-location-item">
                      <TrendingLocation />
                    </div>
                    <div className="main__layout__body__content-item revenue-item">
                      <Revenue />
                    </div>
                  </div>
                </div>
              </div>
              <MediaQuery query="(max-width: 768px)">
                <div className="main__layout__footer">
                  <Footer homeClick={handleClick} />
                </div>
              </MediaQuery>
            </div>
          </>
      }
    </div>
  );
};

export default Main;