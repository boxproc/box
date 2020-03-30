import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store';
import {
  ActionTypeKeys,
  IRetrieveTransactionAction,
  ISettleTransactionAction,
} from './actionTypes';
import * as api from './api';
import { IRetrieveTrReq, ISettleTransaction } from './types';
import { prepareDataToSend, prepareRetrieveTransactionRequest } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

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

export type TSettleTransaction = (data: ISettleTransaction) => ISettleTransactionAction;
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

/**
 * Reset retrieved transaction action
 */

export type TResetRetrievedTransaction = () => void;

export const resetRetrievedTransaction: TResetRetrievedTransaction = () => ({
  type: ActionTypeKeys.RESET_RETRIEVED_TRANSACTION,
});
