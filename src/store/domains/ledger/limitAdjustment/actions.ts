import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store';
import { ActionTypeKeys, IMakeLimitAdjustmentAction } from './actionTypes';
import * as api from './api';
import { ILimitAdjReq, ILimitAdjustmentFromData } from './types';
import { prepareDataToSend } from './util';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Limit adjustment action
 */

export type TMakeLimitAdjustment = (data: Partial<ILimitAdjReq>) => IMakeLimitAdjustmentAction;
export type THandleMakeLimitAdjustment = (data: Partial<ILimitAdjustmentFromData>) => Thunk<void>;

export const makeLimitAdjustment: TMakeLimitAdjustment = data => ({
  type: ActionTypeKeys.LIMIT_ADJUSTMENT,
  payload: api.makeLimitAdjustment(data),
});

export const handleMakeLimitAdjustment: THandleMakeLimitAdjustment = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(makeLimitAdjustment(preparedData));
        dispatch(resetForm(formNamesConst.MANUAL_TRANSACTION));
        dispatch(openModal({ name: modalNamesConst.MANUAL_TRANSACTION_RESULT }));
      },
      dispatch
    );
  };
