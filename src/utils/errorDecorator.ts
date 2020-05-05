import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { cookiesNamesConst } from 'consts';
import { apiClientService } from 'services';
import { handleSendNotification, IStoreState } from 'store';
import { storageUtil } from 'utils';

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<IStoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
    if (storageUtil.getSessionId()) {
      apiClientService.set(cookiesNamesConst.SESSION_ID, storageUtil.getSessionId());
    }

    return await fn();
  } catch (e) {
    if (dispatch) {
      handleSendNotification(e, true)(dispatch);
    }

    if (returnReject) {
      return Promise.reject(e);
    }
  }
};
