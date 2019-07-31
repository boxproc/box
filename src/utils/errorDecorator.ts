import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { handleSendNotification } from './notifications';

import { StoreState } from 'store/StoreState';

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<StoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
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
