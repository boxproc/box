import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';
import { preparedValuesDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.ledgerCustomers.customers.asMutable();

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
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
    const current = customers.find(el => el.id === currentId);

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.label === current.institutionId),
    };
  }
);
