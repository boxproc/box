import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { handleSendNotification } from './notifications';

import { cookiesNames } from 'consts';

import { StoreState } from 'store/StoreState';

import { apiClient } from 'services';

import { cookiesUtil } from 'utils';

const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
const isLoggedIn = sessionId && !cookiesUtil.get(cookiesNames.AUTH_PENDING);

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<StoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
    if (isLoggedIn) {
      apiClient.set('session_id', sessionId);
    }

    return await fn();
  } catch (e) {
    if (dispatch) {
      if (!isLoggedIn) {
        apiClient.clear();
      }
      handleSendNotification(e, true)(dispatch);
    }
    if (returnReject) {
      return Promise.reject(e);
    }
  }
};
