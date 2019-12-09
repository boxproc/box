import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store/domains/modals';
import { ActionTypeKeys, MakeLedgerLimitAdjustmentTransactionAction } from './actionTypes';
import * as api from './api';
import { LedgerLimitAdjustmentFromData, LedgerLimitAdjustmentRequest } from './types';
import { prepareDataToSend } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type MakeLedgerLimitAdjustmentTransaction = (data: Partial<LedgerLimitAdjustmentRequest>) =>
MakeLedgerLimitAdjustmentTransactionAction;
export type HandleMakeLedgerLimitAdjustmentTransaction =
(data: Partial<LedgerLimitAdjustmentFromData>) => Thunk<void>;

export const makeLedgerLimitAdjustmentTransaction: MakeLedgerLimitAdjustmentTransaction = data => ({
  type: ActionTypeKeys.MAKE_LEDGER_LIMIT_ADJUSTMENT_TRANSACTION,
  payload: api.makeLedgerLimitAdjustmentTransaction(data),
});

export const handleMakeLedgerLimitAdjustmentTransaction:
HandleMakeLedgerLimitAdjustmentTransaction = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareDataToSend(data);

        await dispatch(makeLedgerLimitAdjustmentTransaction(preparedValues));
        dispatch(resetForm(formNamesConst.LEDGER_MANUAL_TRANSACTION));
        dispatch(openModal({
          name: modalNamesConst.LEDGER_MANUAL_TRANSACTION_RESULT,
        }));
      },
      dispatch
    );
  };
