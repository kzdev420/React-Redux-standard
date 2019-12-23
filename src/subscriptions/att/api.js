import configureAxios from 'configure/axios';

const axios = configureAxios();

export const find = (id) => axios.get(`att/subscriptions/${id}/`);
export const fetchAll = (user_profile) => axios.get('att/subscriptions/', { params: { user_profile, att_status: 'active,suspended' } });
export const updatePlan = (id, plan_id) => axios.post(`att/subscriptions/${id}/update_plan/`, { plan_id });
