import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

export interface LedgerStatementItem {
  id: number;
  account_id: number;
  first_transaction_id: number;
  last_transaction_id: number;
  statement_date: string;
  balance_open: number;
  balance_close: number;
  repayment_minimum_amount_due: number;
  repayment_status: string;
  account_alias: string;
  institution_id: string | number;
  product_name: string;
  first_name: string;
  last_name: string;
  accrued_interest_total?: number;
  account_alias_additional: string;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  address_line4: string;
  address_town: string;
  address_post_code: string;
  address_country_code: string;
  previous_statement_id: number;
  start_date?: string;
  repayment_type?: string;
}

export interface LedgerStatementItemPrepared {
  id: number;
  accountId: number;
  firstTransactionId: number;
  lastTransactionId: number;
  statementDate: string;
  balanceOpen: string;
  balanceClose: string;
  repaymentMinimumAmountDue: string;
  repaymentStatus: string;
  accountAlias: string;
  institutionId: string | number;
  productName: string;
  firstName: string;
  lastName: string;
  accruedInterestTotal?: string;
  accountAliasAdditional: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressTown: string;
  addressPostCode: string;
  addressCountryCode: string;
  previousStatementId: number;
  startDate?: string;
  repaymentType?: string;
}

export interface LedgerStatementTransactionsItem {
  amount_in_original_currency: number;
  amount: number;
  apr_id: number;
  apr_rate: number;
  balance_available_after: number;
  balance_available_before: number;
  balance_settled_after: number;
  balance_settled_before: number;
  description: string;
  grace_period: number;
  id: number;
  original_currency: string;
  status_name: string;
  status: string;
  transaction_datetime: string;
}

export interface LedgerStatementTransactionsItemPrepared {
  amount: string;
  amountInOriginalCurrency: string;
  aprId: number;
  aprRate: string;
  balanceAvailableAfter: string;
  balanceAvailableBefore: string;
  balanceSettledAfter: string;
  balanceSettledBefore: string;
  description: string;
  gracePeriod: number;
  id: number;
  originalCurrency: string;
  status: string;
  transactionDatetime: number | string;
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
  description: string;
  rate: number;
}

export interface LedgerStatementAprItems {
  statement_aprs: Array<LedgerStatementAprItem>;
}

export interface LedgerStatementAprItemPrepared {
  statementId: number;
  productAprId: number;
  accruedInterest: string;
  description: string;
  rate: string;
}

export type LedgerAccountStatementItem = Partial<LedgerStatementItem>;

export type LedgerAccountStatementItemPrepared = Partial<LedgerStatementItemPrepared>;

export interface LedgerStatementTransactionsItems {
  pending_transactions: Array<LedgerStatementTransactionsItem>;
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
  institutionId: ISelectValue;
  accountAlias: string;
  firstName: string;
  lastName: string;
  statementsDateFrom: string;
  statementsDateTo: string;
  product: Array<ISelectValue>;
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
  pendingTransactions: ImmutableArray<LedgerStatementTransactionsItem>;
  transactions: ImmutableArray<LedgerStatementTransactionsItem>;
  accountStatements: ImmutableArray<LedgerAccountStatementItem>;
  statementAprs: ImmutableArray<LedgerStatementAprItem>;
}
