import React, {useState} from "react";
import Header from "./components/headers/header/Header";
import Menu from "./components/menu/Menu";
import Analytics from "./components/charts/analytics/Analytics";
import GlobalHeatmap from "./components/charts/globalHeatmap/GlobalHeatmap";
import MediaQuery from "react-responsive";
import TrendingLocation from "./components/charts/trendingLocation/TrendingLocation";
import CustomerGrowth from "./components/charts/customerGrowth/CustomerGrowth";
import SalesData from "./components/charts/salesData/SalesData";
import Revenue from "./components/charts/revenue/Revenue";
import NewLeads from "./components/charts/newLeads/NewLeads";
import Footer from "./components/footer/Footer";

import './App.scss';

const App = () => {
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

export default App;
