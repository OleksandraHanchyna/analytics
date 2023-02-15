import React from 'react';
import date_picker from "../../../../icons/menu/date-picker.svg";
import './DatePicker.scss';

const DatePicker = () => {
  return (
    <div className="date-picker">
      <img src={date_picker} />
    </div>
  );
};

export default DatePicker;
