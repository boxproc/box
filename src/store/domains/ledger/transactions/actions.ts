import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterLedgerTransactionsAction } from './actionTypes';
import * as api from './api';
import { LedgerTransactionsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = () => Thunk<void>;

export const filterLedgerTransactions: FilterLedgerTransactions = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filterParams),
});

export const handleFilterLedgerTransactions: HandleFilterLedgerTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();

        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerTransactions(preparedValues));
        }
      },
      dispatch
    );
  };
