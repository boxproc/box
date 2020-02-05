import * as api from './api';

import { ActionTypeKeys, GetDictionaryRepaymentTypesAction } from './actionTypes';
import { selectIsRepaymentTypesLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryRepaymentTypes = () => GetDictionaryRepaymentTypesAction;
export type HandleGetDictionaryRepaymentTypes = VoidPromiseThunk;

export const getDictionaryRepaymentTypes: GetDictionaryRepaymentTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES,
  payload: api.getDictionaryRepaymentTypes(),
});

export const handleGetDictionaryRepaymentTypes: HandleGetDictionaryRepaymentTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsRepaymentTypesLoaded(getState())) {
          await dispatch(getDictionaryRepaymentTypes());
        }
      },
      dispatch
    );
  };
