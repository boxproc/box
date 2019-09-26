import * as api from './api';

import { ActionTypeKeys, GetDictionaryCountriesAction } from './actionTypes';

import { selectIsCurrencyCodesLoaded } from 'store/domains/administration';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryCountries = () => GetDictionaryCountriesAction;
export type HandleGetDictionaryCountries = VoidPromiseThunk;

export const getDictionaryCountries: GetDictionaryCountries = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES,
  payload: api.getDictionaryCountries(),
});

export const handleGetDictionaryCountries: HandleGetDictionaryCountries = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCurrencyCodesLoaded(getState())) {
          await dispatch(getDictionaryCountries());
        }
      },
      dispatch
    );
  };
