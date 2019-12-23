import * as types from './types';

export const find = (id) => ({
  type: types.FIND,
  payload: { id },
});

export const fetchFiltered = (brand, capacity, page) => ({
  type: types.FETCH_FILTERED,
  payload: { brand, capacity, page }
});
