import { put, call, takeLatest, all } from 'redux-saga/effects';
import * as actions from './actions';
import * as api from './api';
import * as types from './types';

import * as routes from 'app/routes';
import { createSubmissionError } from 'forms/utils';

import { info, error } from 'notifications/actions';

export function* authenticateUser() {
  try {
    const resp = yield call(api.authenticate);
    yield put(actions.authenticationSucceeded(resp));
  }
  catch (err) {
    yield put(actions.authenticationFailed(err));
  }
}

export function* watchAuthenticateUser() {
  yield takeLatest(types.AUTHENTICATE, authenticateUser);
}

export function* watchAuth() {
  yield all([
    call(watchAuthenticateUser),
  ]);
}
