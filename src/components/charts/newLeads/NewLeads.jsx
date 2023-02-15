import React from 'react';
import './NewLeads.scss';
import ChartHeader from "../../headers/chartHeader/ChartHeader";
import NextPrevButtons from "../../headers/components/next-prev/NextPrevButtons";
import salesforce from "../../../icons/logos/salesforce.svg";
import instagram from "../../../icons/logos/instagram.svg";
import whatsapp from "../../../icons/logos/whatsapp.svg";
import sort from "../../../icons/button/sort.svg";

const NewLeads = () => {
  const data = [
    {
      id: 1,
      source: salesforce,
      date: '01/18/2023',
      quote: 46234,
      manager: 'Francesca Simonz',
      customer: 'mthurn@meta.com',
    },
    {
      id: 2,
      source: instagram,
      date: '01/04/2023',
      quote: 21703,
      manager: 'Jane Cooper',
      customer: 'rgarcia@amazon.com',
    },
    {
      id: 3,
      source: whatsapp,
      date: '12/22/2022',
      quote: 106832,
      manager: 'Marvin McKinney',
      customer: 'priva.q@microsoft.com',
    },
  ];
  const headerData = [
    {
      id: 1,
      name: 'Source',
      style: 'leads__table__source'
    },
    {
      id: 2,
      name: 'Date',
      style: 'leads__table__date'
    },
    {
      id: 3,
      name: 'Quote',
      style: 'leads__table__quote'
    },
    {
      id: 4,
      name: 'Manager',
      style: 'leads__table__manager'
    },
    {
      id: 5,
      name: 'Customer',
      style: 'leads__table__customer'
    }
  ]

  return (
    <div className="leads">
      <ChartHeader title="New Leads" bigComponent={<NextPrevButtons />}/>
      <>
        <section className="leads__table">
          <header className="leads__table__header">
            {
              headerData.map(item => (
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
              data.map(lead => (
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
