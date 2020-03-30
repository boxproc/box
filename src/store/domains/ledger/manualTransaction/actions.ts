import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store';
import { ActionTypeKeys, IMakeTransactionAction } from './actionTypes';
import * as api from './api';
import { IManualTransactionFromData, IManualTransactionReq } from './types';
import { prepareDataToSend } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Make manual transaction action
 */

export type TMakeTransaction = (data: Partial<IManualTransactionReq>) => IMakeTransactionAction;
export type THandleMakeTransaction = (data: Partial<IManualTransactionFromData>) => Thunk<void>;

export const makeTransaction: TMakeTransaction = data => ({
  type: ActionTypeKeys.MAKE_TRANSACTION,
  payload: api.makeTransaction(data),
});

export const handleMakeTransaction: THandleMakeTransaction = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(makeTransaction(preparedData));
        dispatch(resetForm(formNamesConst.MANUAL_TRANSACTION));
        dispatch(openModal({ name: modalNamesConst.MANUAL_TRANSACTION_RESULT }));
      },
      dispatch
    );
  };
