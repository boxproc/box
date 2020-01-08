import { statusTypesOptions, yesNoTypesCodes } from 'consts';
import {
  LedgerAccountItem,
  LedgerAccountItemDetailsPrepared,
  LedgerAccountsCardsItem,
  LedgerAccountsFilter,
} from './types';

import { SelectValues } from 'types';

export const preparedFilterToSend = (data: Partial<LedgerAccountsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institutionId,
    firstName,
    lastName,
    accountAlias,
    accountAliasAdditional,
    product,
  } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    first_name: firstName ? firstName : null,
    last_name: lastName ? lastName : null,
    product: (product && product.length) ? product.map(name => name.value) : null,
    account_alias: accountAlias ? accountAlias : null,
    account_alias_additional: accountAliasAdditional ? accountAliasAdditional : null,
    id: id ? id : null,
  };
};

export const prepareDataToSend = (data: Partial<LedgerAccountItemDetailsPrepared>) => {
  if (!data) {
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
    product,
    numOfInstallments,
    numOfInterestFreeInstllmnts,
    nrLoanCycles,
    loanStartDate,
    balanceSettled,
    balanceAvailable,
    amountDueRepayment,
    balanceLimit,
    balanceLimitShared,
    accruedInterest,
    dateCreated,
    dateClosed,
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
    statementCycleRepaymentDay,
  } = data;

  return {
    id,
    status: status && status.value,
    account_alias: accountAlias,
    account_alias_additional: accountAliasAdditional,
    customer_id: Number(customerId),
    customer_first_name: firstName,
    customer_last_name: lastName,
    institution_id: institutionId && institutionId.value,
    product_id: product && product.value,
    product_name: product && product.label,
    num_of_installments: numOfInstallments ? Number(numOfInstallments) : null,
    num_of_interest_free_instllmnts: numOfInterestFreeInstllmnts
      ? Number(numOfInterestFreeInstllmnts)
      : null,
    nr_loan_cycles: nrLoanCycles,
    loan_start_date: loanStartDate,
    balance_settled: Number(balanceSettled),
    balance_available: Number(balanceAvailable),
    amount_due_repayment: Number(amountDueRepayment),
    balance_limit: Number(balanceLimit),
    balance_limit_shared: Number(balanceLimitShared),
    accrued_interest: Number(accruedInterest),
    date_created: dateCreated,
    date_closed: dateClosed,
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
    statement_cycle_repayment_day: statementCycleRepaymentDay && Number(statementCycleRepaymentDay),
  };
};

export const prepareDataToRender = (
  data: Partial<LedgerAccountItem>,
  institution?: SelectValues
) => {
  if (!data) {
    return null;
  }

  const {
    id,
    status,
    account_alias,
    customer_id,
    customer_first_name,
    customer_last_name,
    product_name,
    num_of_installments,
    num_of_interest_free_instllmnts,
    balance_settled,
    balance_available,
    amount_due_repayment,
    balance_limit,
    balance_limit_shared,
    accrued_interest,
    account_alias_additional,
    date_of_product_override,
    product_id,
    product_override_id,
    product_type,
    date_created,
    date_closed,
    last_cycle_date,
    aux_counter_1,
    aux_counter_2,
    aux_counter_3,
    aux_counter_1_description,
    aux_counter_2_description,
    aux_counter_3_description,
    aux_counter_1_enabled,
    aux_counter_2_enabled,
    aux_counter_3_enabled,
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
    currency_code,
    statement_cycle_repayment_day,
  } = data;

  const currentStatus = statusTypesOptions.find(el => el.value === status);

  return {
    id,
    institutionId: institution && institution.label,
    product: product_name,
    productOverrideFlag: product_override_id ? true : false,
    accountAlias: account_alias,
    customerId: customer_id,
    firstName: customer_first_name,
    lastName: customer_last_name,
    status: currentStatus && currentStatus.label,
    balanceSettled: balance_settled,
    balanceAvailable: balance_available,
    amountDueRepayment: amount_due_repayment,
    balanceLimit: balance_limit,
    balanceLimitShared: balance_limit_shared,
    accruedInterest: accrued_interest,
    accountAliasAdditional: account_alias_additional,
    productId: product_id,
    productOverrideId: product_override_id,
    dateOfProductOverride: date_of_product_override,
    productType: product_type,
    numOfInstallments: num_of_installments,
    numOfInterestFreeInstllmnts: num_of_interest_free_instllmnts,
    dateCreated: date_created,
    dateClosed: date_closed,
    lastCycleDate: last_cycle_date,
    currencyCode: currency_code,
    auxCounter1: aux_counter_1,
    auxCounter2: aux_counter_2,
    auxCounter3: aux_counter_3,
    auxCounter1Description: aux_counter_1_enabled === yesNoTypesCodes.YES
      ? aux_counter_1_description
      : 'Not Used',
    auxCounter2Description: aux_counter_2_enabled === yesNoTypesCodes.YES
      ? aux_counter_2_description
      : 'Not Used',
    auxCounter3Description: aux_counter_3_enabled === yesNoTypesCodes.YES
      ? aux_counter_3_description
      : 'Not Used',
    auxCounter1Enabled: aux_counter_1_enabled === yesNoTypesCodes.YES,
    auxCounter2Enabled: aux_counter_2_enabled === yesNoTypesCodes.YES,
    auxCounter3Enabled: aux_counter_3_enabled === yesNoTypesCodes.YES,
    amountOverdue: amount_overdue,
    amountOverdue1Cycle: amount_overdue_1_cycle,
    amountOverdue2Cycles: amount_overdue_2_cycles,
    amountOverdue3Cycles: amount_overdue_3_cycles,
    amountOverdue4Cycles: amount_overdue_4_cycles,
    amountOverdue5Cycles: amount_overdue_5_cycles,
    amountOverdue6Cycles: amount_overdue_6_cycles,
    amountOverdue7Cycles: amount_overdue_7_cycles,
    numberOfTimesOverdueTotal: number_of_times_overdue_total,
    numberOfTimesOverdue1Cycle: number_of_times_overdue_1_cycle,
    numberOfTimesOverdue2Cycles: number_of_times_overdue_2_cycle,
    numberOfTimesOverdue3Cycles: number_of_times_overdue_3_cycle,
    numberOfTimesOverdue4Cycles: number_of_times_overdue_4_cycle,
    numberOfTimesOverdue5Cycles: number_of_times_overdue_5_cycle,
    numberOfTimesOverdue6Cycles: number_of_times_overdue_6_cycle,
    numberOfTimesOverdue7Cycles: number_of_times_overdue_7_cycle,
    statementCycleRepaymentDay: statement_cycle_repayment_day,
  };
};

export const preparedAccountCardsToRender = (data: Partial<LedgerAccountsCardsItem>) => {
  if (!data) {
    return null;
  }

  const { card_status_name, pan_alias, pan_masked, expiry_date } = data;

  return {
    cardStatus: card_status_name,
    panAlias: pan_alias,
    panMasked: pan_masked,
    expiryDate: expiry_date,
  };
};

export const prepareDataDetailsToRender = (data: Partial<LedgerAccountItem>) => {
  if (!data) {
    return null;
  }

  const { status } = data;

  return {
    ...prepareDataToRender(data),
    status: statusTypesOptions.find(el => el.value === status),
  };
};
