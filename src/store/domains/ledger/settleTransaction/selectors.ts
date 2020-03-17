import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { prepareDataToRender } from './util';

export const selectDefaultRetrievedTransaction = (state: StoreState) =>
  state.ledger.settleTransaction.transaction;

export const selectRetrievedTransaction = createSelector(
  selectDefaultRetrievedTransaction,
  transaction => transaction && prepareDataToRender(transaction.asMutable())
);

export const selectIsRetrievedTransaction = createSelector(
  selectDefaultRetrievedTransaction,
  transaction => {
    if (!transaction || !transaction.length) {
      return false;
    }

    return Boolean(transaction);
  }
);
