import { call } from 'redux-saga/effects';
import { authenticateUser } from 'auth/sagas';

export function* sprintInsuranceConfirmNavigate() {
  yield call(authenticateUser);
};

export function* attInsuranceConfirmNavigate() {
  yield call(authenticateUser);
};

