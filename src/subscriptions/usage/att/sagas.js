import { takeEvery, all } from 'redux-saga/effects';
import { findGenerator } from 'helpers/resourceSagas';
import * as types from './types';
import * as actions from './actions';
import * as api from './api';

export const findCurrent = findGenerator({
  resourceType: 'attUsage',
  endpoint: api.findCurrent,
  endpointArgs: (payload) => [payload.subId],
  transformResponse: (resp) => {
    const usage = resp.data.details;
    return [{
      ...usage,
      id: usage.att_subscription
    }]
  },
});

export function* watchUsage() {
  yield takeEvery(types.FIND_CURRENT, findCurrent);
}

