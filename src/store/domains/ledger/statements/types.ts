import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

/**
 * Statement interfaces
 */

export interface IStatementData {
  account_alias_additional: string;
  account_alias: string;
  account_id: number;
  accrued_interest_total?: number;
  address_country_code: string;
  address_line1: string;
  address_line2: string;
  address_line3: string;
  address_line4: string;
  address_post_code: string;
  address_town: string;
  balance_close: number;
  balance_open: number;
  first_name: string;
  first_transaction_id: number;
  id: number;
  institution_id: string | number;
  last_name: string;
  last_transaction_id: number;
  previous_statement_id: number;
  product_name: string;
  repayment_minimum_amount_due: number;
  repayment_status: string;
  repayment_type?: string;
  start_date?: string;
  statement_date: string;
}

export interface IStatementsData {
  statements: Array<IStatementData>;
}

export interface IStatement {
  accountAlias: string;
  accountAliasAdditional: string;
  accountId: number;
  accruedInterestTotal?: string;
  addressCountryCode: string;
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  addressLine4: string;
  addressPostCode: string;
  addressTown: string;
  balanceClose: string;
  balanceOpen: string;
  firstName: string;
  firstTransactionId: number;
  id: number;
  institutionId: string | number;
  lastName: string;
  lastTransactionId: number;
  previousStatementId: number;
  productName: string;
  repaymentMinimumAmountDue: string;
  repaymentStatus: string;
  repaymentType?: string;
  startDate?: string;
  statementDate: string;
}

/**
 * Statement transactions interfaces
 */

export interface IStatementTransactionData {
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

export interface IStatementTransactionsData {
  pending_transactions: Array<IStatementTransactionData>;
  transactions: Array<IStatementTransactionData>;
}

export interface IStatementTransaction {
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

export interface IStatementTransReq {
  id: number;
  firstTransactionId: number | string;
  lastTransactionId: number | string;
}

/**
 * Statement APRs interfaces
 */

export interface IStatementAprData {
  accrued_interest: number;
  description: string;
  product_apr_id: number;
  rate: number;
  statement_id: number;
}

export interface IStatementAprsData {
  statement_aprs: Array<IStatementAprData>;
}

export interface IStatementApr {
  accruedInterest: string;
  description: string;
  productAprId: number;
  rate: string;
  statementId: number;
}

/**
 * Account statements interfaces
 */

export type IAccountStatementData = Partial<IStatementData>;

export interface IAccountStatementsData {
  statements: Array<IAccountStatementData>;
}

export type IAccountStatement = Partial<IStatement>;

/**
 * Statements filter interfaces
 */

export interface IStatementsFilter {
  accountAlias: string;
  accountId: number;
  firstName: string;
  institutionId: ISelectValue;
  lastName: string;
  product: Array<ISelectValue>;
  statementsDateFrom: string;
  statementsDateTo: string;
}

export interface IStatementsFilterToSend {
  account_alias: string;
  account_id: number;
  datetime_from: string;
  datetime_to: string;
  first_name: string;
  institution_id: string | number;
  last_name: string;
  product: Array<string | number>;
}

/**
 * Statements state interface
 */

export interface IStatementsState {
  accountStatements: ImmutableArray<IAccountStatementData>;
  pendingTransactions: ImmutableArray<IStatementTransactionData>;
  statementAprs: ImmutableArray<IStatementAprData>;
  statements: ImmutableArray<IStatementData>;
  transactions: ImmutableArray<IStatementTransactionData>;
}
