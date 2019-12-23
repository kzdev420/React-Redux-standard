import { put, call, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as types from './types';
import * as api from './api';
import * as actions from './actions';
import { setInsuranceContract as setSprintContract } from 'subscriptions/sprint/actions';
import { setInsuranceContract as setAttContract } from 'subscriptions/att/actions';

import { findGenerator, getAllGenerator, updateGenerator } from 'helpers/resourceSagas';

export const find = findGenerator({
  resourceType: 'insuranceContracts',
  endpoint: api.find
});

export const fetchFiltered = getAllGenerator({
  resourceType: 'insuranceContracts',
  endpoint: api.fetchFiltered,
  endpointArgs: (payload) => [ payload.params ],
});

export function* watchFind() {
  yield takeEvery(types.FIND, find);
}

export function* watchFetchFiltered() {
  yield takeLatest(types.FETCH_FILTERED, fetchFiltered);
}

export function* watchInsuranceContracts() {
  yield all([
    call(watchFind),
    call(watchFetchFiltered),
  ]);
}
