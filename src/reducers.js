import { combineReducers } from 'redux';
import { reducer as routerReducer } from 'redux-saga-first-router';
import { reducer as formReducer } from 'redux-form';
import auth, * as fromAuth from 'auth/reducer';
import sprintSubscriptions, * as fromSprintSubs from 'subscriptions/sprint/reducer';
import attSubscriptions, * as fromAttSubs from 'subscriptions/att/reducer';
import notifications, * as fromNotifications from 'notifications/reducer';
import usage, * as fromUsage from 'subscriptions/usage/sprint/reducer';
import attUsage, * as fromAttUsage from 'subscriptions/usage/att/reducer';
import devices, * as fromDevices from 'devices/reducer';
import insurancePlans, * as fromInsurancePlans from 'insurance/insurancePlans/reducer';
import insuranceContracts, * as fromInsuranceContracts from 'insurance/insuranceContracts/reducer';
import insuredDevices, * as fromInsuredDevices from 'insurance/insuredDevices/reducer';

export default combineReducers({
  routing: routerReducer,
  form: formReducer,
  auth,
  sprintSubscriptions,
  attSubscriptions,
  usage,
  attUsage,
  notifications,
  devices,
  insurancePlans,
  insuranceContracts,
  insuredDevices,
});

export const getUser = (state) => fromAuth.getUser(state.auth);

export const getSprintSubscription = (state, id) => fromSprintSubs.getSprintSubscription(state.sprintSubscriptions, id)
export const getAllSprintSubscriptions = (state) => fromSprintSubs.getAll(state.sprintSubscriptions);
export const getCurrentSprintPlan = (state, id) => fromSprintSubs.getCurrentPlan(state.sprintSubscriptions, id);
export const getUpcomingSprintPlan = (state, id) => fromSprintSubs.getUpcomingPlan(state.sprintSubscriptions, id);
export const getSprintUpgradePurchase = (state, id) => fromSprintSubs.getUpgradePurchase(state.sprintSubscriptions, id);

export const getAttSubscription = (state, id) => fromAttSubs.getAttSubscription(state.attSubscriptions, id)
export const getAllAttSubscriptions = (state) => fromAttSubs.getAll(state.attSubscriptions);
export const getCurrentAttPlan = (state, id) => fromAttSubs.getCurrentPlan(state.attSubscriptions, id);
export const getUpcomingAttPlan = (state, id) => fromAttSubs.getUpcomingPlan(state.attSubscriptions, id);
export const getAttUpgradePurchase = (state, id) => fromAttSubs.getUpgradePurchase(state.attSubscriptions, id);

export const getInfo = (state, key) => fromNotifications.getInfo(state.notifications, key);
export const getError = (state, key) => fromNotifications.getError(state.notifications, key);

export const getDevice = (state, id) => fromDevices.get(state.devices, id);
export const getFilteredDevices = (state) => fromDevices.getFiltered(state.devices);

export const getInsurancePlan = (state, id) => fromInsurancePlans.get(state.insurancePlans, id);
export const getInsurancePlansForValue = (state, value) => fromInsurancePlans.getValue(state.insurancePlans, value);

export const getFilteredInsuranceContracts = (state, params) => fromInsuranceContracts.getFiltered(state.insuranceContracts, params);
export const getInsuranceContract = (state, id) => fromInsuranceContracts.get(state.insuranceContracts, id);

export const getFilteredInsuredDevices = (state, contractId) => fromInsuredDevices.getFiltered(state.insuredDevices, contractId);
export const getInsuredDevice = (state, id) => fromInsuredDevices.get(state.insuredDevices, id);
