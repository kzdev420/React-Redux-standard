import * as types from './types';

export const info = (key, message) => ({
  type: types.INFO,
  payload: {
    key,
    message
  }
});

export const error = (key, message) => ({
  type: types.ERROR,
  payload: {
    key,
    message
  }
});

export const clearInfo = (key) => ({
  type: types.CLEAR_INFO,
  payload: { key }
});

export const clearError = (key) => ({
  type: types.CLEAR_ERROR,
  payload: { key }
});
