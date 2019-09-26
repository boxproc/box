import * as api from './api';

import { ActionTypeKeys, GetDictionaryCurrenciesAction } from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';
import { selectIsCurrencyCodesLoaded } from './selectors';

export type GetDictionaryCurrencies = () => GetDictionaryCurrenciesAction;
export type HandleGetDictionaryCurrencies = VoidPromiseThunk;

export const getDictionaryCurrencies: GetDictionaryCurrencies = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES,
  payload: api.getDictionaryCurrencies(),
});

export const handleGetDictionaryCurrencies: HandleGetDictionaryCurrencies = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCurrencyCodesLoaded(getState())) {
          await dispatch(getDictionaryCurrencies());
        }
      },
      dispatch
    );
  };
