import { createSelector } from 'reselect';

import { selectActiveItemId } from 'store/domains/utils';
import { StoreState } from 'store/StoreState';

import { transactionTypesIds } from 'consts';
import { prepareValuesToRender } from './utils';

export const selectDefaultLedgerTransactions = (state: StoreState) =>
  state.ledger.transactions.transactions;

export const selectLedgerTransactions = createSelector(
  selectDefaultLedgerTransactions,
  items => items && items.asMutable().map(item => prepareValuesToRender(item))
);

export const selectLedgerCurrentTransaction = createSelector(
  selectLedgerTransactions,
  selectActiveItemId,
  (transaction, currentId) => {
    if (!transaction) {
      return null;
    }

    const current = transaction.find(el => el.id === currentId);

    return current;
  }
);

export const selectLedgerTransactionAmount = createSelector(
  selectLedgerCurrentTransaction,
  transaction => transaction && transaction.amount
);

export const selectLedgerCurrentTransactionAccountId = createSelector(
  selectLedgerCurrentTransaction,
  transaction => transaction && transaction.accountId
);

export const selectIsTransactionConvertibleToLoan = createSelector(
  selectLedgerCurrentTransaction,
  transaction => {
    if (!transaction) {
      return false;
    }
    return transaction.transactionTypeId === transactionTypesIds.PURCHASE_CARD_PAYMENT;
  });
