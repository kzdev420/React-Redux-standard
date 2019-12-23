import configureAxios from 'configure/axios';

const axios = configureAxios();

export const findCurrent = (subId) => axios.get(`usage/${subId}/`);
