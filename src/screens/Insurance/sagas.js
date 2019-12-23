import { put, call } from 'redux-saga/effects';
import { authenticateUser } from 'auth/sagas';
import { setRedirect } from 'auth/actions';
import { sprintInsurance, attInsurance } from 'app/routes';

export function* sprintInsuranceNavigate({ subId }) {
  yield put(setRedirect(sprintInsurance(subId)));
  yield call(authenticateUser);
};

export function* attInsuranceNavigate({ subId }) {
  yield put(setRedirect(attInsurance(subId)));
  yield call(authenticateUser);
};
