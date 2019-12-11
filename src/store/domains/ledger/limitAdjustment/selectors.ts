import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { prepareResultDataToRender } from './util';

export const selectDefaultLedgerLimitAdjustment = (state: StoreState) =>
  state.ledger.limitAdjustment.transactionResult.asMutable();

export const selectLedgerLimitAdjustment = createSelector(
  selectDefaultLedgerLimitAdjustment,
  transaction => transaction && prepareResultDataToRender(transaction)
);

export const selectLedgerLimitAdjustmentId = createSelector(
  selectLedgerLimitAdjustment,
  transaction => transaction && transaction.transactionId
);
