import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerTransactions = (state: StoreState) =>
  state.ledger.transactions.transactions;

export const selectLedgerTransactions = createSelector(
  selectDefaultLedgerTransactions,
  items => items && items.asMutable().map(item => prepareValuesToRender(item))
);

export const selectLedgerTransactionCurrentId = (state: StoreState) =>
  state.ledger.transactions.currentTransactionId;

export const selectLedgerCurrentTransaction = createSelector(
  selectLedgerTransactions,
  selectLedgerTransactionCurrentId,
  (transaction, currentId) => {
    const current = transaction.find(el => el.id === currentId);

    return current;
  }
);
