import { LedgerAccountItemPrepared, LedgerAccountsFilterParams } from './types';

export const preparedFilterParamsToSend = (params: Partial<LedgerAccountsFilterParams>) => {
  if (!params) {
    return null;
  }

  const { institutionId, customerFirstName, customerLastName, accountAlias, productType } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    customer_first_name: customerFirstName ? customerFirstName : null,
    customer_last_name: customerLastName ? customerLastName : null,
    product_type: productType && productType.length ? productType.map(type => type.value) : null,
    account_alias: accountAlias ? accountAlias : null,
  };
};

export const preparedValuesToSend = (values: Partial<LedgerAccountItemPrepared>) => {
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
    product_name: values.productName,
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
