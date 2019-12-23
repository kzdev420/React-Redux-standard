import * as types from './types';

export default (state = {}, action) => {
  switch (action.type) {
    case types.AUTHENTICATE:
      return {
        ...state,
        redirectTo: action.payload.redirectTo
      }
    case types.AUTHENTICATION_SUCCEEDED:
      return {
        ...state,
        user: action.payload.data,
      }
    default:
      return state;
  }
}

export const getUser = (state) => state.user;
