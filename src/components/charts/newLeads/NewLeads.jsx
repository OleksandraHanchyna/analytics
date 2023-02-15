import React from 'react';
import ChartHeader from '../../headers/chartHeader/ChartHeader';
import NextPrevButtons from '../../headers/components/next-prev/NextPrevButtons';
import sort from '../../../icons/button/sort.svg';
import { leadsHeaderData, leadsTableData } from '../../../data/leads';
import './NewLeads.scss';

const NewLeads = () => {

  return (
    <div className="leads">
      <ChartHeader title="New Leads" bigComponent={<NextPrevButtons />}/>
      <>
        <section className="leads__table">
          <header className="leads__table__header">
            {
              leadsHeaderData.map(item => (
                <div
                  key={item.id}
                  className={`leads__table__header__item ${item.style}`}>
                  {item.name}
                  <div className="leads__table__header__item-img">
                    <img src={sort} alt=""/>
                  </div>
                </div>
              ))
            }
          </header>
          <div className="leads__table__body">
            {
              leadsTableData.map(lead => (
                <div className="leads__table__body__item" key={lead.id}>
                  <div className="leads__table__source">
                    <img src={lead.source} alt={lead.id} />
                  </div>
                  <div className="leads__table__date">
                    {
                      new Date(lead.date)
                        .toLocaleDateString('en-GB', {
                          day : 'numeric',
                          month : 'short',
                          year : 'numeric'
                        })
                    }
                  </div>
                  <div className="leads__table__quote">
                    {
                      lead.quote.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'GBP',
                      })
                    }
                  </div>
                  <div className="leads__table__manager">{lead.manager}</div>
                  <div className="leads__table__customer">{lead.customer}</div>
                </div>
              ))
            }
          </div>
        </section>
      </>
    </div>
  );
};

export default NewLeads;
