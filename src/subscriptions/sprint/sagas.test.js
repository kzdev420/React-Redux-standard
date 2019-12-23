import { call, put } from 'redux-saga/effects';
import * as actions from 'helpers/resourceSagas/actions';
import * as sagas from './sagas';
import * as api from './api';
import * as types from './types';
import { updatePlan } from './actions';

describe('updatePlan', () => {
  const subId = 1;
  const planId = 123;
  const resourceType = 'sprintSubscriptions';
  const resp = {
    data: {
      id: subId
    }
  }
  const gen = sagas.updatePlan(updatePlan(subId, planId));

  it('starts the resource request', () => {
    expect(
      gen.next().value
    ).toEqual(
      put(actions.updatePending(resourceType))
    );
  });

  it('sends the request', () => {
    expect(
      gen.next().value
    ).toEqual(
      call(api.updatePlan, subId, planId)
    );
  });

  it('dispatches a success action', () => {
    expect(
      gen.next(resp).value
    ).toEqual(
      put(actions.updateSucceeded(resourceType, resp))
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});

describe('updatePlan failure', () => {
  const subId = 2;
  const planId = 456;
  const err = { message: 'failed' }
  const gen = sagas.updatePlan(updatePlan(subId, planId));

  it('sends a failure action', () => {
    // Pending
    gen.next();
    // Request
    gen.next();
    // Failure
    expect(
      gen.throw().value
    ).toEqual(
      put(actions.updateFailed('sprintSubscriptions', err))
    );
  });

  it('should be done', () => {
    expect(
      gen.next().done
    ).toEqual(true);
  });
});
