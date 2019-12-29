
import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

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
  product_override_id?: number;
  date_of_product_override?: string;
  product_name: string | number;
  product_type: string;
  balance_settled: number;
  balance_available: number;
  amount_due_repayment: number;
  balance_limit: number;
  balance_limit_shared: number;
  accrued_interest: number;
  date_created: string;
  date_closed: string;
  statement_cycle_id: number | string;
  statement_cycle_description: string;
  last_cycle_date: string;
  aux_counter_1: number;
  aux_counter_2: number;
  aux_counter_3: number;
  aux_counter_1_description: string;
  aux_counter_2_description: string;
  aux_counter_3_description: string;
  aux_counter_1_enabled: string;
  aux_counter_2_enabled: string;
  aux_counter_3_enabled: string;
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
  currency_code: string;
}

export interface LedgerAccountItems {
  accounts: Array<LedgerAccountItem>;
}

export interface LedgerAccountItemPlainPrepared extends LedgerAccountId {
  accountAlias: string;
  accountAliasAdditional: string;
  customerId: number;
  firstName: string;
  lastName: string;
  productId: number | string;
  productOverrideId?: number;
  dateOfProductOverride?: string;
  productOverrideFlag?: boolean;
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
  auxCounter1Description: string;
  auxCounter2Description: string;
  auxCounter3Description: string;
  auxCounter1Enabled: boolean;
  auxCounter2Enabled: boolean;
  auxCounter3Enabled: boolean;
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
  currencyCode: string;
}

export interface LedgerAccountItemPrepared extends LedgerAccountItemPlainPrepared {
  status: string | number;
  institutionId: string | number;
  statementCycle: string | number;
  product: string | number;
}

export interface LedgerAccountItemDetailsPrepared extends LedgerAccountItemPlainPrepared {
  status: SelectValues;
  institutionId: SelectValues;
  statementCycle: SelectValues;
  product: SelectValues;
  nrLoanCycles?: boolean;
  loanStartDate?: string;
}

export interface LedgerAccountsFilter extends LedgerAccountId {
  institutionId: SelectValues;
  firstName: string;
  lastName: string;
  product: Array<SelectValues>;
  accountAlias: string;
  accountAliasAdditional: string;
  id: number;
}

export interface LedgerAccountsFilterPrepared extends LedgerAccountId {
  institution_id: string | number;
  first_name: string;
  last_name: string;
  product: Array<string | number>;
  account_alias: string;
  account_alias_additional: string;
  id: number;
}

export interface LedgerAccountsCardsItem {
  pan_alias: string;
  pan_masked: string;
  expiry_date: string;
  card_status_name: string;
}

export interface LedgerAccountsCardsItemPrepared {
  panAlias: string;
  panMasked: string;
  expiryDate: string;
  cardStatus: string;
}

export interface LedgerAccountCardsItems {
  cards: Array<LedgerAccountsCardsItem>;
}

export interface LedgerAccountsState {
  accounts: ImmutableArray<LedgerAccountItem>;
  cards: ImmutableArray<LedgerAccountsCardsItem>;
}
