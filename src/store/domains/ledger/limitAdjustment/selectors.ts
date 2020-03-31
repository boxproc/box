import { createSelector } from 'reselect';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareResultDataToRender } from './util';

export const defaultLimitAdjustmentSelector = (state: IStoreState) =>
  state.ledger.limitAdjustment.transactionResult;

export const limitAdjustmentSelector = createSelector(
  defaultLimitAdjustmentSelector,
  data => data && prepareResultDataToRender(data)
);

export const isLimitAdjustmentLoadingSelector = createLoadingSelector([
  ActionTypeKeys.LIMIT_ADJUSTMENT,
]);
