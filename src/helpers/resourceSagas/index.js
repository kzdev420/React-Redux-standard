import { call, put } from 'redux-saga/effects';
import * as actions from './actions';

/*
const getAll = getAllGen({
  resourceType: 'purchases',
  endpoint: api.getAll,
  endpointArgs: (payload) => [ payload.userId ]
})
*/
export const getAllGenerator = ({ resourceType, endpoint, endpointArgs, transformResponse, actionProps = {} }) => {
  return function* (action) {
    const args = endpointArgs(action.payload);
    try {
      yield put(actions.getAllPending(resourceType, actionProps));
      const resp = yield call(endpoint, ...args);
      yield put(actions.getAllSucceeded(resourceType, resp, transformResponse, actionProps));
    }
    catch (err) {
      yield put(actions.getAllFailed(resourceType, err, actionProps));
    }
  }
};

export const findGenerator = ({ resourceType, endpoint, endpointArgs, transformResponse, actionProps = {} }) => {
  return function* (action) {
    const defaultArgs = (payload) => [ payload.id ];
    endpointArgs = endpointArgs || defaultArgs;
    const args = endpointArgs(action.payload);
    try {
      yield put(actions.findPending(resourceType, actionProps));
      const resp = yield call(endpoint, ...args);
      yield put(actions.findSucceeded(resourceType, resp, transformResponse, actionProps));
    }
    catch (err) {
      yield put(actions.findFailed(resourceType, err, actionProps));
    }
  }
};

export const updateGenerator = ({ resourceType, endpoint, endpointArgs, transformResponse, actionProps = {} }) => {
  return function* (action) {
    const defaultArgs = (payload) => [ payload.id ];
    endpointArgs = endpointArgs || defaultArgs;
    const args = endpointArgs(action.payload);
    try {
      yield put(actions.updatePending(resourceType, actionProps));
      const resp = yield call(endpoint, ...args);
      yield put(actions.updateSucceeded(resourceType, resp, transformResponse, actionProps));
    }
    catch (err) {
      yield put(actions.updateFailed(resourceType, err, actionProps));
    }
  }
}

export const getAllPaginatedGenerator = ({ resourceType, endpoint, endpointArgs, transformResponse, actionProps = {} }) => {
  return function* (action) {
    const args = endpointArgs(action.payload);
    try {
      yield put(actions.getHistoryPending(resourceType, args));
      const resp = yield call(endpoint, ...args);
      yield put(actions.getHistorySucceeded(resourceType, resp, args, transformResponse));
    }
    catch (err) {
      yield put(actions.getHistoryFailed(resourceType, args));
    }
  }
};
