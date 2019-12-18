import { ImmutableArray } from 'seamless-immutable';
import { SelectValues } from 'types';

export interface LedgerTransactionId {
  id: number;
}

export interface LedgerTransactionPlainInfo extends LedgerTransactionId {
  description: string;
}

export interface LedgerTransactionItem extends LedgerTransactionPlainInfo {
  amount: number;
  account_id: number;
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
}

export interface LedgerTransactionItems {
  transactions: Array<LedgerTransactionItem>;
}

export interface LedgerTransactionItemPrepared extends LedgerTransactionPlainInfo {
  amount: string;
  accountId: number;
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
}

export interface LedgerTransactionsFilter extends LedgerTransactionId {
  institutionId: SelectValues;
  customerId: number;
  productName: SelectValues;
  transactionsDateTimeFrom: string;
  transactionsDateTimeTo: string;
  accountId: number;
  cardId: number;
  panAlias: string;
}

export interface LedgerTransactionsFilterPrepared extends LedgerTransactionId {
  institution_id: string | number;
  customer_id: number;
  product_name: string | number;
  datetime_from: string;
  datetime_to: string;
  account_id: number;
  card_id: number;
  pan_alias: string;
}

export interface LedgerTransactionsState {
  transactions: ImmutableArray<LedgerTransactionItem>;
}
