import { call, takeEvery, takeLatest, all } from 'redux-saga/effects';
import * as types from './types';
import * as api from './api';

import { findGenerator, getAllGenerator, updateGenerator } from 'helpers/resourceSagas';

export const find = findGenerator({
  resourceType: 'attSubscriptions',
  endpoint: api.find,
});

export const fetchAll = getAllGenerator({
  resourceType: 'attSubscriptions',
  endpoint: api.fetchAll,
  endpointArgs: (payload) => [ payload.userId ]
});

export const updatePlan = updateGenerator({
  resourceType: 'attSubscriptions',
  endpoint: api.updatePlan,
  endpointArgs: (payload) => [ payload.id, payload.planId ]
});

export function* watchFind() {
  yield takeEvery(types.FIND, find);
}

export function* watchFetchAll() {
  yield takeEvery(types.FETCH_ALL, fetchAll);
}

export function* watchUpdatePlan() {
  yield takeLatest(types.UPDATE_PLAN, updatePlan);
}

export function* watchAttSubscriptions() {
  yield all([
    call(watchFind),
    call(watchFetchAll),
    call(watchUpdatePlan),
  ]);
}
