import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store/domains/modals';
import { ActionTypeKeys, MakeLedgerTransactionAction } from './actionTypes';
import * as api from './api';
import { LedgerManualTransactionFromData, LedgerManualTransactionRequest } from './types';
import { prepareDataToSend } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type MakeLedgerTransaction = (data: Partial<LedgerManualTransactionRequest>) =>
  MakeLedgerTransactionAction;
export type HandleMakeLedgerTransaction = (data: Partial<LedgerManualTransactionFromData>) =>
  Thunk<void>;

export const makeLedgerTransaction: MakeLedgerTransaction = data => ({
  type: ActionTypeKeys.MAKE_LEDGER_TRANSACTION,
  payload: api.makeLedgerTransaction(data),
});

export const handleMakeLedgerTransaction: HandleMakeLedgerTransaction = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareDataToSend(data);

        await dispatch(makeLedgerTransaction(preparedValues));
        dispatch(resetForm(formNamesConst.LEDGER_MANUAL_TRANSACTION));
        dispatch(openModal({
          name: modalNamesConst.LEDGER_MANUAL_TRANSACTION_RESULT,
        }));
      },
      dispatch
    );
  };
