import { statementCyclesOptions, statusTypesOptions } from 'consts';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountItemPrepared,
  LedgerAccountsFilterParams,
} from './types';

export const preparedFilterParamsToSend = (params: Partial<LedgerAccountsFilterParams>) => {
  if (!params) {
    return null;
  }

  const {
    id,
    institutionId,
    customerFirstName,
    customerLastName,
    accountAlias,
    productName,
  } = params;

  return {
    institution_id: institutionId && Number(institutionId.value),
    customer_first_name: customerFirstName,
    customer_last_name: customerLastName,
    product_name: productName && productName.length && productName.map(name => name.label),
    account_alias: accountAlias,
    id: id && Number(id),
  };
};

export const preparedValuesToSend = (values: Partial<LedgerAccountItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    status: values.status && values.status.value,
    account_alias: values.accountAlias,
    account_alias_additional: values.accountAliasAdditional,
    customer_id: values.customerId,
    customer_first_name: values.customerFirstName,
    customer_last_name: values.customerLastName,
    institution_id: values.institutionId && values.institutionId.value,
    product_id: values.productId,
    product_name: values.productName && values.productName.value,
    balance_settled: values.balanceSettled,
    balance_available: values.balanceAvailable,
    amount_due_repayment: values.amountDueRepayment,
    balance_limit: values.balanceLimit,
    balance_limit_shared: values.balanceLimitShared,
    accrued_interest: values.accruedInterest,
    date_created: values.dateCreated,
    date_closed: values.dateClosed,
    statement_cycle_id: values.statementCycleId && values.statementCycleId.value,
    last_cycle_date: values.lastCycleDate,
    aux_counter_1: values.auxCounter1,
    aux_counter_2: values.auxCounter2,
    aux_counter_3: values.auxCounter3,
    amount_overdue: values.amountOverdue,
    amount_overdue_1_cycle: values.amountOverdue1Cycle,
    amount_overdue_2_cycles: values.amountOverdue2Cycles,
    amount_overdue_3_cycles: values.amountOverdue3Cycles,
    amount_overdue_4_cycles: values.amountOverdue4Cycles,
    amount_overdue_5_cycles: values.amountOverdue5Cycles,
    amount_overdue_6_cycles: values.amountOverdue6Cycles,
    amount_overdue_7_cycles: values.amountOverdue7Cycles,
    number_of_times_overdue_total: values.numberOfTimesOverdueTotal,
    number_of_times_overdue_1_cycle: values.numberOfTimesOverdue1Cycle,
    number_of_times_overdue_2_cycles: values.numberOfTimesOverdue2Cycles,
    number_of_times_overdue_3_cycles: values.numberOfTimesOverdue3Cycles,
    number_of_times_overdue_4_cycles: values.numberOfTimesOverdue4Cycles,
    number_of_times_overdue_5_cycles: values.numberOfTimesOverdue5Cycles,
    number_of_times_overdue_6_cycles: values.numberOfTimesOverdue6Cycles,
    number_of_times_overdue_7_cycles: values.numberOfTimesOverdue7Cycles,
  };
};

export const preparedValuesToRender = (values: Partial<LedgerAccountItem>) => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    status: statusTypesOptions.find(el => el.value === values.status).label,
    accountAlias: values.account_alias,
    accountAliasAdditional: values.account_alias_additional,
    customerId: values.customer_id,
    customerFirstName: values.customer_first_name,
    customerLastName: values.customer_last_name,
    productId: values.product_id,
    productName: values.product_name,
    balanceSettled: values.balance_settled,
    balanceAvailable: values.balance_available,
    amountDueRepayment: values.amount_due_repayment,
    balanceLimit: values.balance_limit,
    balanceLimitShared: values.balance_limit_shared,
    accruedInterest: values.accrued_interest,
    dateCreated: values.date_created,
    dateClosed: values.date_closed,
    statementCycleId: statementCyclesOptions
      .find(el => el.value === values.statement_cycle_id).label,
    lastCycleDate: values.last_cycle_date,
    auxCounter1: values.aux_counter_1,
    auxCounter2: values.aux_counter_2,
    auxCounter3: values.aux_counter_3,
    amountOverdue: values.amount_overdue,
    amountOverdue1Cycle: values.amount_overdue_1_cycle,
    amountOverdue2Cycles: values.amount_overdue_2_cycles,
    amountOverdue3Cycles: values.amount_overdue_3_cycles,
    amountOverdue4Cycles: values.amount_overdue_4_cycles,
    amountOverdue5Cycles: values.amount_overdue_5_cycles,
    amountOverdue6Cycles: values.amount_overdue_6_cycles,
    amountOverdue7Cycles: values.amount_overdue_7_cycles,
    numberOfTimesOverdueTotal: values.number_of_times_overdue_total,
    numberOfTimesOverdue1Cycle: values.number_of_times_overdue_1_cycle,
    numberOfTimesOverdue2Cycles: values.number_of_times_overdue_2_cycles,
    numberOfTimesOverdue3Cycles: values.number_of_times_overdue_3_cycles,
    numberOfTimesOverdue4Cycles: values.number_of_times_overdue_4_cycles,
    numberOfTimesOverdue5Cycles: values.number_of_times_overdue_5_cycles,
    numberOfTimesOverdue6Cycles: values.number_of_times_overdue_6_cycles,
    numberOfTimesOverdue7Cycles: values.number_of_times_overdue_7_cycles,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<LedgerAccountItemPrepared>) => {
  if (!values) {
    return null;
  }

  return {
    ...values,
    status: statusTypesOptions.find(el => el.label === values.status),
    statementCycleId: statementCyclesOptions
      .find(el => el.value === values.statementCycleId),
  };
};
