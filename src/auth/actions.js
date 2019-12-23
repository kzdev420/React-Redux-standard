import { createFormAction } from 'redux-form-saga';
import * as types from './types';
import { home } from 'app/routes';

export const authenticationSucceeded = (response) => ({
  type: types.AUTHENTICATION_SUCCEEDED,
  payload: response
});

export const authenticationFailed = (err) => ({
  type: types.AUTHENTICATION_FAILED,
  payload: err
})

export const authenticate = (redirectTo = home()) => ({
  type: types.AUTHENTICATE,
  payload: { redirectTo },
});

export const resetPassword = createFormAction(types.RESET_PASSWORD);
export const requestResetCode = createFormAction(types.REQUEST_RESET_CODE);

export const resetCodeSent = (resetEmail) => ({
  type: types.RESET_CODE_SENT,
  payload: { resetEmail }
});

export const logout = () => ({
  type: types.LOGOUT,
});

export const logoutPending = () => ({
  type: types.LOGOUT_PENDING,
});

export const logoutSucceeded = () => ({
  type: types.LOGOUT_SUCCEEDED
});

export const logoutFailed = () => ({
  type: types.LOGOUT_FAILED
});

export const setRedirect = (redirectTo) => ({
  type: types.SET_REDIRECT,
  payload: { redirectTo },
});
