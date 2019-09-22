import { ActionTypeKeys, FilterLedgerTransactionsAction } from './actionTypes';

import * as api from './api';

import { LedgerTransactionsFilterParams, LedgerTransactionsFilterParamsPrepared } from './types';

import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParamsPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterParams>) =>
  Thunk<void>;

export const filterLedgerTransactions: FilterLedgerTransactions = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filterParams),
});

export const handleFilterLedgerTransactions: HandleFilterLedgerTransactions = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        if (preparedValues) {
          await dispatch(filterLedgerTransactions(preparedValues));
        }
      },
      dispatch
    );
  };
