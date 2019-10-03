import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterLedgerTransactionsAction } from './actionTypes';
import * as api from './api';
import { LedgerTransactionsFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = () => Thunk<void>;

export type ResetTransactions = () => void;

export const filterLedgerTransactions: FilterLedgerTransactions = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filter),
});

export const resetTransactions: ResetTransactions = () => ({
  type: ActionTypeKeys.RESET_TRANSACTIONS,
});

export const handleFilterLedgerTransactions: HandleFilterLedgerTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();

        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerTransactions(preparedValues));
        }
      },
      dispatch
    );
  };
