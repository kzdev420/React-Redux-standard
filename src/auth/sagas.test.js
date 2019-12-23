import { call, put, takeLatest } from 'redux-saga/effects';
import * as sagas from './sagas';
import * as actions from './actions';
import * as api from './api';
import * as types from './types';

import * as routes from 'app/routes';
import { createSubmissionError } from 'forms/utils';
import { info, error } from 'notifications/actions';

describe('authenticateUser succeed', () => {
  const gen = sagas.authenticateUser();
  const resp = { data: { id: 1 }, status: 200 }

  it('fetches logged in user data', () => {
    expect(
      gen.next().value
    ).toEqual(
      call(api.authenticate)
    );
  });

  it('sends an authenticationSucceeded action', () => {
    expect(
      gen.next(resp).value
    ).toEqual(
      put(actions.authenticationSucceeded(resp))
    )
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  })
});

describe('watchAuthenticateUser', () => {
  const gen = sagas.watchAuthenticateUser();

  it('watches for the authenticate action', () => {
    expect(
      gen.next().value
    ).toEqual(
      takeLatest(types.AUTHENTICATE, sagas.authenticateUser)
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});

