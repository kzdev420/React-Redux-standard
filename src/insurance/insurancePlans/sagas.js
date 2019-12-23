import { call, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as types from './types';
import * as api from './api';

import { findGenerator, getAllGenerator } from 'helpers/resourceSagas';

export const find = findGenerator({
  resourceType: 'insurancePlans',
  endpoint: api.find
});

export const fetchValue = getAllGenerator({
  resourceType: 'insurancePlans',
  endpoint: api.fetchValue,
  endpointArgs: (payload) => [ payload.value ],
});

export function* watchFind() {
  yield takeEvery(types.FIND, find);
}

export function* watchFetchValue() {
  yield takeLatest(types.FETCH_VALUE, fetchValue);
}

export function* watchInsurancePlans() {
  yield all([
    call(watchFind),
    call(watchFetchValue),
  ]);
}
