import { createSelector } from 'reselect';

import { transactionStatusConst, transactionStatusOptions, transactionTypesIds } from 'consts';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import { prepareDataToRender, prepareSettleTrDataToRender } from './utils';

export const defaultTransactionsSelector = (state: IStoreState) =>
  state.ledger.transactions.transactions;

export const transactionsSelector = createSelector(
  defaultTransactionsSelector,
  data => data && data.map(el => prepareDataToRender(el))
);

/**
 * Current transaction selectors
 */

export const currentTransactionSelector = createSelector(
  transactionsSelector,
  activeItemIdSelector,
  (transaction, currentId) => {
    if (!transaction) {
      return null;
    }

    return transaction.find(el => el.id === currentId);
  }
);

export const currentTrAmountSelector = createSelector(
  currentTransactionSelector,
  data => data && data.amount
);

export const currentTrAccountIdSelector = createSelector(
  currentTransactionSelector,
  data => data && data.accountId
);

export const currentTrIdSelector = createSelector(
  currentTransactionSelector,
  data => data && data.id
);

export const isTrConvertibleToLoanSelector = createSelector(
  currentTransactionSelector,
  data => {
    if (!data) {
      return false;
    }

    return data.transactionTypeId === transactionTypesIds.PURCHASE_CARD_PAYMENT;
  });

export const isSettledTrSelector = createSelector(
  currentTransactionSelector,
  data => {
    if (!data) {
      return false;
    }

    const { status } = data;

    return status === transactionStatusConst.SETTLED || status === transactionStatusOptions
      .find(el => el.value === transactionStatusConst.SETTLED).label;
  });

/**
 * Transactions loading selectors
 */

export const isLoadingTransactionsSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_TRANSACTIONS,
]);

export const isConvertingTrToLoanSelector = createLoadingSelector([
  ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN,
]);

/**
 * Settle transaction selectors
 */

export const defaultRetrievedTrSelector = (state: IStoreState) =>
  state.ledger.transactions.settledTransaction;

export const retrievedTransactionSelector = createSelector(
  defaultRetrievedTrSelector,
  data => data && prepareSettleTrDataToRender(data)
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

export const isRetrievingTrLoadingSelector = createLoadingSelector([
  ActionTypeKeys.RETRIEVE_TRANSACTION,
]);

export const isSettlingTrLoadingSelector = createLoadingSelector([
  ActionTypeKeys.SETTLE_TRANSACTION,
]);
