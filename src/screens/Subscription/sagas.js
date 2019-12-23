import { put, call } from 'redux-saga/effects';
import { authenticateUser } from 'auth/sagas';
import { setRedirect } from 'auth/actions';
import { sprintSubscription, attSubscription } from 'app/routes';

export function* sprintSubscriptionNavigate({ subId }) {
  yield put(setRedirect(sprintSubscription(subId)));
  yield call(authenticateUser);
}

export function* attSubscriptionNavigate({ subId }) {
  yield put(setRedirect(attSubscription(subId)));
  yield call(authenticateUser);
}
