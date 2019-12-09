import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { prepareResultDataToRender } from './util';

export const selectDefaultLedgerLimitAdjustmentTransaction = (state: StoreState) =>
  state.ledger.limitAdjustmentTransaction.transactionResult.asMutable();

export const selectLedgerLimitAdjustmentTransaction = createSelector(
  selectDefaultLedgerLimitAdjustmentTransaction,
  transaction => transaction && prepareResultDataToRender(transaction)
);

export const selectLedgerLimitAdjustmentTransactionId = createSelector(
    selectLedgerLimitAdjustmentTransaction,
    transaction => transaction && transaction.transactionId
);
