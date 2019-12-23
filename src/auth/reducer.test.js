import reducer from './reducer';

import * as types from './types';
import * as actions from './actions';

describe('auth reducer', () => {
  describe('initial state', () => {
    it('is an empty object', () => {
      expect(
        reducer(undefined, {})
      ).toEqual({});
    });
  });

  describe('login success/auth success', () => {
    const user = { id: 1 };
    const resp = { data: user };

    it('returns the user in auth succeeded', () => {
      expect(
        reducer({}, actions.authenticationSucceeded(resp))
      ).toEqual({ user });
    });
  });
});
