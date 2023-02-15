import salesforce from "../icons/logos/salesforce.svg";
import instagram from "../icons/logos/instagram.svg";
import whatsapp from "../icons/logos/whatsapp.svg";

export const leadsTableData = [
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

export const leadsHeaderData = [
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
  },
];