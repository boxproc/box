
import { ImmutableArray } from 'seamless-immutable';

import { ILimitAdjustmentResultData } from './typesLimitAdj';
import { IManualTransactionResultData } from './typesManualTr';

import { ISelectValue } from 'types';

export interface IAccountData {
  account_alias_additional: string;
  account_alias: string;
  accrued_interest: number;
  amount_overdue_1_cycle: number;
  amount_overdue_2_cycles: number;
  amount_overdue_3_cycles: number;
  amount_overdue_4_cycles: number;
  amount_overdue_5_cycles: number;
  amount_overdue_6_cycles: number;
  amount_overdue_7_cycles: number;
  amount_overdue: number;
  aux_counter_1_description: string;
  aux_counter_1_enabled: string;
  aux_counter_1: number;
  aux_counter_2_description: string;
  aux_counter_2_enabled: string;
  aux_counter_2: number;
  aux_counter_3_description: string;
  aux_counter_3_enabled: string;
  aux_counter_3: number;
  balance_available: number;
  balance_limit_shared: number;
  balance_limit: number;
  balance_settled: number;
  currency_code: string;
  currency_numeric_code: number;
  customer_first_name: string;
  customer_id: number;
  customer_last_name: string;
  date_closed: string;
  date_created: string;
  date_of_product_override?: string;
  id: number;
  institution_id: number | string;
  last_cycle_date: string;
  start_loan_date: string;
  num_of_installments: number;
  num_of_interest_free_instllmnts: number;
  num_deferred_instlmts: number;
  number_of_times_overdue_1_cycle: number;
  number_of_times_overdue_2_cycle: number;
  number_of_times_overdue_3_cycle: number;
  number_of_times_overdue_4_cycle: number;
  number_of_times_overdue_5_cycle: number;
  number_of_times_overdue_6_cycle: number;
  number_of_times_overdue_7_cycle: number;
  number_of_times_overdue_total: number;
  product_id: number | string;
  product_name: string | number;
  product_override_id?: number;
  product_type: string;
  repayment_amount_due: number;
  repayment_type: number | string;
  repayment_method: number | string;
  direct_debit_mandate_id?: number | string;
  statement_cycle_parameter: number;
  status_name: string;
  status: string | number;
  total_overdue_amount: number;
}

export interface IAccountsData {
  accounts: Array<IAccountData>;
}

interface IAccountPlain {
  accountAlias: string;
  accountAliasAdditional: string;
  accruedInterest: number;
  amountOverdue: number;
  amountOverdue1Cycle: number;
  amountOverdue2Cycles: number;
  amountOverdue3Cycles: number;
  amountOverdue4Cycles: number;
  amountOverdue5Cycles: number;
  amountOverdue6Cycles: number;
  amountOverdue7Cycles: number;
  auxCounter1: number;
  auxCounter1Description: string;
  auxCounter1Enabled: boolean;
  auxCounter2: number;
  auxCounter2Description: string;
  auxCounter2Enabled: boolean;
  auxCounter3: number;
  auxCounter3Description: string;
  auxCounter3Enabled: boolean;
  balanceAvailable: number;
  balanceLimit: number;
  balanceLimitShared: number;
  balanceSettled: number;
  currencyCode: string;
  currencyNumericCode: number;
  customerId: number;
  dateClosed: string;
  dateCreated: string;
  dateOfProductOverride?: string;
  firstName: string;
  id: number;
  lastCycleDate: string;
  lastName: string;
  numberOfTimesOverdue1Cycle: number;
  numberOfTimesOverdue2Cycles: number;
  numberOfTimesOverdue3Cycles: number;
  numberOfTimesOverdue4Cycles: number;
  numberOfTimesOverdue5Cycles: number;
  numberOfTimesOverdue6Cycles: number;
  numberOfTimesOverdue7Cycles: number;
  numberOfTimesOverdueTotal: number;
  numOfInstallments: number;
  numOfInterestFreeInstllmnts: number;
  numDeferredInstlmts: number;
  productId: number | string;
  productOverrideFlag?: boolean;
  productOverrideId?: number;
  repaymentAmountDue: number;
  statementCycleRepaymentDay: number;
  statusName: string;
  totalOverdueAmount: number;
}

export interface IAccount extends IAccountPlain {
  institutionId: string | number;
  product: string | number;
  status: string | number;
}

export interface IAccountDetails extends IAccountPlain {
  institutionId: ISelectValue;
  loanStartDate?: string;
  product: ISelectValue;
  repaymentType: ISelectValue;
  repaymentMethod: ISelectValue;
  directDebitMandateId?: ISelectValue;
  status: ISelectValue;
}

/** Accounts filter interfaces */

export interface IAccountsFilter {
  accountAlias: string;
  accountAliasAdditional: string;
  accountId: number;
  firstName: string;
  institutionId: ISelectValue;
  lastName: string;
  product: Array<ISelectValue>;
}

export interface IAccountsFilterToSend {
  account_alias_additional: string;
  account_alias: string;
  first_name: string;
  id: number;
  institution_id: string | number;
  last_name: string;
  product: Array<string | number>;
}

/** Account cards interfaces */

export interface IAccountCardData {
  card_status_name: string;
  expiry_date: string;
  pan_alias: string;
  pan_masked: string;
}

export interface IAccountCardsData {
  cards: Array<IAccountCardData>;
}

export interface IAccountCard {
  cardStatus: string;
  expiryDate: string;
  panAlias: string;
  panMasked: string;
}

/** Account state interface */
export interface IAccountsState {
  accounts: ImmutableArray<IAccountData>;
  cards: ImmutableArray<IAccountCardData>;
  manualTrResult: ImmutableArray<IManualTransactionResultData>;
  limitAdjResult: ImmutableArray<ILimitAdjustmentResultData>;
}
