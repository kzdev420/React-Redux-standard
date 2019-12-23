import { put, call, takeEvery, all } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import * as types from './types';
import { clearInfo, clearError } from './actions';

export function* info(action) {
  yield delay(15000);
  yield put(clearInfo(action.payload.key));
} 

export function* error(action) {
  yield delay(15000);
  yield put(clearError(action.payload.key));
}

export function* watchInfo() {
  yield takeEvery(types.INFO, info);
}

export function* watchError() {
  yield takeEvery(types.ERROR, error);
}

export function* watchNotifications() {
  yield all([
    call(watchInfo),
    call(watchError),
  ]);
}
