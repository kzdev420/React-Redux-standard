import { put } from 'redux-saga/effects';
import { authenticate } from 'auth/actions';

export function* homeNavigate() {
  yield put(authenticate());
}
