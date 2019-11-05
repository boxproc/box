import { aprTypesOptions } from 'consts';
import {
  LedgerTransactionItem,
  LedgerTransactionItemPrepared,
  LedgerTransactionsFilter,
} from './types';

export const prepareValuesToRender = (values: LedgerTransactionItem):
  LedgerTransactionItemPrepared => {
  if (!values) {
    return null;
  }

  const aprCalculationMethod = aprTypesOptions
    .find(el => el.value === values.apr_calculation_method);

  return {
    id: values.id,
    accountId: values.account_id,
    transactionDatetime: values.transaction_datetime,
    transactionTypeId: values.transaction_type_id,
    debitCreditIndicator: values.debit_credit_indicator,
    amount: values.amount && values.amount.toFixed(2),
    amountInOriginalCurrency: values.amount_in_original_currency
      && values.amount_in_original_currency.toFixed(2),
    balanceSettledBefore: values.balance_settled_before
      && values.balance_settled_before.toFixed(2),
    balanceSettledAfter: values.balance_settled_after
      && values.balance_settled_after.toFixed(2),
    balanceAvailableBefore: values.balance_available_before
      && values.balance_available_before.toFixed(2),
    balanceAvailableAfter: values.balance_available_after
      && values.balance_available_after.toFixed(2),
    description: values.description,
    originalCurrency: values.original_currency,
    cardTransactionId: values.card_transaction_id,
    cardId: values.card_id,
    cardCurrency: values.card_currency,
    cardAmount: values.card_amount && values.card_amount.toFixed(2),
    cardConversionRate: values.card_conversion_rate && values.card_conversion_rate.toFixed(2),
    cardAcceptorName: values.card_acceptor_name,
    cardAcceptorLocation: values.card_acceptor_location,
    transactionTypeDescription: values.transaction_type_description,
    aprId: values.apr_id,
    aprRate: values.apr_rate && values.apr_rate.toFixed(2),
    aprCalculationMethod: aprCalculationMethod && aprCalculationMethod.label,
    status: values.status,
  };
};

export const preparedFilterToSend = (params: Partial<LedgerTransactionsFilter>) => {
  if (!params) {
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
  } = params;

  return {
    id: id ? id : null,
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
