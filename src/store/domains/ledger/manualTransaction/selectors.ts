import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { prepareResultDataToRender } from './util';

export const selectDefaultLedgerManualTransaction = (state: StoreState) =>
  state.ledger.manualTransaction.transactionResult.asMutable();

export const selectLedgerManualTransaction = createSelector(
  selectDefaultLedgerManualTransaction,
  transaction => transaction && prepareResultDataToRender(transaction)
);

export const selectLedgerManualTransactionId = createSelector(
  selectLedgerManualTransaction,
  transaction => transaction && transaction.transactionId
);
