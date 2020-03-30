import { push } from 'connected-react-router';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import { openModal, setIsOpenFilter } from 'store';
import { TLedgerId } from '../customers';
import {
  ActionTypeKeys,
  IConvertTrToLoanAction,
  IFilterTransactionsAction,
  IFilterTransactionsByIdAction,
} from './actionTypes';
import * as api from './api';
import {
  currentTrAccountIdSelector,
  currentTrIdSelector,
} from './selectors';
import {
  IConvertTrToLoanReq,
  IConvertTrToLoanReqToSend,
  ITransactionsFilterToSend,
} from './types';
import { prepareDataToConvert, prepareFilterToSend } from './utils';

import { Thunk } from 'types';
import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

/**
 * Filter transactions action
 */
export type TFilterTransactions = (data: Partial<ITransactionsFilterToSend>) =>
  IFilterTransactionsAction;
export type THandleFilterTransactions = () => Thunk<void>;

export const filterTransactions: TFilterTransactions = data => ({
  type: ActionTypeKeys.FILTER_TRANSACTIONS,
  payload: api.filterTransactions(data),
});

export const handleFilterTransactions: THandleFilterTransactions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();

        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterTransactions(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Filter transactions by ID action
 */

export type TFilterTransactionsById = (id: TLedgerId) => IFilterTransactionsByIdAction;
export type THandleFilterTransactionsById = (id: TLedgerId) => Thunk<void>;

export const filterTransactionsById: TFilterTransactionsById = data => ({
  type: ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID,
  payload: api.filterTransactionsById(data),
});

export const handleFilterByIdTransactions: THandleFilterTransactionsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.LEDGER_TRANSACTIONS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.LEDGER_TRANSACTIONS}`));
        await dispatch(filterTransactionsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

/**
 * Convert transaction to loan action
 */

export type TConvertTrToLoan = (data: Partial<IConvertTrToLoanReqToSend>) => IConvertTrToLoanAction;
export type THandleConvertTrToLoan = (data: Partial<IConvertTrToLoanReq>) => Thunk<void>;

export const convertTransactionToLoan: TConvertTrToLoan = data => ({
  type: ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN,
  payload: api.convertTransactionToLoan(data),
});

export const handleConvertTrToLoan: THandleConvertTrToLoan = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareDataToConvert({
          ...data,
          accountId: currentTrAccountIdSelector(state),
          transactionId: currentTrIdSelector(state),
        });

        await dispatch(convertTransactionToLoan(preparedData));
        await dispatch(handleFilterTransactions());

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Convert to Loan',
            message: 'Transaction is successfully converted.',
          },
        }));
        dispatch(resetForm(formNamesConst.TRANSACTION));
      },
      dispatch
    );
  };

/**
 * Reset transactions action
 */

export type TResetTransactions = () => void;

export const resetTransactions: TResetTransactions = () => ({
  type: ActionTypeKeys.RESET_TRANSACTIONS,
});
