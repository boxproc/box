import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store/domains/modals';
import { ActionTypeKeys, RetrieveTransactionAction, SettleTransactionAction } from './actionTypes';
import * as api from './api';
import { RetrieveTransactionRequest, SettleTransactionItem } from './types';
import { prepareDataToSend, prepareRetrieveTransactionRequest } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type RetrieveTransaction = (data: RetrieveTransactionRequest) => RetrieveTransactionAction;
export type HandleRetrieveTransaction = () => Thunk<void>;

export type SettleTransaction = (data: SettleTransactionItem) => SettleTransactionAction;
export type HandleSettleTransaction = () => Thunk<void>;

export type ResetRetrievedTransaction = () => void;

export const retrieveTransaction: RetrieveTransaction = data => ({
  type: ActionTypeKeys.RETRIEVE_TRANSACTION,
  payload: api.retrieveTransaction(data),
});

export const settleTransaction: SettleTransaction = data => ({
  type: ActionTypeKeys.SETTLE_TRANSACTION,
  payload: api.settleTransaction(data),
});

export const resetRetrievedTransaction: ResetRetrievedTransaction = () => ({
  type: ActionTypeKeys.RESET_RETRIEVED_TRANSACTION,
});

export const handleRetrieveTransaction: HandleRetrieveTransaction = () =>
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

export const handleSettleTransaction: HandleSettleTransaction = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.SETTLE_TRANSACTION_FORM);
        const state = getState();
        const preparedData = prepareDataToSend(formValues(state));

        await dispatch(settleTransaction(preparedData));

        dispatch(resetForm(formNamesConst.TRANSACTION_RETRIEVING_FORM));

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Settle Transaction',
            message: 'Transaction is successfully settled.',
          },
        }));
      },
      dispatch
    );
  };
