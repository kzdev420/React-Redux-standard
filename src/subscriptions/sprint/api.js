import configureAxios from 'configure/axios';

const axios = configureAxios();

export const find = (id) => axios.get(`subscriptions/${id}/`);
export const fetchAll = (user_profile) => axios.get(`subscriptions/`, { params: { user_profile, sprint_status: 'active,suspended' } });
export const updatePlan = (id, plan_id) => axios.post(`subscriptions/${id}/update_plan/`, { plan_id });
