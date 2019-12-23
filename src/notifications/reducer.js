import * as types from './types';

const initialState = {
  info: {},
  error: {}
}

const notifications = (state = initialState, action) => {
  switch (action.type) {
    case types.INFO:
      return {
        ...state,
        info: {
          ...state.info,
          [action.payload.key]: action.payload.message
        }
      }
    case types.ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.payload.key]: action.payload.message
        }
      }
    case types.CLEAR_INFO:
      const { [action.payload.key]: removedInfo, ...info } = state.info;
      return {
        ...state,
        info
      }
    case types.CLEAR_ERROR:
      const { [action.payload.key]: removedError, ...error } = state.error;
      return {
        ...state,
        error
      }
    default:
      return state;
  }
}

export default notifications;

export const getInfo = (state, key) => state.info[key];
export const getError = (state, key) => state.error[key];
