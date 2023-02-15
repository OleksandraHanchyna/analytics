import brazil from "../icons/flags/brazil.svg";
import colombia from "../icons/flags/colombia.svg";
import india from "../icons/flags/india.svg";
import mexico from "../icons/flags/mexico.svg";
import turkey from "../icons/flags/turkey.svg";
import united_arab_emirates from "../icons/flags/united-arab-emirates.svg";
import united_kingdom from "../icons/flags/united-kingdom.svg";
import united_states from "../icons/flags/united-states.svg";
export const visibleItems = 9
export const defaultTrendingLocation = [
  {
    id: 1,
    countryCode: '826',
    city: 'London',
    countVisits: 95554,
    isGrow: true,
  },
  {
    id: 2,
    countryCode: '840',
    city: 'Texas',
    countVisits: 93046,
    isGrow: false,
  },
  {
    id: 3,
    countryCode: '356',
    city: 'New Delhi',
    countVisits: 83676,
    isGrow: false,
  },
  {
    id: 4,
    countryCode: '792',
    city: 'Istanbul',
    countVisits: 70443,
    isGrow: true,
  },
  {
    id: 5,
    countryCode: '076',
    city: 'Brasilia',
    countVisits: 50963,
    isGrow: false,
  },
  {
    id: 6,
    countryCode: '784',
    city: 'Dubai',
    countVisits: 45904,
    isGrow: true,
  },
  {
    id: 7,
    countryCode: '484',
    city: 'Mexico City',
    countVisits: 43359,
    isGrow: true,
  },
  {
    id: 8,
    countryCode: '840',
    city: 'Miami',
    countVisits: 28200,
    isGrow: false,
  },
  {
    id: 9,
    countryCode: '170',
    city: 'Bogota',
    countVisits: 20796,
    isGrow: true,
  },
];
export const flagsSrc = {
  '076': brazil,
  '170': colombia,
  '356': india,
  '484': mexico,
  '792': turkey,
  '784': united_arab_emirates,
  '826': united_kingdom,
  '840': united_states,
};