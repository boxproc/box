import * as api from './api';

import { ActionTypeKeys, GetDictionaryCardStatusesAction } from './actionTypes';

import { selectIsCardStatusesLoaded } from 'store/domains/administration';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryCardStatuses = () => GetDictionaryCardStatusesAction;
export type HandleGetDictionaryCardStatuses = VoidPromiseThunk;

export const getDictionaryCardStatuses: GetDictionaryCardStatuses = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES,
  payload: api.getDictionaryCardStatuses(),
});

export const handleGetDictionaryCardStatuses: HandleGetDictionaryCardStatuses = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCardStatusesLoaded(getState())) {
          await dispatch(getDictionaryCardStatuses());
        }
      },
      dispatch
    );
  };
