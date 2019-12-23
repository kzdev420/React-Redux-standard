import configureAxios from 'configure/axios';

const axios = configureAxios();

export const fetchFiltered = (params) => axios.get('insurance/devices/', { params });
export const find = (id) => axios.get(`insurance/devices/${id}/`);

export const create = (attrs) => axios.post('insurance/devices/', attrs);
export const activate = (id) => axios.post(`insurance/devices/${id}/activate/`);
