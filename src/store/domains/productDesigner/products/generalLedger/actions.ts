import { handleFilterProducts } from '../products';
import { ActionTypeKeys, UpdateGeneralLedgerAction } from './actionTypes';
import * as api from './api';
import { GeneralLedgerItem, GeneralLedgerItemPrepared } from './types';
import { prepareGeneralLedgerToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type UpdateGeneralLedger = (data: Partial<GeneralLedgerItem>) => UpdateGeneralLedgerAction;
export type HandleUpdateGeneralLedger = (data: Partial<GeneralLedgerItemPrepared>) => Thunk<void>;

export const updateGeneralLedger: UpdateGeneralLedger = data => ({
  type: ActionTypeKeys.UPDATE_GENERAL_LEDGER,
  payload: api.updateGeneralLedger(data),
});

export const handleUpdateGeneralLedger: HandleUpdateGeneralLedger = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareGeneralLedgerToSend(data);

        await dispatch(updateGeneralLedger(preparedValues));
        await dispatch(handleFilterProducts());
      },
      dispatch
    );
  };
