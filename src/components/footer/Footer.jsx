import React from 'react';
import { data } from "../../data/footer";
import './Footer.scss';

const Footer = () => {

  return (
    <div className="footer">
      {
        data.map(item => (
          <div
            key={item.id}
            className="footer-icon"
            onClick={item.click}
          >
            <img src={item.src} />
          </div>
        ))
      }
    </div>
  );
};

export default Footer;
