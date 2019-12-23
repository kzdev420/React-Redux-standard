import { put, call, takeLatest, takeEvery, all } from 'redux-saga/effects';
import * as types from './types';
import * as api from './api';
import * as actions from 'helpers/resourceSagas/actions';

import { findGenerator, getAllGenerator } from 'helpers/resourceSagas';

export const find = findGenerator({
  resourceType: 'devices',
  endpoint: api.find,
  transformResponse: (resp) => {
    const dev = resp.data;
    dev.id = dev.sku;
    return [dev];
  }
});

/*
export const fetchFiltered = getAllGenerator({
  resourceType: 'devices',
  endpoint: api.fetchFiltered,
  endpointArgs: (payload) => [ payload.brand, payload.capacity, payload.page ],
  transformResponse: (resp) => resp.data.results.map(dev => {
    dev.id = dev.sku;
    return dev;
  }),
  actionProps: {
    mergeListIds: false,
    list: 'filtered',
  },
});
*/

export function* fetchFiltered(action) {
  const { payload } = action;
  const resourceType = 'devices';
  const page = payload.page || 1;
  const endpoint = api.fetchFiltered;
  const actionProps = {
    mergeListIds: page !== 1,
    list: 'filtered',
  }
  const transformResponse = (resp) => resp.data.results.map(dev => {
    dev.id = dev.sku;
    return dev;
  });

  try {
    yield put(actions.getAllPending(resourceType, actionProps));
    const resp = yield call(endpoint, payload.brand, payload.capacity, page);
    yield put(actions.getAllSucceeded(resourceType, resp, transformResponse, actionProps));
    if (resp.data.next) {
      const newAction = {
        ...action,
        payload: {
          ...action.payload,
          page: page + 1
        } 
      };
      yield put(newAction);
    }
  }
  catch (err) {
    console.log('err', err)
    yield put(actions.getAllFailed(resourceType, err, actionProps));
  }
}


export function* watchFind() {
  yield takeEvery(types.FIND, find);
}

export function* watchFetchFiltered() {
  yield takeLatest(types.FETCH_FILTERED, fetchFiltered);
}

export function* watchDevices() {
  yield all([
    call(watchFind),
    call(watchFetchFiltered),
  ]);
}
