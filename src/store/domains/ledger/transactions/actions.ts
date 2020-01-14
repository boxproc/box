import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemConsts } from 'consts';

import { setIsOpenFilter } from 'store/domains/utils';
import { LedgerId } from '../customers';
import {
  ActionTypeKeys,
  FilterLedgerTransactionsAction,
  FilterLedgerTransactionsByIdAction
} from './actionTypes';
import * as api from './api';
import { LedgerTransactionsFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

import { Thunk } from 'types';

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = () => Thunk<void>;

export type FilterLedgerTransactionsById = (id: LedgerId) => FilterLedgerTransactionsByIdAction;
export type HandleFilterLedgerTransactionsById = (id: LedgerId) => Thunk<void>;

export type ResetTransactions = () => void;

export const filterLedgerTransactions: FilterLedgerTransactions = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filter),
});

export const filterLedgerTransactionsById: FilterLedgerTransactionsById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  payload: api.filterLedgerTransactionsById(data),
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

export const handleFilterByIdLedgerTransactions: HandleFilterLedgerTransactionsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemConsts.LEDGER_TRANSACTIONS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemConsts.LEDGER_TRANSACTIONS}`));
        await dispatch(filterLedgerTransactionsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };
