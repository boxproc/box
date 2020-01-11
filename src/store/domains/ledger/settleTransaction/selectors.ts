import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';
import { prepareDataToRender } from './util';

export const selectDefaultRetrievedTransaction = (state: StoreState) =>
  state.ledger.settleTransaction.transaction;

export const selectRetrievedTransaction = createSelector(
  selectDefaultRetrievedTransaction,
  transaction => transaction && prepareDataToRender(transaction)
);

export const selectIsRetrievedTransaction = createSelector(
  selectDefaultRetrievedTransaction,
  transaction => Boolean(transaction)
);
