import { createSelector } from 'reselect';

import {
  debitCreditIndicatorConst,
  transactionStatusConst,
  transactionStatusOptions,
  transactionTypesIdsConst,
} from 'consts';

import { IStoreState } from 'store';
import { createLoadingSelector } from 'store/domains/loader';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareDataToRender,
  prepareDirectDebitPaymentHistory,
  prepareDirectDebitPaymentToRender,
  prepareSettleTrDataToRender,
} from './utils';

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

export const currentTrInstitutionSelector = createSelector(
  currentTransactionSelector,
  data => data && data.institutionId
);

export const currentTrAccountIdSelector = createSelector(
  currentTransactionSelector,
  data => data && data.accountId
);

export const currentTrIdSelector = createSelector(
  currentTransactionSelector,
  data => data && data.id
);

export const isDirectDebitTrSelector = createSelector(
  currentTransactionSelector,
  data => data && data.transactionTypeId === transactionTypesIdsConst.DIRECT_DEBIT
);

export const isTrConvertibleToLoanSelector = createSelector(
  currentTransactionSelector,
  data => {
    if (!data) {
      return false;
    }

    return data.debitCreditIndicator === debitCreditIndicatorConst.DEBIT;
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
 * Direct debit payment selectors
 */

export const defaultDirectDebitPaymentSelector = (state: IStoreState) =>
  state.ledger.transactions.directDebitPayment;

export const directDebitPaymentSelector = createSelector(
  defaultDirectDebitPaymentSelector,
  data => prepareDirectDebitPaymentToRender(data)
);

export const directDebitPaymentHistorySelector = createSelector(
  defaultDirectDebitPaymentSelector,
  data => prepareDirectDebitPaymentHistory(data)
);

/**
 * Transactions loading selectors
 */

export const isLoadingTransactionsSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_TRANSACTIONS,
  ActionTypeKeys.FILTER_TRANSACTIONS_BY_ID,
]);

export const isConvertingTrToLoanSelector = createLoadingSelector([
  ActionTypeKeys.CONVERT_TRANSACTION_TO_LOAN,
]);

export const isLoadingDirectDebitPaymentSelector = createLoadingSelector([
  ActionTypeKeys.GET_DIRECT_DEBIT_PAYMENT,
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
