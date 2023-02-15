import React, { useEffect, useState } from 'react';
import icon from './../../../icons/Logo.svg';
import hamburger from './../../../icons/menu/hamburger.svg';
import arrow from './../../../icons/users/user-arrow.svg'
import './Header.scss';

const Header = ({ homeClick }) => {
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
    <div className="header">
      <div className="header-icon">
        <img src={icon} alt="" />
      </div>
      <div>
        {
          mQuery && mQuery.matches
          ? <div className="header__menu">
              <img
                src={hamburger}
                onClick={homeClick}
                alt="hamburger"
              />
            </div>
          : <div className="header__user">
              <p className="header__user-name">Isabella F.</p>
              <div className="header__user-arrow">
                <img src={arrow} alt="" />
              </div>
              <div className="header__user-avatar" />
            </div>
        }
      </div>
    </div>
  );
};

export default Header;
