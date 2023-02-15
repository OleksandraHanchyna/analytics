import React from 'react';
import './ChartFooter.scss';

const ChartFooter = () => {
  const data = [
    {
      id: 1,
      title: 'Weekly',
      color: 'dark-blue'
    },
    {
      id: 2,
      title: 'Monthly',
      color: 'blue'
    },
    {
      id: 3,
      title: 'Yearly',
      color: 'light-blue'
    }
  ]

  return (
    <div className="chart-footer">
      {
        data.map(item => (
          <div key={item.id} className="chart-footer__item">
            <span className={`chart-footer__item__span ${item.color}`} />
            {item.title}
          </div>
        ))
      }
    </div>
  );
};

export default ChartFooter;