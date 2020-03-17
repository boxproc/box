import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store';
import { ActionTypeKeys, MakeLedgerLimitAdjustmentAction } from './actionTypes';
import * as api from './api';
import { LedgerLimitAdjustmentFromData, LedgerLimitAdjustmentRequest } from './types';
import { prepareDataToSend } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type MakeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentRequest>) =>
  MakeLedgerLimitAdjustmentAction;
export type HandleMakeLedgerLimitAdjustment = (data: Partial<LedgerLimitAdjustmentFromData>) =>
  Thunk<void>;

export const makeLedgerLimitAdjustment: MakeLedgerLimitAdjustment = data => ({
  type: ActionTypeKeys.LEDGER_LIMIT_ADJUSTMENT,
  payload: api.makeLedgerLimitAdjustment(data),
});

export const handleMakeLedgerLimitAdjustment: HandleMakeLedgerLimitAdjustment = data =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const preparedValues = prepareDataToSend(data);

          await dispatch(makeLedgerLimitAdjustment(preparedValues));
          dispatch(resetForm(formNamesConst.MANUAL_TRANSACTION));
          dispatch(openModal({ name: modalNamesConst.MANUAL_TRANSACTION_RESULT }));
        },
        dispatch
      );
    };
