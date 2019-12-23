import * as types from './types';

export const createSprintPurchase = (subId, sku, planType) => ({
  type: types.CREATE_SPRINT_PURCHASE,
  payload: { subId, sku, planType }
});

export const createAttPurchase = (subId, sku, planType) => ({
  type: types.CREATE_ATT_PURCHASE,
  payload: { subId, sku, planType }
});
