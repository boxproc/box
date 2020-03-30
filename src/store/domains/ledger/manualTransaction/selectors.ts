import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareResultDataToRender } from './util';

export const defaultManualTrSelector = (state: StoreState) =>
  state.ledger.manualTransaction.transactionResult;

export const manualTransactionSelector = createSelector(
  defaultManualTrSelector,
  data => data && prepareResultDataToRender(data)
);

export const manualTransactionIdSelector = createSelector(
  manualTransactionSelector,
  data => data && data.transactionId
);

export const isManualTransactionLoading = createLoadingSelector([
  ActionTypeKeys.MAKE_TRANSACTION,
]);
