import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectCountryCodes, selectInstitutionsOptions } from 'store/domains/consts';
import { preparedValuesDetailsToRender, prepareValuesToRender } from './utils';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.customers.customers;

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  selectCountryCodes,
  (items, institutions, countries) => items && items.asMutable().map(item => {

    return {
      ...prepareValuesToRender(item),
      institutionId: institutions.find(el => el.value === item.institution_id).label,
      addressCountryCode: countries.find(el => el.value === item.address_country_code),
      nationalityCountryCode: countries.find(el => el.value === item.address_country_code),
    };
  })
);

export const selectLedgerCustomerCurrentId = (state: StoreState) =>
  state.ledger.customers.currentCustomerId;

export const selectLedgerCurrentCustomer = createSelector(
  selectDefaultLedgerCustomers,
  selectLedgerCustomerCurrentId,
  selectInstitutionsOptions,
  selectCountryCodes,
  (customers, currentId, institutions, countries) => {
    const current = customers && customers.asMutable().find(el => el.id === currentId);

    if (!current) {
      return null;
    }

    return {
      ...preparedValuesDetailsToRender(current),
      institutionId: institutions.find(el => el.value === current.institution_id),
      addressCountryCode: countries.find(el => el.value === current.address_country_code),
      nationalityCountryCode: countries.find(el => el.value === current.address_country_code),
    };
  }
);

export const selectLedgerCurrentCustomerName = createSelector(
  selectLedgerCurrentCustomer,
  (customer) => customer && `${customer.firstName} ${customer.lastName}`
);
