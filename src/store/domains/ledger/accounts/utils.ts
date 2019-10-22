import { statusTypesOptions } from 'consts';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsCardsItem,
  LedgerAccountsFilter,
} from './types';

export const preparedFilterToSend = (params: Partial<LedgerAccountsFilter>) => {
  if (!params) {
    return null;
  }

  const {
    id,
    institutionId,
    firstName,
    lastName,
    accountAlias,
    product,
  } = params;

  return {
    institution_id: institutionId ? institutionId.value : null,
    first_name: firstName ? firstName : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
    account_alias: accountAlias ? accountAlias : null,
    id: id ? id : null,
  };
};

export const preparedValuesToSend = (values: Partial<LedgerAccountItemDetailsPrepared>) => {
  if (!values) {
    return null;
  }

  const {
    id,
    status,
    accountAlias,
    accountAliasAdditional,
    customerId,
    firstName,
    lastName,
    institutionId,
    productName,
    balanceSettled,
    balanceAvailable,
    amountDueRepayment,
    balanceLimit,
    balanceLimitShared,
    accruedInterest,
    dateCreated,
    dateClosed,
    statementCycle,
    lastCycleDate,
    auxCounter1,
    auxCounter2,
    auxCounter3,
    amountOverdue,
    amountOverdue1Cycle,
    amountOverdue2Cycles,
    amountOverdue3Cycles,
    amountOverdue4Cycles,
    amountOverdue5Cycles,
    amountOverdue6Cycles,
    amountOverdue7Cycles,
    numberOfTimesOverdueTotal,
    numberOfTimesOverdue1Cycle,
    numberOfTimesOverdue2Cycles,
    numberOfTimesOverdue3Cycles,
    numberOfTimesOverdue4Cycles,
    numberOfTimesOverdue5Cycles,
    numberOfTimesOverdue6Cycles,
    numberOfTimesOverdue7Cycles,
  } = values;

  return {
    id,
    status: status && status.value,
    account_alias: accountAlias,
    account_alias_additional: accountAliasAdditional,
    customer_id: Number(customerId),
    customer_first_name: firstName,
    customer_last_name: lastName,
    institution_id: institutionId && institutionId.value,
    product_id: productName && productName.value,
    product_name: productName && productName.label,
    balance_settled: Number(balanceSettled),
    balance_available: Number(balanceAvailable),
    amount_due_repayment: Number(amountDueRepayment),
    balance_limit: Number(balanceLimit),
    balance_limit_shared: Number(balanceLimitShared),
    accrued_interest: Number(accruedInterest),
    date_created: dateCreated,
    date_closed: dateClosed,
    statement_cycle_id: statementCycle && statementCycle.value,
    last_cycle_date: lastCycleDate,
    aux_counter_1: Number(auxCounter1),
    aux_counter_2: Number(auxCounter2),
    aux_counter_3: Number(auxCounter3),
    amount_overdue: Number(amountOverdue),
    amount_overdue_1_cycle: Number(amountOverdue1Cycle),
    amount_overdue_2_cycles: Number(amountOverdue2Cycles),
    amount_overdue_3_cycles: Number(amountOverdue3Cycles),
    amount_overdue_4_cycles: Number(amountOverdue4Cycles),
    amount_overdue_5_cycles: Number(amountOverdue5Cycles),
    amount_overdue_6_cycles: Number(amountOverdue6Cycles),
    amount_overdue_7_cycles: Number(amountOverdue7Cycles),
    number_of_times_overdue_total: Number(numberOfTimesOverdueTotal),
    number_of_times_overdue_1_cycle: Number(numberOfTimesOverdue1Cycle),
    number_of_times_overdue_2_cycle: Number(numberOfTimesOverdue2Cycles),
    number_of_times_overdue_3_cycle: Number(numberOfTimesOverdue3Cycles),
    number_of_times_overdue_4_cycle: Number(numberOfTimesOverdue4Cycles),
    number_of_times_overdue_5_cycle: Number(numberOfTimesOverdue5Cycles),
    number_of_times_overdue_6_cycle: Number(numberOfTimesOverdue6Cycles),
    number_of_times_overdue_7_cycle: Number(numberOfTimesOverdue7Cycles),
  };
};

