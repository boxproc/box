import moment from 'moment';
import { ImmutableArray } from 'seamless-immutable';

import {
  aprTypesOptions,
  dateFormatConst,
  feeTypesOptions,
  rewardsTypesOptions,
  transactionStatusOptions,
} from 'consts';

import {
  IConvertTrToLoanReq,
  IDirectDebitPaymentData,
  IRetrieveTrFormValues,
  ISettleTransactionReq,
  ISettleTrFormValues,
  ITransaction,
  ITransactionData,
  ITransactionsFilter,
} from './types';

import { dateUtil, stringsUtil } from 'utils';

export const prepareDataToRender = (data: ITransactionData): ITransaction => {
  if (!data) {
    return null;
  }

  const {
    id,
    account_id,
    institution_id,
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
  } = data;

  const aprCalculationMethod = aprTypesOptions.find(el => el.value === apr_calculation_method);
  const feeApplicationCondition = feeTypesOptions
    .find(el => el.value === fee_application_condition);
  const rewardApplicationCondition = rewardsTypesOptions
    .find(el => el.value === reward_application_condition);
  const transactionStatus = transactionStatusOptions.find(el => el.value === status);

  return {
    id,
    accountId: account_id,
    institutionId: institution_id,
    transactionTypeId: transaction_type_id,
    status: transactionStatus && transactionStatus.label,
    transactionDatetime: transaction_datetime,
    aprId: product_apr_id,
    aprRate: stringsUtil.numberToFixed(apr_rate, 2),
    aprCalculationMethod: aprCalculationMethod ? aprCalculationMethod.label : null,
    description,
    debitCreditIndicator: debit_credit_indicator,
    amount: stringsUtil.numberToFixed(amount, 2),
    amountInOriginalCurrency: stringsUtil.numberToFixed(amount_in_original_currency, 2),
    cardId: card_id,
    cardTransactionId: card_transaction_id,
    transactionTypeDescription: transaction_type_description,
    originalCurrency: original_currency,
    cardCurrency: card_currency,
    cardAmount: stringsUtil.numberToFixed(card_amount, 2),
    cardAcceptorName: card_acceptor_name,
    cardAcceptorLocation: card_acceptor_location,
    balanceSettledBefore: stringsUtil.numberToFixed(balance_settled_before, 2),
    balanceSettledAfter: stringsUtil.numberToFixed(balance_settled_after, 2),
    balanceAvailableBefore: stringsUtil.numberToFixed(balance_available_before, 2),
    balanceAvailableAfter: stringsUtil.numberToFixed(balance_available_after, 2),
    cardConversionRate: stringsUtil.numberToFixed(card_conversion_rate, 3),
    productFeeId: product_fee_id,
    productRewardId: product_reward_id,
    feeRate: stringsUtil.numberToFixed(fee_rate, 2),
    feeApplicationCondition: feeApplicationCondition ? feeApplicationCondition.label : null,
    rewardApplicationCondition: rewardApplicationCondition
      ? rewardApplicationCondition.label
      : null,
    rewardRate: stringsUtil.numberToFixed(reward_rate, 2),
    cardCurrencyBilling: card_currency_billing,
    cardAmountBilling: stringsUtil.numberToFixed(card_amount_billing, 2),
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

export const prepareFilterToSend = (data: Partial<ITransactionsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    transactionId,
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
    transaction_id: transactionId ? transactionId : null,
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

export const prepareDataToConvert = (data: Partial<IConvertTrToLoanReq>) => {
  if (!data) {
    return null;
  }

  const {
    defNumOfInstallments,
    defNumInterestFreeInstlmts,
    accountId,
    amount,
    transactionId,
    productId,
  } = data;

  return {
    num_of_installments: stringsUtil.toNumber(defNumOfInstallments),
    num_interest_free_instlmts: stringsUtil.toNumber(defNumInterestFreeInstlmts),
    account_id: stringsUtil.toNumber(accountId),
    transaction_id: stringsUtil.toNumber(transactionId),
    product_id: productId,
    amount,
  };
};

/**
 * Settle transaction utils
 */

export const prepareRetrieveTransactionRequest = (data: Partial<IRetrieveTrFormValues>) => {
  const { id } = data;

  return {
    transaction_id: stringsUtil.toNumber(id),
  };
};

export const prepareSettleTrDataToSend = (data: Partial<ISettleTrFormValues>) => {
  if (!data) {
    return null;
  }

  const { transactionId, amountSettled, settledDatetime } = data;

  return {
    transaction_id: stringsUtil.toNumber(transactionId),
    amount_settled: stringsUtil.toNumber(amountSettled),
    settled_datetime: settledDatetime,
  };
};

export const prepareSettleTrDataToRender = (data: ImmutableArray<ISettleTransactionReq>):
  ISettleTrFormValues => {
  if (!data || !data.length) {
    return null;
  }

  const { transaction_id, amount_settled } = data[0];

  return {
    transactionId: transaction_id,
    amountSettled: amount_settled,
    settledDatetime: dateUtil.todayDateTime(),
  };
};

const sortPaymentData = (data: ImmutableArray<IDirectDebitPaymentData>) =>
  data.asMutable().sort((a, b) => {
    const dateA = moment(a.created_timestamp, dateFormatConst.DATE_TIME);
    const dateB = moment(b.created_timestamp, dateFormatConst.DATE_TIME);

    return dateA < dateB ? -1 : 1;
  });

export const prepareDirectDebitPaymentToRender =
  (data: ImmutableArray<IDirectDebitPaymentData>) => {
    if (!data || !data.length) {
      return null;
    }

    const sortedData = sortPaymentData(data);
    const lastState = sortedData[sortedData.length - 1];

    const {
      id,
      transaction_id,
      event_id,
      mandate_id,
      created_timestamp,
      provider_timestamp,
      amount,
      status,
      account_alias,
      bank_name,
    } = lastState;

    return {
      directDebitId: id,
      directDebitTransactionId: transaction_id,
      directDebitEventId: event_id,
      directDebitMandateId: mandate_id,
      directDebitCreatedTimestamp: created_timestamp,
      directDebitProviderTimestamp: provider_timestamp,
      directDebitAmount: amount,
      directDebitStatus: status,
      directDebitAccountAlias: `••••${account_alias}`,
      directDebitBankName: bank_name,
    };
  };

export const prepareDirectDebitPaymentHistory =
  (data: ImmutableArray<IDirectDebitPaymentData>) => {
    if (!data || !data.length) {
      return null;
    }

    const sortedData = sortPaymentData(data);

    return sortedData.map(el => {
      return { date: el.created_timestamp, event: el.status };
    });
  };
