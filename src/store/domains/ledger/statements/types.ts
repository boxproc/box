import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

export interface LedgerStatementId {
  id: number;
}

export interface LedgerStatementItem extends LedgerStatementId {
  account_id: number;
  date_from: string;
  date_to: string;
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

export interface LedgerStatementItems extends ResponseStatusType {
  statements: Array<LedgerStatementItem>;
}

export interface LedgerStatementItemPrepared extends LedgerStatementId {
  accountId: number;
  dateFrom: string;
  dateTo: string;
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
  dateFrom: string;
  dateTo: string;
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
}
