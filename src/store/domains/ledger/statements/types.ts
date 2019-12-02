import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

export interface LedgerStatementItem {
  id: number;
  account_id: number;
  first_transaction_id: number;
  last_transaction_id: number;
  statement_date: string;
  balance_open: number;
  balance_close: number;
  minimum_amount_due_repayment: number;
  statement_cycle_id: number | string;
  repayment_status: string;
  date_of_last_update: string;
  account_alias: string;
  institution_id: string | number;
  product_name: string;
  first_name: string;
  last_name: string;
  statement_cycle_description: string;
  accrued_interest_total?: number;
  accrued_fee_total?: number;
  accrued_reward_total?: number;
}

export interface LedgerStatementItemPrepared {
  id: number;
  accountId: number;
  firstTransactionId: number;
  lastTransactionId: number;
  statementDate: string;
  balanceOpen: string | number;
  balanceClose: string | number;
  minimumAmountDueRepayment: string | number;
  repaymentStatus: string;
  dateOfLastUpdate: string;
  statementCycleName: string;
  accountAlias: string;
  institutionId: string | number;
  productName: string;
  firstName: string;
  lastName: string;
  accruedInterestTotal?: number;
  accruedFeeTotal?: number;
  accruedRewardTotal?: number;
}

export interface LedgerStatementTransactionsItem {
  id: number;
  transaction_datetime: string;
  amount: number;
  amount_in_original_currency: number;
  balance_available_before: number;
  balance_available_after: number;
  balance_settled_before: number;
  balance_settled_after: number;
  description: string;
  apr_id: number;
  apr_rate: number;
}

export interface LedgerStatementTransactionsItemPrepared {
  id: number;
  transactionDatetime: number | string;
  amount: number | string;
  amountInOriginalCurrency: number | string;
  balanceAvailableBefore: number | string;
  balanceAvailableAfter: number | string;
  balanceSettledBefore: number | string;
  balanceSettledAfter: number | string;
  description: number | string;
  aprId: number;
  aprRate: string;
}

export interface LedgerStatementTransactionsItemsRequest {
  id: number;
  firstTransactionId: number | string;
  lastTransactionId: number | string;
}

export interface LedgerStatementAprItem {
  statement_id: number;
  product_apr_id: number;
  accrued_interest: number;
}

export interface LedgerStatementAprItems {
  statement_aprs: Array<LedgerStatementAprItem>;
}

export interface LedgerStatementAprItemPrepared {
  statementId: number;
  productAprId: number;
  accruedInterest: number;
}

export interface LedgerStatementFeeItem {
  statement_id: number;
  product_fee_id: number;
  accrued_fee: number;
}

export interface LedgerStatementFeeItems {
  statement_fees: Array<LedgerStatementFeeItem>;
}

export interface LedgerStatementFeeItemPrepared {
  statementId: number;
  productFeeId: number;
  accruedFee: number;
}

export interface LedgerStatementRewardItem {
  statement_id: number;
  product_reward_id: number;
  accrued_reward: number;
}

export interface LedgerStatementRewardItems {
  statement_rewards: Array<LedgerStatementRewardItem>;
}

export interface LedgerStatementRewardItemPrepared {
  statementId: number;
  productRewardId: number;
  accruedReward: number;
}

export type LedgerAccountStatementItem = Partial<LedgerStatementItem>;

export type LedgerAccountStatementItemPrepared = Partial<LedgerStatementItemPrepared>;

export interface LedgerStatementTransactionsItems {
  transactions: Array<LedgerStatementTransactionsItem>;
}

export interface LedgerStatementItems {
  statements: Array<LedgerStatementItem>;
}

export interface LedgerAccountStatementItems {
  statements: Array<LedgerAccountStatementItem>;
}

export interface LedgerStatementsFilter {
  accountId: number;
  institutionId: SelectValues;
  accountAlias: string;
  firstName: string;
  lastName: string;
  statementsDateFrom: string;
  statementsDateTo: string;
  product: Array<SelectValues>;
}

export interface LedgerStatementsFilterPrepared {
  account_id: number;
  institution_id: string | number;
  account_alias: string;
  first_name: string;
  last_name: string;
  datetime_from: string;
  datetime_to: string;
  product: Array<string | number>;
}

export interface LedgerStatementsState {
  statements: ImmutableArray<LedgerStatementItem>;
  transactions: ImmutableArray<LedgerStatementTransactionsItem>;
  accountStatements: ImmutableArray<LedgerAccountStatementItem>;
  statementAprs: ImmutableArray<LedgerStatementAprItem>;
  statementFees: ImmutableArray<LedgerStatementFeeItem>;
  statementRewards: ImmutableArray<LedgerStatementRewardItem>;
}
