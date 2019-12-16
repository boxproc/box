import { aprTypesOptions } from 'consts';

import {
  LedgerTransactionItem,
  LedgerTransactionItemPrepared,
  LedgerTransactionsFilter,
} from './types';

import { stringsUtil } from 'utils';

export const prepareValuesToRender = (values: LedgerTransactionItem):
  LedgerTransactionItemPrepared => {
  if (!values) {
    return null;
  }

  const {
    id,
    account_id,
    status,
    transaction_datetime,
    transaction_type_id,
    debit_credit_indicator,
    amount_in_original_currency,
    balance_settled_before,
    balance_settled_after,
    balance_available_before,
    balance_available_after,
    description,
    original_currency,
    card_transaction_id,
    card_id,
    card_currency,
    card_amount,
    card_acceptor_name,
    card_acceptor_location,
    transaction_type_description,
    apr_id,
    apr_rate,
    apr_calculation_method,
    amount,
  } = values;

  const aprCalculationMethod = aprTypesOptions.find(el => el.value === apr_calculation_method);

  return {
    id,
    accountId: account_id,
    transactionTypeId: transaction_type_id,
    status,
    transactionDatetime: transaction_datetime,
    aprId: apr_id,
    aprRate: stringsUtil.checkNumberToFixed(apr_rate) ? apr_rate.toFixed(2) : null,
    aprCalculationMethod: aprCalculationMethod ? aprCalculationMethod.label : null,
    description,
    debitCreditIndicator: debit_credit_indicator,
    amount: stringsUtil.checkNumberToFixed(amount) ? amount.toFixed(2) : null,
    amountInOriginalCurrency: stringsUtil.checkNumberToFixed(amount_in_original_currency)
      ? amount_in_original_currency.toFixed(2)
      : null,
    cardId: card_id,
    cardTransactionId: card_transaction_id,
    transactionTypeDescription: transaction_type_description,
    originalCurrency: original_currency,
    cardCurrency: card_currency,
    cardAmount: stringsUtil.checkNumberToFixed(card_amount) ? card_amount.toFixed(2) : null,
    cardAcceptorName: card_acceptor_name,
    cardAcceptorLocation: card_acceptor_location,
    balanceSettledBefore: stringsUtil.checkNumberToFixed(balance_settled_before)
      ? balance_settled_before.toFixed(2)
      : null,
    balanceSettledAfter: stringsUtil.checkNumberToFixed(balance_settled_after)
      ? balance_settled_after.toFixed(2)
      : null,
    balanceAvailableBefore: stringsUtil.checkNumberToFixed(balance_available_before)
      ? balance_available_before.toFixed(2)
      : null,
    balanceAvailableAfter: stringsUtil.checkNumberToFixed(balance_available_after)
      ? balance_available_after.toFixed(2)
      : null,
  };
};

export const preparedFilterToSend = (data: Partial<LedgerTransactionsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institutionId,
    customerId,
    productName,
    transactionsDateTimeFrom,
    transactionsDateTimeTo,
    accountId,
    cardId,
    panAlias,
  } = data;

  return {
    transaction_id: id ? id : null,
    institution_id: institutionId ? institutionId.value : null,
    customer_id: customerId ? customerId : null,
    product_name: productName ? productName.label : null,
    datetime_from: transactionsDateTimeFrom ? transactionsDateTimeFrom : null,
    datetime_to: transactionsDateTimeTo ? transactionsDateTimeTo : null,
    account_id: accountId ? accountId : null,
    card_id: cardId ? cardId : null,
    pan_alias: panAlias ? panAlias : null,
  };
};
