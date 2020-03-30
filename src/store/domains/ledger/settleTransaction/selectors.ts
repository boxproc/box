import { createSelector } from 'reselect';

import { StoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender } from './util';

export const defaultRetrievedTrSelector = (state: StoreState) =>
  state.ledger.settleTransaction.transaction;

export const retrievedTransactionSelector = createSelector(
  defaultRetrievedTrSelector,
  data => data && prepareDataToRender(data)
);

export const isRetrievedTransactionSelector = createSelector(
  defaultRetrievedTrSelector,
  data => {
    if (!data || !data.length) {
      return false;
    }

    return Boolean(data);
  }
);

/**
 * Settle transaction loading selectors
 */

export const isRetrievingTrSelector = createLoadingSelector([
  ActionTypeKeys.RETRIEVE_TRANSACTION,
]);

export const isSettlingTrSelector = createLoadingSelector([
  ActionTypeKeys.SETTLE_TRANSACTION,
]);
