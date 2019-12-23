import * as types from './types';

export const find = (id) => ({
  type: types.FIND,
  payload: { id },
});

export const fetchValue = (value) => ({
  type: types.FETCH_VALUE,
  payload: { value },
});
