import { buildRoutesMap, route } from 'redux-saga-first-router';
import { homeNavigate } from 'screens/Home/sagas';
import { sprintSubscriptionNavigate, attSubscriptionNavigate } from 'screens/Subscription/sagas';
import { sprintInsuranceConfirmNavigate, attInsuranceConfirmNavigate } from 'screens/InsuranceConfirm/sagas';
import { sprintInsurancePlanNavigate, attInsurancePlanNavigate } from 'screens/InsurancePlan/sagas';
import { sprintInsuranceNavigate, attInsuranceNavigate } from 'screens/Insurance/sagas';

export default buildRoutesMap(
  route('SPRINT_INSURANCE_CONFIRM', '/s/subscriptions/:subId/insurance/:sku/:insPlanId/confirm', sprintInsuranceConfirmNavigate),
  route('SPRINT_INSURANCE_PLAN', '/s/subscriptions/:subId/insurance/:sku/select-plan', sprintInsurancePlanNavigate),
  route('SPRINT_INSURANCE', '/s/subscriptions/:subId/insurance', sprintInsuranceNavigate),
  route('ATT_INSURANCE_CONFIRM', '/a/subscriptions/:subId/insurance/:sku/:insPlanId/confirm', attInsuranceConfirmNavigate),
  route('ATT_INSURANCE_PLAN', '/a/subscriptions/:subId/insurance/:sku/select-plan', attInsurancePlanNavigate),
  route('ATT_INSURANCE', '/a/subscriptions/:subId/insurance', attInsuranceNavigate),
  route('SPRINT_SUBSCRIPTION', '/s/subscriptions/:subId', sprintSubscriptionNavigate),
  route('ATT_SUBSCRIPTION', '/a/subscriptions/:subId', attSubscriptionNavigate),
  route('HOME', '/', homeNavigate),
);

const routeDefaults = {
  type: 'router/NAVIGATE',
}

export const home = () => ({
  ...routeDefaults,
  id: 'HOME',
  path: '/',
});

export const sprintSubscription = (subId) => ({
  ...routeDefaults,
  id: 'SPRINT_SUBSCRIPTION',
  params: { subId },
  path: `/s/subscriptions/${subId}`,
});

export const attSubscription = (subId) => ({
  ...routeDefaults,
  id: 'ATT_SUBSCRIPTION',
  params: { subId },
  path: `/a/subscriptions/${subId}`,
});

export const attInsurance = (subId) => ({
  ...routeDefaults,
  id: 'ATT_INSURANCE',
  params: { subId },
  path: `/a/subscriptions/${subId}/insurance`,
});
export const attInsurancePlan = (subId, sku) => ({
  ...routeDefaults,
  id: 'ATT_INSURANCE_PLAN',
  params: { subId, sku },
  path: `/a/subscriptions/${subId}/insurance/${sku}/select-plan`,
});
export const attInsuranceConfirm = (subId, sku, insPlanId) => ({
  ...routeDefaults,
  id: 'ATT_INSURANCE_CONFIRM',
  params: { subId, sku, insPlanId },
  path: `/a/subscriptions/${subId}/insurance/${sku}/${insPlanId}/confirm`,
});

export const sprintInsurance = (subId) => ({
  ...routeDefaults,
  id: 'SPRINT_INSURANCE',
  params: { subId },
  path: `/s/subscriptions/${subId}/insurance`,
});
export const sprintInsurancePlan = (subId, sku) => ({
  ...routeDefaults,
  id: 'SPRINT_INSURANCE_PLAN',
  params: { subId, sku },
  path: `/s/subscriptions/${subId}/insurance/${sku}/select-plan`,
});
export const sprintInsuranceConfirm = (subId, sku, insPlanId) => ({
  ...routeDefaults,
  id: 'SPRINT_INSURANCE_CONFIRM',
  params: { subId, sku, insPlanId },
  path: `/s/subscriptions/${subId}/insurance/${sku}/${insPlanId}/confirm`,
});