export const preparedValuesToRender = (values: Partial<LedgerAccountItem>) => {
  if (!values) {
    return null;
  }

  const {
    id,
    status,
    account_alias,
    account_alias_additional,
    customer_id,
    customer_first_name,
    customer_last_name,
    date_of_product_override,
    product_id,
    product_override_id,
    product_name,
    balance_settled,
    balance_available,
    amount_due_repayment,
    balance_limit,
    balance_limit_shared,
    accrued_interest,
    date_created,
    date_closed,
    statement_cycle_description,
    last_cycle_date,
    aux_counter_1,
    aux_counter_2,
    aux_counter_3,
    amount_overdue,
    amount_overdue_1_cycle,
    amount_overdue_2_cycles,
    amount_overdue_3_cycles,
    amount_overdue_4_cycles,
    amount_overdue_5_cycles,
    amount_overdue_6_cycles,
    amount_overdue_7_cycles,
    number_of_times_overdue_total,
    number_of_times_overdue_1_cycle,
    number_of_times_overdue_2_cycle,
    number_of_times_overdue_3_cycle,
    number_of_times_overdue_4_cycle,
    number_of_times_overdue_5_cycle,
    number_of_times_overdue_6_cycle,
    number_of_times_overdue_7_cycle,
  } = values;

  const currentStatus = statusTypesOptions.find(el => el.value === status);

  return {
    id,
    status: currentStatus && currentStatus.label,
    accountAlias: account_alias,
    accountAliasAdditional: account_alias_additional,
    customerId: customer_id,
    firstName: customer_first_name,
    lastName: customer_last_name,
    productId: product_id,
    productOverrideId: product_override_id,
    productOverrideFlag: product_override_id ? true : false,
    dateOfProductOverride: date_of_product_override,
    productName: product_name,
    balanceSettled: balance_settled && balance_settled.toFixed(2),
    balanceAvailable: balance_available && balance_available.toFixed(2),
    amountDueRepayment: amount_due_repayment && amount_due_repayment.toFixed(2),
    balanceLimit: balance_limit && balance_limit.toFixed(2),
    balanceLimitShared: balance_limit_shared && balance_limit_shared.toFixed(2),
    accruedInterest: accrued_interest && accrued_interest.toFixed(2),
    dateCreated: date_created,
    dateClosed: date_closed,
    statementCycle: statement_cycle_description,
    lastCycleDate: last_cycle_date,
    auxCounter1: aux_counter_1 && aux_counter_1.toFixed(2),
    auxCounter2: aux_counter_2 && aux_counter_2.toFixed(2),
    auxCounter3: aux_counter_3 && aux_counter_3.toFixed(2),
    amountOverdue: amount_overdue && amount_overdue.toFixed(2),
    amountOverdue1Cycle: amount_overdue_1_cycle && amount_overdue_1_cycle.toFixed(2),
    amountOverdue2Cycles: amount_overdue_2_cycles && amount_overdue_2_cycles.toFixed(2),
    amountOverdue3Cycles: amount_overdue_3_cycles && amount_overdue_3_cycles.toFixed(2),
    amountOverdue4Cycles: amount_overdue_4_cycles && amount_overdue_4_cycles.toFixed(2),
    amountOverdue5Cycles: amount_overdue_5_cycles && amount_overdue_5_cycles.toFixed(2),
    amountOverdue6Cycles: amount_overdue_6_cycles && amount_overdue_6_cycles.toFixed(2),
    amountOverdue7Cycles: amount_overdue_7_cycles && amount_overdue_7_cycles.toFixed(2),
    numberOfTimesOverdueTotal: number_of_times_overdue_total,
    numberOfTimesOverdue1Cycle: number_of_times_overdue_1_cycle,
    numberOfTimesOverdue2Cycles: number_of_times_overdue_2_cycle,
    numberOfTimesOverdue3Cycles: number_of_times_overdue_3_cycle,
    numberOfTimesOverdue4Cycles: number_of_times_overdue_4_cycle,
    numberOfTimesOverdue5Cycles: number_of_times_overdue_5_cycle,
    numberOfTimesOverdue6Cycles: number_of_times_overdue_6_cycle,
    numberOfTimesOverdue7Cycles: number_of_times_overdue_7_cycle,
  };
};
export const preparedAccountCardsToRender = (values: Partial<LedgerAccountsCardsItem>) => {
  if (!values) {
    return null;
  }

  const { card_status_name, pan_alias, pan_masked, expiry_date } = values;

  return {
    cardStatus: card_status_name,
    panAlias: pan_alias,
    panMasked: pan_masked,
    expiryDate: expiry_date,
  };
};

export const preparedValuesDetailsToRender = (values: Partial<LedgerAccountItem>) => {
  if (!values) {
    return null;
  }

  const { status } = values;

  return {
    ...preparedValuesToRender(values),
    status: statusTypesOptions.find(el => el.value === status),
  };
};
