import { yesNoConst } from 'consts';
import {
  IAccountCardData,
  IAccountData,
  IAccountDetails,
  IAccountsFilter,
} from './types';

import { ISelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareFilterToSend = (data: Partial<IAccountsFilter>) => {
  if (!data) {
    return null;
  }

  const {
    accountId,
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
    id: accountId ? stringsUtil.toNumber(accountId) : null,
  };
};

export const prepareFilterToSet = (data: Partial<IAccountData>): Partial<IAccountsFilter> => {
  if (!data) {
    return null;
  }

  const { customer_first_name, customer_last_name } = data;

  return {
    firstName: customer_first_name,
    lastName: customer_last_name,
  };
};

export const prepareDataToSend = (data: Partial<IAccountDetails>) => {
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
    numDeferredInstlmts,
    loanStartDate,
    balanceSettled,
    balanceAuthorised,
    repaymentAmountDue,
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
    numberOfTimeOverdueCycles,
    statementCycleRepaymentDay,
    directDebitMandateId,
  } = data;

  return {
    id,
    status: status && status.value,
    account_alias: accountAlias,
    account_alias_additional: accountAliasAdditional,
    customer_id: stringsUtil.toNumber(customerId),
    customer_first_name: firstName,
    customer_last_name: lastName,
    institution_id: institutionId && institutionId.value,
    product_id: product && product.value,
    product_name: product && product.label,
    num_of_installments: stringsUtil.toNumber(numOfInstallments),
    num_of_interest_free_instllmnts: stringsUtil.toNumber(numOfInterestFreeInstllmnts),
    num_deferred_instlmts: stringsUtil.toNumber(numDeferredInstlmts),
    loan_start_date: loanStartDate,
    balance_settled: stringsUtil.toNumber(balanceSettled),
    balance_authorised: stringsUtil.toNumber(balanceAuthorised),
    repayment_amount_due: stringsUtil.toNumber(repaymentAmountDue),
    balance_limit: stringsUtil.toNumber(balanceLimit),
    balance_limit_shared: stringsUtil.toNumber(balanceLimitShared),
    accrued_interest: stringsUtil.toNumber(accruedInterest),
    date_created: dateCreated,
    date_closed: dateClosed,
    last_cycle_date: lastCycleDate,
    aux_counter_1: stringsUtil.toNumber(auxCounter1),
    aux_counter_2: stringsUtil.toNumber(auxCounter2),
    aux_counter_3: stringsUtil.toNumber(auxCounter3),
    amount_overdue: stringsUtil.toNumber(amountOverdue),
    number_of_time_overdue_cycles: stringsUtil.toNumber(numberOfTimeOverdueCycles),
    statement_cycle_repayment_day: stringsUtil.toNumber(statementCycleRepaymentDay),
    direct_debit_mandate_id: directDebitMandateId ? directDebitMandateId.value : null,
  };
};

export const prepareDataToRender = (data: Partial<IAccountData>, institution?: ISelectValue) => {
  if (!data) {
    return null;
  }

  const {
    id,
    account_alias,
    customer_id,
    customer_first_name,
    customer_last_name,
    product_name,
    num_of_installments,
    num_of_interest_free_instllmnts,
    num_deferred_instlmts,
    start_loan_date,
    balance_settled,
    balance_authorised,
    repayment_amount_due,
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
    total_overdue_amount,
    number_of_time_overdue_cycles,
    currency_code,
    currency_numeric_code,
    statement_cycle_repayment_day,
    status_name,
  } = data;

  return {
    id,
    institutionId: institution && institution.label,
    product: product_name,
    productOverrideFlag: product_override_id ? true : false,
    accountAlias: account_alias,
    customerId: customer_id,
    firstName: customer_first_name,
    lastName: customer_last_name,
    status: status_name,
    balanceSettled: stringsUtil.numberToFixed(balance_settled, 2),
    balanceAuthorised: stringsUtil.numberToFixed(balance_authorised, 2),
    repaymentAmountDue: stringsUtil.numberToFixed(repayment_amount_due, 2),
    balanceLimit: stringsUtil.numberToFixed(balance_limit, 2),
    balanceLimitShared: stringsUtil.numberToFixed(balance_limit_shared, 2),
    accruedInterest: stringsUtil.numberToFixed(accrued_interest, 2),
    accountAliasAdditional: account_alias_additional,
    productId: product_id,
    productOverrideId: product_override_id,
    dateOfProductOverride: date_of_product_override,
    productType: product_type,
    numOfInstallments: num_of_installments,
    numOfInterestFreeInstllmnts: num_of_interest_free_instllmnts,
    numDeferredInstlmts: num_deferred_instlmts,
    loanStartDate: start_loan_date,
    dateCreated: date_created,
    dateClosed: date_closed,
    lastCycleDate: last_cycle_date,
    currencyCode: currency_code,
    currencyNumericCode: currency_numeric_code,
    auxCounter1: stringsUtil.numberToFixed(aux_counter_1, 2),
    auxCounter2: stringsUtil.numberToFixed(aux_counter_2, 2),
    auxCounter3: stringsUtil.numberToFixed(aux_counter_3, 2),
    auxCounter1Description: aux_counter_1_enabled === yesNoConst.YES
      ? aux_counter_1_description
      : 'Not Used',
    auxCounter2Description: aux_counter_2_enabled === yesNoConst.YES
      ? aux_counter_2_description
      : 'Not Used',
    auxCounter3Description: aux_counter_3_enabled === yesNoConst.YES
      ? aux_counter_3_description
      : 'Not Used',
    auxCounter1Enabled: aux_counter_1_enabled === yesNoConst.YES,
    auxCounter2Enabled: aux_counter_2_enabled === yesNoConst.YES,
    auxCounter3Enabled: aux_counter_3_enabled === yesNoConst.YES,
    amountOverdue: stringsUtil.numberToFixed(amount_overdue, 2),
    totalOverdueAmount: stringsUtil.numberToFixed(total_overdue_amount, 2),
    numberOfTimeOverdueCycles: number_of_time_overdue_cycles,
    statementCycleRepaymentDay: statement_cycle_repayment_day,
  };
};

export const prepareCardsToRender = (data: Partial<IAccountCardData>) => {
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

export const prepareDetailsToRender = (data: Partial<IAccountData>) => {
  if (!data) {
    return null;
  }

  const {
    status,
    status_name,
  } = data;

  return {
    ...prepareDataToRender(data),
    status: { value: status, label: status_name },
  };
};
