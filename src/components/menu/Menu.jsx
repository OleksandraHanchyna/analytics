import React, { useEffect, useState } from 'react';
import Header from '../headers/header/Header';
import hamburger from '../../icons/menu/hamburger.svg';
import search from '../../icons/menu/search.svg';
import date_picker from '../../icons/menu/date-picker.svg';
import dots from '../../icons/menu/three-dots.svg';
import Footer from '../footer/Footer';
import { topCustomers } from "../../data/topCustomers";
import './Menu.scss';

const Menu = ({ homeClick }) => {
  const [mQuery, setMQuery] = useState({
    matches: window.innerWidth < 1200,
  });

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
                  <option value="EN">πΊπΈ&emsp;English</option>
                  <option value="NL">π³π±&emsp;Netherlands</option>
                  <option value="DE">π©πͺ&emsp;Germany</option>
                  <option value="FR">π«π·&emsp;France</option>
                  <option value="ES">πͺπΈ&emsp;Spain</option>
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