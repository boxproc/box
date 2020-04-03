import { push } from 'connected-react-router';
import { getFormValues, reset as resetForm } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import { openModal, setIsOpenFilter } from 'store';
import { closeModal } from 'store/domains/modals';
import { TLedgerId } from './../customers';
import {
  ActionTypeKeys,
  IConvertTrToLoanAction,
  IFilterTransactionsAction,
  IFilterTransactionsByIdAction,
  IRetrieveTransactionAction,
  ISettleTransactionAction,
} from './actionTypes';
import * as api from './api';
import {
  currentTrAccountIdSelector,
  currentTrIdSelector,
} from './selectors';
import {
  IConvertTrToLoanReq,
  IConvertTrToLoanReqToSend,
  IRetrieveTrReq,
  ISettleTransactionReq,
  ITransactionsFilterToSend,
} from './types';
import {
  prepareDataToConvert,
  prepareFilterToSend,
  prepareRetrieveTransactionRequest,
  prepareSettleTrDataToSend,
} from './utils';

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

        cookiesUtil.remove(`${basePath}${uiItemsConst.TRANSACTIONS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.TRANSACTIONS}`));
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

/**
 * Retrieve transaction action
 */

export type TRetrieveTransaction = (data: IRetrieveTrReq) => IRetrieveTransactionAction;
export type THandleRetrieveTransaction = () => Thunk<void>;

export const retrieveTransaction: TRetrieveTransaction = data => ({
  type: ActionTypeKeys.RETRIEVE_TRANSACTION,
  payload: api.retrieveTransaction(data),
});

export const handleRetrieveTransaction: THandleRetrieveTransaction = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.TRANSACTION_RETRIEVING_FORM);
        const state = getState();
        const preparedData = prepareRetrieveTransactionRequest(formValues(state));

        await dispatch(retrieveTransaction(preparedData));
      },
      dispatch
    );
  };

/**
 * Settle transaction action
 */

export type TSettleTransaction = (data: ISettleTransactionReq) => ISettleTransactionAction;
export type THandleSettleTransaction = () => Thunk<void>;

export const settleTransaction: TSettleTransaction = data => ({
  type: ActionTypeKeys.SETTLE_TRANSACTION,
  payload: api.settleTransaction(data),
});

export const handleSettleTransaction: THandleSettleTransaction = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.SETTLE_TRANSACTION_FORM);
        const state = getState();
        const preparedData = prepareSettleTrDataToSend(formValues(state));

        await dispatch(settleTransaction(preparedData));

        dispatch(resetForm(formNamesConst.TRANSACTION_RETRIEVING_FORM));

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Settle Transaction',
            message: 'Transaction is successfully settled.',
          },
        }));

        dispatch(closeModal(modalNamesConst.SETTLE_TRANSACTION));
      },
      dispatch
    );
  };

/**
 * Reset retrieved transaction action
 */

export type TResetRetrievedTransaction = () => void;

export const resetRetrievedTransaction: TResetRetrievedTransaction = () => ({
  type: ActionTypeKeys.RESET_RETRIEVED_TRANSACTION,
});
