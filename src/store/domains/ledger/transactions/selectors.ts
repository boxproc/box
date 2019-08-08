import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  prepareBalanceValuesToRender,
  prepareCardValuesToRender,
  prepareGeneralValuesToRender,
  prepareValuesToRender,
} from './utils';

export const selectDefaultLedgerTransactions = (state: StoreState) =>
  state.ledger.ledgerTransactions.transactions;

export const selectLedgerTransactions = createSelector(
  selectDefaultLedgerTransactions,
  items => items && items.asMutable().map(item => prepareValuesToRender(item))
);

export const selectLedgerTransactionCurrentId = (state: StoreState) =>
  state.ledger.ledgerTransactions.currentTransactionId;

export const selectLedgerCurrentTransaction = createSelector(
  selectLedgerTransactions,
  selectLedgerTransactionCurrentId,
  (transaction, currentId) => {
    const current = transaction.filter(el => el.id === currentId)[0];
    return current;
  }
);

export const selectLedgerCurrentTransactionGeneral = createSelector(
  selectLedgerCurrentTransaction,
  transaction => prepareGeneralValuesToRender(transaction)
);

export const selectLedgerCurrentTransactionCard = createSelector(
  selectLedgerCurrentTransaction,
  transaction => prepareCardValuesToRender(transaction)
);

export const selectLedgerCurrentTransactionBalance = createSelector(
  selectLedgerCurrentTransaction,
  transaction => prepareBalanceValuesToRender(transaction)
);
