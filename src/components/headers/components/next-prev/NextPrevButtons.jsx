import React from 'react';
import prevBtn from './../../../../icons/button/prev-btn.svg';
import nextBtn from './../../../../icons/button/next-btn.svg';
import './NextPrevButtons.scss';

const NextPrevButtons = () => {
  return (
    <div className="buttons">
      <div className="buttons-prev">
        <img src={prevBtn} alt="" />
      </div>
      <div className="buttons-next">
        <img src={nextBtn} alt="" />
      </div>
    </div>
  );
};

export default NextPrevButtons;
