import React from 'react';
import './DateRange.scss';

const DateRange = () => {
  return (
    <div className="date-range">
      <select>
        <option value="0">1 Dec - 20 Jan</option>
        <option value="1">20 Jan - 23 Feb</option>
      </select>
    </div>
  );
};

export default DateRange;
