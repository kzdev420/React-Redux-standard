import { put } from 'redux-saga/effects';
import * as userActions from 'auth/actions';
import * as sagas from './sagas';

describe('homeNavigate', () => {
  const gen = sagas.homeNavigate();

  it('puts the user authenticate action', () => {
    expect(
      gen.next().value
    ).toEqual(
      put(userActions.authenticate())
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});
