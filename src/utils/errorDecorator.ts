import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { handleSendNotification } from './notifications';

import { cookiesNames, sessionStorageNames } from 'consts';

import { StoreState } from 'store/StoreState';

import { apiClient } from 'services';

import { cookiesUtil, storageUtil } from 'utils';

const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
const isLoggedIn = sessionStorage.getItem(sessionStorageNames.IS_LOGIN);

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<StoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
    if (isLoggedIn && sessionId) {
      apiClient.set('session_id', sessionId);
    }

    return await fn();
  } catch (e) {
    if (dispatch) {
      if (!isLoggedIn) {
        storageUtil.clearStorage();
      }
      handleSendNotification(e, true)(dispatch);
    }
    if (returnReject) {
      return Promise.reject(e);
    }
  }
};
