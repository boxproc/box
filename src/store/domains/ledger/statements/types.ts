import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

export interface LedgerStatementId {
  id: number;
}

export interface LedgerStatementItem extends LedgerStatementId {
  account_id: number;
  first_transaction_id: number;
  last_transaction_id: number;
  statement_date: string;
  balance_open: number;
  balance_close: number;
  minimum_amount_due_repayment: number;
  statement_cycle_id: number | string;
  cycle_execution_history_id: number;
  account_alias: string;
  institution_id: string | number;
  product_name: string | number;
  first_name: string;
  last_name: string;
  statement_cycle_description: string;
}

export interface LedgerStatementTransactionsItem extends LedgerStatementTransactionsId {
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
export interface LedgerStatementTransactionsId {
  id: number;
}

export interface LedgerStatementTransactionsItemPrepared extends LedgerStatementTransactionsId {
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
  firstTransactionId:  number | string;
  lastTransactionId:  number | string;
  id:  number ;
}

export interface LedgerStatementTransactionsItems {
  transactions: Array<LedgerStatementTransactionsItem>;
}

export interface LedgerStatementItems {
  statements: Array<LedgerStatementItem>;
}

export interface LedgerStatementItemPrepared extends LedgerStatementId {
  accountId: number;
  firstTransactionId: number;
  lastTransactionId: number;
  statementDate: string;
  balanceOpen: string | number;
  balanceClose: string | number;
  minimumAmountDueRepayment: string | number;
  statementCycle: number | string;
  cycleExecutionHistoryId: number;
  accountAlias: string;
  institutionId: string | number;
  productName: string | number;
  firstName: string;
  lastName: string;
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
}
