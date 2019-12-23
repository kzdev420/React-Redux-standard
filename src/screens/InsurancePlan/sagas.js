import { call } from 'redux-saga/effects';
import { authenticateUser } from 'auth/sagas';

export function* sprintInsurancePlanNavigate() {
  yield call(authenticateUser);
};

export function* attInsurancePlanNavigate() {
  yield call(authenticateUser);
};

