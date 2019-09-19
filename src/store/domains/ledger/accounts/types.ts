
import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';
import { LedgerStatementItem } from '../statements';

export interface LedgerAccountId {
  id: number;
}

export interface LedgerAccountItemPlain extends LedgerAccountId {
  status: string | number;
}

export interface LedgerAccountItem extends LedgerAccountItemPlain {
  account_alias: string;
  account_alias_additional: string;
  customer_id: number;
  customer_first_name: string;
  customer_last_name: string;
  institution_id: number | string;
  product_id: number | string;
  product_name: string | number;
  balance_settled: number;
  balance_available: number;
  amount_due_repayment: number;
  balance_limit: number;
  balance_limit_shared: number;
  accrued_interest: number;
  date_created: string;
  date_closed: string;
  statement_cycle_id: number | string;
  last_cycle_date: string;
  aux_counter_1: number;
  aux_counter_2: number;
  aux_counter_3: number;
  amount_overdue: number;
  amount_overdue_1_cycle: number;
  amount_overdue_2_cycles: number;
  amount_overdue_3_cycles: number;
  amount_overdue_4_cycles: number;
  amount_overdue_5_cycles: number;
  amount_overdue_6_cycles: number;
  amount_overdue_7_cycles: number;
  number_of_times_overdue_total: number;
  number_of_times_overdue_1_cycle: number;
  number_of_times_overdue_2_cycle: number;
  number_of_times_overdue_3_cycle: number;
  number_of_times_overdue_4_cycle: number;
  number_of_times_overdue_5_cycle: number;
  number_of_times_overdue_6_cycle: number;
  number_of_times_overdue_7_cycle: number;
}

export interface LedgerAccountItems extends ResponseStatusType {
  accounts: Array<LedgerAccountItem>;
}

export interface LedgerAccountItemPlainPrepared extends LedgerAccountId {
  accountAlias: string;
  accountAliasAdditional: string;
  customerId: number;
  customerFirstName: string;
  customerLastName: string;
  productId: number | string;
  balanceSettled: string | number;
  balanceAvailable: number | string;
  amountDueRepayment: number | string;
  balanceLimit: number | string;
  balanceLimitShared: number | string;
  accruedInterest: string | number;
  dateCreated: string;
  dateClosed: string;
  lastCycleDate: string;
  auxCounter1: number | string;
  auxCounter2: number | string;
  auxCounter3: number | string;
  amountOverdue: number | string;
  amountOverdue1Cycle: number | string;
  amountOverdue2Cycles: number | string;
  amountOverdue3Cycles: number | string;
  amountOverdue4Cycles: number | string;
  amountOverdue5Cycles: number | string;
  amountOverdue6Cycles: number | string;
  amountOverdue7Cycles: number | string;
  numberOfTimesOverdueTotal: number;
  numberOfTimesOverdue1Cycle: number;
  numberOfTimesOverdue2Cycles: number;
  numberOfTimesOverdue3Cycles: number;
  numberOfTimesOverdue4Cycles: number;
  numberOfTimesOverdue5Cycles: number;
  numberOfTimesOverdue6Cycles: number;
  numberOfTimesOverdue7Cycles: number;
}

export interface LedgerAccountItemPrepared extends LedgerAccountItemPlainPrepared {
  status: string | number;
  institutionId: string | number;
  statementCycleId: string | number;
  productName: string | number;
}

export interface LedgerAccountItemDetailsPrepared extends LedgerAccountItemPlainPrepared {
  status: SelectValues;
  institutionId: SelectValues;
  statementCycleId: SelectValues;
  productName: SelectValues;
}

export interface LedgerAccountsFilterParams extends LedgerAccountId {
  institutionId: SelectValues;
  customerFirstName: string;
  customerLastName: string;
  productName: Array<SelectValues>;
  accountAlias: string;
  id: number;
}

export interface LedgerAccountsFilterParamsPrepared extends LedgerAccountId {
  institution_id: string | number;
  customer_first_name: string;
  customer_last_name: string;
  product_name: Array<string | number>;
  account_alias: string;
  id: number;
}

export interface LedgerAccountsCardsItem {
  pan_alias: string;
  pan_masked: string;
  expiry_date: string;
  status: string;
}

export interface LedgerAccountsCardsItemPrepared {
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  status: string;
}

export interface LedgerAccountCardsItems extends ResponseStatusType {
  cards: Array<LedgerAccountsCardsItem>;
}

export interface LedgerAccountsState {
  accounts: ImmutableArray<LedgerAccountItem>;
  cards: ImmutableArray<LedgerAccountsCardsItem>;
  currentAccountId: number;
  lastStatement: Partial<LedgerStatementItem>;
}
