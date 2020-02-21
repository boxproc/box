import { push } from 'connected-react-router';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, messagesConst, modalNamesConst, uiItemsConst } from 'consts';

import { setIsOpenFilter } from 'store/domains/utils';
import { LedgerId } from '../customers';
import {
  ActionTypeKeys,
  ConvertTransactionToLoanAction,
  FilterLedgerTransactionsAction,
  FilterLedgerTransactionsByIdAction,
} from './actionTypes';
import * as api from './api';
import {
  selectLedgerCurrentTransactionAccountId,
  selectLedgerCurrentTransactionId,
} from './selectors';
import {
  LedgerConvertTransactionToLoanItem,
  LedgerConvertTransactionToLoanItemPrepared,
  LedgerTransactionsFilterPrepared
} from './types';
import { prepareDataToConvert, preparedFilterToSend } from './utils';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

import { openModal } from 'store/domains/modals';
import { Thunk } from 'types';

export type FilterLedgerTransactions = (params: Partial<LedgerTransactionsFilterPrepared>) =>
  FilterLedgerTransactionsAction;
export type HandleFilterLedgerTransactions = () => Thunk<void>;

export type FilterLedgerTransactionsById = (id: LedgerId) => FilterLedgerTransactionsByIdAction;
export type HandleFilterLedgerTransactionsById = (id: LedgerId) => Thunk<void>;

export type ConvertTransactionToLoan = (data: Partial<LedgerConvertTransactionToLoanItem>) =>
  ConvertTransactionToLoanAction;
export type HandleConvertTransactionToLoan =
  (data: Partial<LedgerConvertTransactionToLoanItemPrepared>) => Thunk<void>;

export type ResetTransactions = () => void;

export const filterLedgerTransactions: FilterLedgerTransactions = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS,
  payload: api.filterLedgerTransactions(filter),
});

export const filterLedgerTransactionsById: FilterLedgerTransactionsById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_TRANSACTIONS_BY_ID,
  payload: api.filterLedgerTransactionsById(data),
});

export const convertTransactionToLoan: ConvertTransactionToLoan = data => ({
  type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN,
  payload: api.convertTransactionToLoan(data),
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

        cookiesUtil.remove(`${basePath}${uiItemsConst.LEDGER_TRANSACTIONS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.LEDGER_TRANSACTIONS}`));
        await dispatch(filterLedgerTransactionsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

export const handleConvertTransactionToLoan: HandleConvertTransactionToLoan = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareDataToConvert({
          ...data,
          accountId: selectLedgerCurrentTransactionAccountId(state),
          transactionId: selectLedgerCurrentTransactionId(state),
        });

        await dispatch(convertTransactionToLoan(preparedValues));
        await dispatch(handleFilterLedgerTransactions());

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Convert to Loan',
            message: messagesConst.TRANSACTION_SUCCESSFULLY_CONVERTED,
          },
        }));
        dispatch(resetForm(formNamesConst.TRANSACTION));
      },
      dispatch
    );
  };
