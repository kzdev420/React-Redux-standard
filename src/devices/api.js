import configureAxios from 'configure/axios';

const axios = configureAxios();

export const fetchFiltered = (brand, capacity, page = 1) => axios.get('devices/', { params: { brand, capacity, page } });
export const find = (id) => axios.get(`devices/${id}/`);
