import { takeEvery, all } from 'redux-saga/effects';
import { findGenerator } from 'helpers/resourceSagas';
import * as types from './types';
import * as actions from './actions';
import * as api from './api';

export const findCurrent = findGenerator({
  resourceType: 'usage',
  endpoint: api.findCurrent,
  endpointArgs: (payload) => [payload.subId],
  transformResponse: (resp) => {
    console.log(resp);
    return [{
      ...resp.data,
      id: resp.data.subscription
    }]
  },
})

export function* watchUsage() {
  yield takeEvery(types.FIND_CURRENT, findCurrent);
}

