import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { prepareResultDataToRender } from './util';

export const selectDefaultLedgerManualTransaction = (state: StoreState) =>
  state.ledger.manualTransaction.transactionResult;

export const selectLedgerManualTransaction = createSelector(
  selectDefaultLedgerManualTransaction,
  transaction => transaction && prepareResultDataToRender(transaction)
);

export const selectLedgerManualTransactionId = createSelector(
  selectLedgerManualTransaction,
  transaction => transaction && transaction.transactionId
);
