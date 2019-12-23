import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('sprintSubscriptions');

export const getSprintSubscription = (state, id) => state.resources[id];
export const getAll = (state) => getResources(state);
export const getCurrentPlan = (state, id) => state.resources[id] && state.resources[id].plan;
export const getUpcomingPlan = (state, id) => state.meta[id] && state.meta[id].upcomingPlan;
export const getUpgradePurchase = (state, id) => state.meta[id] && state.meta[id].upgradePurchase;

export const getInsuranceContractId = (state, id) => state.meta[id] && state.meta[id].insuranceContractId;
