import * as api from './api';

import { ActionTypeKeys, GetDictionaryAccountStatusesAction } from './actionTypes';
import { selectIsAccountStatusesLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryAccountStatuses = () => GetDictionaryAccountStatusesAction;
export type HandleGetDictionaryAccountStatuses = VoidPromiseThunk;

export const getDictionaryAccountStatuses: GetDictionaryAccountStatuses = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES,
  payload: api.getDictionaryAccountStatuses(),
});

export const handleGetDictionaryAccountStatuses: HandleGetDictionaryAccountStatuses = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsAccountStatusesLoaded(getState())) {
          await dispatch(getDictionaryAccountStatuses());
        }
      },
      dispatch
    );
  };
