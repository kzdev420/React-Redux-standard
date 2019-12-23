import configureAxios from 'configure/axios';

const axios = configureAxios();

export const find = (id) => axios.get(`/insurance/plans/${id}/`);
export const fetchValue = (value) => axios.get('/insurance/plans/', { params: { value } });
