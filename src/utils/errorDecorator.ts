import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { cookiesNamesConst } from 'consts';

import { handleSendNotification } from './notifications';

import { StoreState } from 'store/StoreState';

import { apiClient } from 'services';

import { storageUtil } from 'utils';

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<StoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
    if (storageUtil.getSessionId()) {
      apiClient.set(cookiesNamesConst.SESSION_ID, storageUtil.getSessionId());
    }

    return await fn();
  } catch (e) {
    if (dispatch) {
      if (!storageUtil.getLoginFlag()) {
        storageUtil.clear();
      }

      handleSendNotification(e, true)(dispatch);
    }
    if (returnReject) {
      return Promise.reject(e);
    }
  }
};
