import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';

import { statementCyclesOptions, statusTypesOptions } from 'consts';

export const selectDefaultLedgerAccounts = (state: StoreState) =>
  state.ledger.ledgerAccounts.accounts;

export const selectLedgerAccounts = createSelector(
  selectDefaultLedgerAccounts,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      id: item.id,
      status: statusTypesOptions.find(el => el.value === item.status).label,
      institutionId: institutions.find(el => el.value === item.institution_id).label,
      accountAlias: item.account_alias,
      accountAliasAdditional: item.account_alias_additional,
      customerId: item.customer_id,
      customerFirstName: item.customer_first_name,
      customerLastName: item.customer_last_name,
      productId: item.product_id,
      productName: item.product_name,
      balanceSettled: item.balance_settled,
      balanceAvailable: item.balance_available,
      amountDueRepayment: item.amount_due_repayment,
      balanceLimit: item.balance_limit,
      balanceLimitShared: item.balance_limit_shared,
      accruedInterest: item.accrued_interest,
      dateCreated: item.date_created,
      dateClosed: item.date_closed,
      statementCycleId: statementCyclesOptions
        .find(el => el.value === item.statement_cycle_id).label,
      lastCycleDate: item.last_cycle_date,
      auxCounter1: item.aux_counter_1,
      auxCounter2: item.aux_counter_2,
      auxCounter3: item.aux_counter_3,
      amountOverdue: item.amount_overdue,
      amountOverdue1Cycle: item.amount_overdue_1_cycle,
      amountOverdue2Cycles: item.amount_overdue_2_cycles,
      amountOverdue3Cycles: item.amount_overdue_3_cycles,
      amountOverdue4Cycles: item.amount_overdue_4_cycles,
      amountOverdue5Cycles: item.amount_overdue_5_cycles,
      amountOverdue6Cycles: item.amount_overdue_6_cycles,
      amountOverdue7Cycles: item.amount_overdue_7_cycles,
      numberOfTimesOverdueTotal: item.number_of_times_overdue_total,
      numberOfTimesOverdue1Cycle: item.number_of_times_overdue_1_cycle,
      numberOfTimesOverdue2Cycles: item.number_of_times_overdue_2_cycles,
      numberOfTimesOverdue3Cycles: item.number_of_times_overdue_3_cycles,
      numberOfTimesOverdue4Cycles: item.number_of_times_overdue_4_cycles,
      numberOfTimesOverdue5Cycles: item.number_of_times_overdue_5_cycles,
      numberOfTimesOverdue6Cycles: item.number_of_times_overdue_6_cycles,
      numberOfTimesOverdue7Cycles: item.number_of_times_overdue_7_cycles,
    };
  })
);

export const selectLedgerAccountCurrentId = (state: StoreState) =>
  state.ledger.ledgerAccounts.currentAccountId;

export const selectLedgerCurrentAccount = createSelector(
  selectLedgerAccounts,
  selectLedgerAccountCurrentId,
  selectInstitutionsOptions,
  (accounts, currentId, institutions) => {
    const current = accounts.filter(el => el.id === currentId)[0];
    return {
      ...current,
      institutionId: institutions.find(el => el.value === currentId),
      status: statusTypesOptions.find(el => el.label === current.status),
    };
  }
);
