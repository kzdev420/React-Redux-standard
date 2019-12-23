import { resourceReducer, getResources } from 'redux-resource';

export default resourceReducer('attSubscriptions');

export const getAttSubscription = (state, id) => state.resources[id];
export const getAll = (state) => getResources(state);
export const getCurrentPlan = (state, id) => state.resources[id] && state.resources[id].plan;
export const getUpcomingPlan = (state, id) => state.meta[id] && state.meta[id].upcomingPlan;
export const getUpgradePurchase = (state, id) => state.meta[id] && state.meta[id].upgradePurchase;

export const getInsuranceContractId = (state, id) => state.meta[id] && state.meta[id].insuranceContractId;
export const getInsuredDeviceId = (state, id) => state.meta[id] && state.meta[id].insuredDeviceId;
