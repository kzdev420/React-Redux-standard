import { put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import { info, error } from './sagas';
import * as actions from './actions';

jest.mock('redux-saga');

describe('info saga', () => {
  const key = 'testKey'
  const message = 'test message';
  const gen = info(actions.info(key, message));

  it('delays 15 seconds', () => {
    expect(
      gen.next().value
    ).toEqual(
      delay(15000)
    );
  });

  it('dispatches a clear action', () => {
    expect(
      gen.next().value
    ).toEqual(
      put(actions.clearInfo(key))
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});

describe('error saga', () => {
  const key = 'testKey'
  const message = 'test message';
  const gen = error(actions.error(key, message));

  it('delays 15 seconds', () => {
    expect(
      gen.next().value
    ).toEqual(
      delay(15000)
    );
  });

  it('dispatches a clear action', () => {
    expect(
      gen.next().value
    ).toEqual(
      put(actions.clearError(key))
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});
