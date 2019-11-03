import * as api from './api';

import { ActionTypeKeys, GetDictionaryTransactionTypesAction } from './actionTypes';
import { selectIsTransactionTypesLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryTransactionTypes = () => GetDictionaryTransactionTypesAction;
export type HandleGetDictionaryTransactionTypes = VoidPromiseThunk;

export const getDictionaryTransactionTypes: GetDictionaryTransactionTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES,
  payload: api.getDictionaryTransactionTypes(),
});

export const handleGetDictionaryTransactionTypes: HandleGetDictionaryTransactionTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsTransactionTypesLoaded(getState())) {
          await dispatch(getDictionaryTransactionTypes());
        }
      },
      dispatch
    );
  };
