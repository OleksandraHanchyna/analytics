import React, {useEffect, useState} from 'react';

import './Menu.scss';
import Header from "../headers/header/Header";
import hamburger from "../../icons/menu/hamburger.svg";
import search from "../../icons/menu/search.svg";
import date_picker from "../../icons/menu/date-picker.svg";
import dots from "../../icons/menu/three-dots.svg";
import customer1 from '../../icons/customers/Ellipse 1.svg';
import customer2 from '../../icons/customers/Ellipse 3.svg';
import customer3 from '../../icons/customers/Ellipse 2.svg';
import customer4 from '../../icons/customers/Ellipse 4.svg';
import customer5 from '../../icons/customers/Ellipse 5.svg';
import customer6 from '../../icons/customers/Ellipse 6.svg';
import customer7 from '../../icons/customers/Ellipse 70.svg';
import Footer from "../footer/Footer";

const Menu = ({ homeClick }) => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth < 1200,
  });

  const topCustomers = [
    {
      id: 1,
      avatar: customer1,
      name:'Ronald Richards',
    },
    {
      id: 2,
      avatar: customer2,
      name:'Ralph Edwards',
    },
    {
      id: 3,
      avatar: customer3,
      name:'Kristin Watson',
    },
    {
      id: 4,
      avatar: customer4,
      name:'Esther Howard',
    },
    {
      id: 5,
      avatar: customer5,
      name:'Danielle Lane',
    },
    {
      id: 6,
      avatar: customer6,
      name:'Robert Fox',
    },
    {
      id: 7,
      avatar: customer7,
      name:'Leslie Alexander',
    },
  ]

  useEffect(() => {
    let mediaQuery = window.matchMedia("(max-width: 1200px)");
    mediaQuery.addListener(setMQuery);
    // this is the cleanup function to remove the listener
    return () => mediaQuery.removeListener(setMQuery);
  }, []);

  return (
    <div className="menu">
      <div className="menu__header">
        {
          mQuery && mQuery.matches
            ? <Header homeClick={homeClick} />
            : <div className="menu__header__min">
                <div className="menu__header__hamburger">
                  <img src={hamburger} alt="" />
                </div>
                <select className="menu__header__language">
                  <option value="EN">🇺🇸&emsp;English</option>
                  <option value="NL">🇳🇱&emsp;Netherlands</option>
                  <option value="DE">🇩🇪&emsp;Germany</option>
                  <option value="FR">🇫🇷&emsp;France</option>
                  <option value="ES">🇪🇸&emsp;Spain</option>
                </select>
              </div>
        }
      </div>
      <div className="menu__layout">
        Location
        <div className="menu__layout__search">
          <div className="menu__layout__search-icon">
            <img src={search} alt="" />
          </div>
          <input
            type="text"
            placeholder="Enter Locations"
            className="menu__layout__search-input"
          />
        </div>
        Date range
        <div className="menu__layout__search">
          <div className="menu__layout__search-icon">
            <img src={date_picker} alt="" />
          </div>
          <input
            type="text"
            placeholder="Select Dates"
            className="menu__layout__search-input"
          />
        </div>
        <div className="menu__layout__status">
          <div className="menu__layout__status-item">
            Vip
            <label className="menu__layout__status__switch">
              <input type="checkbox" />
              <span className="menu__layout__status__switch-slider-round" />
            </label>
          </div>
          <div className="menu__layout__status-item">
            Influence
            <label className="menu__layout__status__switch">
              <input type="checkbox" defaultChecked={true}/>
              <span className="menu__layout__status__switch-slider-round" />
            </label>
          </div>
        </div>
        Company type
        <div className="menu__layout__range">
          <select className="menu__layout__range-select" name="staff">
            <option value="StaffCount">Staff Count</option>
          </select>
          <select className="menu__layout__range-select" name="revenue">
            <option value="RevenueVol">Revenue Vol.</option>
          </select>
        </div>
      </div>
      <div className="menu__button">
        <input
          type="button"
          className="menu__button-primary menu__button-search"
          value="Search"
        />
      </div>
      <div className="menu__customers">
        <div className="menu__customers__header">
          Top customers
          <div className="menu__customers__header-dots">
            <img src={dots} alt="" />
          </div>
        </div>
        {
          topCustomers.map(customer => (
            <div
              key={customer.id}
              className="menu__customers__item">
              <div className="menu__customers__item-avatar">
                <img src={customer.avatar} alt={customer.id} />
              </div>
              <div className="menu__customers__item-name">
                {customer.name}
              </div>
            </div>
          ))
        }
      </div>
      {
        mQuery && mQuery.matches && (
          <div className="menu__button">
            <input
              type="button"
              className="menu__button-primary menu__button-uncover"
              value="View More"
            />
          </div>
        )
      }
      {
        mQuery && mQuery.matches && (
          <div className="menu__footer">
            <Footer />
          </div>
        )
      }
    </div>
  );
};

export default Menu;