import { actionTypes as resourceActions } from 'redux-resource';
import * as types from './types';

export const find = (id) => ({
  type: types.FIND,
  payload: { id }
});

export const fetchAll = (userId) => ({
  type: types.FETCH_ALL,
  payload: { userId }
});

export const updatePlan = (id, planId) => ({
  type: types.UPDATE_PLAN,
  payload: { id, planId }
});

export const setUpcomingPlan = (id, plan) => ({
  type: resourceActions.UPDATE_RESOURCES,
  meta: {
    attSubscriptions: {
      [id]: {
        upcomingPlan: plan
      }
    }
  }
});

export const setUpgradePurchase = (id, purchase) => ({
  type: resourceActions.UPDATE_RESOURCES,
  meta: {
    attSubscriptions: {
      [id]: {
        upgradePurchase: purchase
      }
    }
  }
})
