import { fetchAPI } from './api';

export const initializeTimes = (date) => {
  return fetchAPI(date);
};

export const updateTimes = (prevAvailableTimes, date) => {
  return fetchAPI(date);
};