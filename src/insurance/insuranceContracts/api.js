import configureAxios from 'configure/axios';

const axios = configureAxios();

export const fetchFiltered = (params) => axios.get('insurance/contracts/', { params });
export const find = (id) => axios.get(`insurance/contracts/${id}/`);

export const create = ({ subscription, att_subscription }) => axios.post('insurance/contracts/', { subscription, att_subscription });
export const activate = (id) => axios.post(`insurance/contracts/${id}/activate/`);
