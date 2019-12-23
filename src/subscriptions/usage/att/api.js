import configureAxios from 'configure/axios';

const axios = configureAxios();

export const findCurrent = (subId) => axios.get(`att/usage/${subId}/`);
