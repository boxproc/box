import { debitCreditIndicatorOptions } from 'consts';

import {
  LedgerTransactionItem,
  LedgerTransactionItemPrepared,
  LedgerTransactionsFilterParams,
} from './types';

export const prepareValuesToRender = (values: LedgerTransactionItem):
  LedgerTransactionItemPrepared => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    accountId: values.account_id,
    transactionDatetime: values.transaction_datetime,
    transactionTypeId: values.transaction_type_id,
    debitCreditIndicator:
      debitCreditIndicatorOptions.find(el => el.value === values.debit_credit_indicator)
        ? debitCreditIndicatorOptions.find(el => el.value === values.debit_credit_indicator).label
        : values.debit_credit_indicator,
    amount: values.amount,
    amountInOriginalCurrency: values.amount_in_original_currency,
    balanceSettledBefore: values.balance_settled_before,
    balanceSettledAfter: values.balance_settled_after,
    balanceAvailableBefore: values.balance_available_before,
    balanceAvailableAfter: values.balance_available_after,
    description: values.description,
    originalCurrency: values.original_currency,
    cardTransactionId: values.card_transaction_id,
    cardId: values.card_id,
    cardCurrency: values.card_currency,
    cardAmount: values.card_amount,
    cardConversionRate: values.card_conversion_rate,
    cardAcceptorName: values.card_acceptor_name,
    cardAcceptorLocation: values.card_acceptor_location,
  };
};

export const prepareGeneralValuesToRender = (values: Partial<LedgerTransactionItemPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    amount: values.amount,
    description: values.description,
    accountId: values.accountId,
    transactionDatetime: values.transactionDatetime,
    transactionTypeId: values.transactionTypeId,
    debitCreditIndicator: values.debitCreditIndicator,
    amountInOriginalCurrency: values.amountInOriginalCurrency,
  };
};

export const prepareCardValuesToRender = (values: Partial<LedgerTransactionItemPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    cardTransactionId: values.cardTransactionId,
    cardId: values.cardId,
    cardCurrency: values.cardCurrency,
    cardAmount: values.cardAmount,
    cardConversionRate: values.cardConversionRate,
    cardAcceptorName: values.cardAcceptorName,
    cardAcceptorLocation: values.cardAcceptorLocation,
  };
};

export const prepareBalanceValuesToRender = (values: Partial<LedgerTransactionItemPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    balanceSettledBefore: values.balanceSettledBefore,
    balanceSettledAfter: values.balanceSettledAfter,
    balanceAvailableBefore: values.balanceAvailableBefore,
    balanceAvailableAfter: values.balanceAvailableAfter,
  };
};

export const preparedFilterParamsToSend = (params: Partial<LedgerTransactionsFilterParams>) => {
  if (!params) {
    return null;
  }

  const { id, customerId, productType, datetimeFrom, datetimeTo } = params;

  return {
    id: id && Number(id),
    customer_id: customerId && Number(customerId),
    product_type: productType && productType.value,
    datetime_from: datetimeFrom,
    datetime_to: datetimeTo,
  };
};
