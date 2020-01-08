import {
  aprTypesOptions,
  feeTypesOptions,
  rewardsTypesOptions,
  transactionStatusOptions,
} from 'consts';

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
    product_apr_id,
    apr_rate,
    apr_calculation_method,
    amount,
    card_conversion_rate,
    product_fee_id,
    product_reward_id,
    fee_rate,
    fee_application_condition,
    reward_application_condition,
    reward_rate,
    card_currency_billing,
    card_amount_billing,
    card_acceptor_terminal_id,
    card_acceptor_id_code,
    card_stan,
    card_mcc,
    card_acquirer_id,
    card_acquirer_country_code,
    card_pos_entry_mode,
    card_pos_condition_data,
    card_response_code,
    parent_transaction_id,
    settled_datetime,
    amount_settled,
    source_endpoint_id,
  } = values;

  const aprCalculationMethod = aprTypesOptions.find(el => el.value === apr_calculation_method);
  const feeApplicationCondition = feeTypesOptions
    .find(el => el.value === fee_application_condition);
  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.value === reward_application_condition);
  const transactionStatus = transactionStatusOptions.find(el => el.value === status);

  return {
    id,
    accountId: account_id,
    transactionTypeId: transaction_type_id,
    status: transactionStatus && transactionStatus.label,
    transactionDatetime: transaction_datetime,
    aprId: product_apr_id,
    aprRate: apr_rate,
    aprCalculationMethod: aprCalculationMethod ? aprCalculationMethod.label : null,
    description,
    debitCreditIndicator: debit_credit_indicator,
    amount,
    amountInOriginalCurrency: amount_in_original_currency,
    cardId: card_id,
    cardTransactionId: card_transaction_id,
    transactionTypeDescription: transaction_type_description,
    originalCurrency: original_currency,
    cardCurrency: card_currency,
    cardAmount: card_amount,
    cardAcceptorName: card_acceptor_name,
    cardAcceptorLocation: card_acceptor_location,
    balanceSettledBefore: balance_settled_before,
    balanceSettledAfter: balance_settled_after,
    balanceAvailableBefore: balance_available_before,
    balanceAvailableAfter: balance_available_after,
    cardConversionRate: card_conversion_rate,
    productFeeId: product_fee_id,
    productRewardId: product_reward_id,
    feeRate: fee_rate,
    feeApplicationCondition: feeApplicationCondition ? feeApplicationCondition.label : null,
    rewardApplicationCondition: rewardApplicationCondition
      ? rewardApplicationCondition.label
      : null,
    rewardRate: reward_rate,
    cardCurrencyBilling: card_currency_billing,
    cardAmountBilling: card_amount_billing,
    cardAcceptorTerminalId: card_acceptor_terminal_id,
    cardAcceptorIdCode: card_acceptor_id_code,
    cardStan: card_stan,
    cardMcc: card_mcc,
    cardAcquirerId: card_acquirer_id,
    cardAcquirerCountryCode: card_acquirer_country_code,
    cardPosEntryMode: card_pos_entry_mode,
    cardPosConditionData: card_pos_condition_data,
    cardResponseCode: card_response_code,
    parentTransactionId: parent_transaction_id,
    settledDatetime: settled_datetime,
    amountSettled: amount_settled,
    sourceEndpointId: source_endpoint_id,
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
