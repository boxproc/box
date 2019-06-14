import { Action } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

// import { handleSendNotification } from './notifications';

import { StoreState } from 'store/StoreState';

import { MessageResponse } from 'types';

export const withErrorHandler = async (
  fn: () => Promise<any>,
  dispatch?: ThunkDispatch<StoreState, {}, Action>,
  returnReject: boolean = false
) => {
  try {
    return await fn();
  } catch (e) {
    if (dispatch) {
      //   handleSendNotification(e, true)(dispatch);
      console.log('---handleSendNotification');
    }

    if (returnReject) {
      return Promise.reject(e);
    }
  }
};

export const getApiResponseMessage = (response: MessageResponse): string => {
  if (response && response.statusCode === 200) {
    return response.message || 'Successfully submitted';
  }

  return (response && response.message) || 'An interface has returned an error.';
};
