import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { preparedValuesDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.ledgerCustomers.customers;

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...prepareValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
    };
  })
);

export const selectLedgerCustomerCurrentId = (state: StoreState) =>
  state.ledger.ledgerCustomers.currentCustomerId;

export const selectLedgerCurrentCustomer = createSelector(
  selectLedgerCustomers,
  selectLedgerCustomerCurrentId,
  selectInstitutionsOptions,
  (customers, currentId, institutions) => {
    const current = customers.filter(el => el.id === currentId)[0];
    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === currentId),
    };
  }
);
