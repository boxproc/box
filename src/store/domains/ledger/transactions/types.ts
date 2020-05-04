import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

/**
 * Transactions common interfaces
 */

interface ITransactionPlain {
  id: number;
  description: string;
}

export interface ITransactionData extends ITransactionPlain {
  amount: number;
  account_id: number;
  institution_id: number;
  transaction_datetime: string;
  transaction_type_id: number;
  debit_credit_indicator: string;
  amount_in_original_currency: number;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_available_before: number;
  balance_available_after: number;
  original_currency: string;
  card_transaction_id: string;
  card_id: number;
  card_currency: string;
  card_amount: number;
  card_acceptor_name: string;
  card_acceptor_location: string;
  transaction_type_description: string;
  product_apr_id: number;
  apr_rate: number;
  apr_calculation_method: string;
  status: string;
  card_conversion_rate: number;
  product_fee_id: number;
  product_reward_id: number;
  fee_rate: number;
  fee_application_condition: string;
  reward_application_condition: string;
  reward_rate: number;
  card_currency_billing: string;
  card_amount_billing: number;
  card_acceptor_terminal_id: string;
  card_acceptor_id_code: string;
  card_stan: string;
  card_mcc: string;
  card_acquirer_id: string;
  card_acquirer_country_code: string;
  card_pos_entry_mode: string;
  card_pos_condition_data: string;
  card_response_code: string;
  parent_transaction_id: number;
  settled_datetime: string;
  amount_settled: number;
  source_endpoint_id: number;
}

export interface ITransactionsData {
  transactions: Array<ITransactionData>;
}

export interface ITransaction extends ITransactionPlain {
  amount: string;
  accountId: number;
  institutionId: number;
  transactionDatetime: string;
  transactionTypeId: number;
  debitCreditIndicator: string;
  amountInOriginalCurrency: string;
  balanceSettledBefore: string;
  balanceSettledAfter: string;
  balanceAvailableBefore: string;
  balanceAvailableAfter: string;
  originalCurrency: string;
  cardTransactionId: string;
  cardId: number;
  cardCurrency: string;
  cardAmount: string;
  cardAcceptorName: string;
  cardAcceptorLocation: string;
  transactionTypeDescription: string;
  aprId: number;
  aprRate: string;
  aprCalculationMethod: string;
  status: string;
  cardConversionRate: string;
  productFeeId: number;
  productRewardId: number;
  feeRate: string;
  feeApplicationCondition: string;
  rewardApplicationCondition: string;
  rewardRate: string;
  cardCurrencyBilling: string;
  cardAmountBilling: string;
  cardAcceptorTerminalId: string;
  cardAcceptorIdCode: string;
  cardStan: string;
  cardMcc: string;
  cardAcquirerId: string;
  cardAcquirerCountryCode: string;
  cardPosEntryMode: string;
  cardPosConditionData: string;
  cardResponseCode: string;
  parentTransactionId: number;
  settledDatetime: string;
  amountSettled: number;
  sourceEndpointId: number;
}

/** Convert transaction loan request interfaces */

export interface IConvertTrToLoanReq {
  amount: number;
  accountId: number;
  defNumOfInstallments: number;
  defNumOfIntrstFreeInstlmts: number;
  transactionId: number;
  productId: number;
}

export interface IConvertTrToLoanReqToSend {
  amount: number;
  account_id: number;
  num_of_installments: number;
  num_of_interest_free_instllmnts: number;
  transaction_id: number;
  product_id: number;
}

/** Transactions filter interfaces */

export interface ITransactionsFilter {
  institutionId: ISelectValue;
  customerId: number;
  transactionId: number;
  productName: ISelectValue;
  transactionsDateTimeFrom: string;
  transactionsDateTimeTo: string;
  accountId: number;
  cardId: number;
  panAlias: string;
}

export interface ITransactionsFilterToSend {
  institution_id: string | number;
  customer_id: number;
  id: number;
  product_name: string | number;
  datetime_from: string;
  datetime_to: string;
  account_id: number;
  card_id: number;
  pan_alias: string;
}

/**
 * Retrieve transaction interfaces
 */

export interface IRetrieveTrFormValues {
  id: string;
}

export interface IRetrieveTrReq {
  transaction_id: number;
}

/**
 * Settle transaction interfaces
 */

export interface ISettleTransactionReq {
  transaction_id: number;
  amount_settled: number;
  settled_datetime: string;
}

export interface ISettleTransactionDataReq {
  transaction: Array<ISettleTransactionReq>;
}

export interface ISettleTrFormValues {
  transactionId: number;
  amountSettled: number;
  settledDatetime: string;
}

export interface ISettleTransactionResp {
  transaction_result: {
    transaction_id: number;
    status: string;
    amount_settled: number;
    settled_datetime: string;
    balance_settled_before: number;
    balance_settled_after: number;
  };
}

/** Transactions state interface */
export interface ITransactionsState {
  transactions: ImmutableArray<ITransactionData>;
  settledTransaction: ImmutableArray<ISettleTransactionReq>;
}
