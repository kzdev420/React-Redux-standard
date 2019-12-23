import configureAxios from 'configure/axios';

const axios = configureAxios();

export const authenticate = () => axios.get('users/me/');

export const requestResetCode = (params) => axios.post('users/send_password_reset_code/', params);
export const resetPassword = (params) => axios.post('users/reset_password/', params);
export const logout = () => axios.post('users/logout/');
