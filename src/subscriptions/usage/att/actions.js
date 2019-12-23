import * as types from './types';

export const findCurrent = (subId) => ({
  type: types.FIND_CURRENT,
  payload: { subId }
});
