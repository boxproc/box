import { createSelector } from 'reselect';

import { StoreState } from 'store';

import { selectCountriesOptions } from 'store/domains/administration';
import { selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import {
  prepareDataToRender,
  preparedDataDetailsToRender,
  prepareRepaymentDebitCardsToRender,
  prepareRepaymentDirectDebitsToRender,
} from './utils';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.customers.customers;

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  (items, institutions) => items && items.map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

export const selectLedgerCurrentCustomer = createSelector(
  selectDefaultLedgerCustomers,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectCountriesOptions,
  (customers, currentId, institutions, countries) => {
    const current = customers && customers.find(el => el.id === currentId);

    if (!current) {
      return null;
    }

    const institutionId = institutions.find(el => el.value === current.institution_id);
    const addressCountryCode = countries
      && countries.find(el => el.value === current.address_country_code);
    const nationalityCountryCode = countries
      && countries.find(el => el.value === current.nationality_country_code);

    return {
      ...preparedDataDetailsToRender(current),
      institutionId,
      addressCountryCode,
      nationalityCountryCode,
    };
  }
);

export const selectLedgerCurrentCustomerName = createSelector(
  selectLedgerCurrentCustomer,
  (customer) => customer && `${customer.firstName} ${customer.lastName}`
);

export const selectLedgerCurrentCustomerInstitutionId = createSelector(
  selectLedgerCurrentCustomer,
  (customer) => customer && customer.institutionId.value
);

export const selectDefaultRepaymentDebitCards = (state: StoreState) =>
  state.ledger.customers.repaymentDebitCards;

export const selectRepaymentDebitCards = createSelector(
  selectDefaultRepaymentDebitCards,
  items => items && items.map(item => prepareRepaymentDebitCardsToRender(item))
);

export const selectDefaultRepaymentDirectDebits = (state: StoreState) =>
  state.ledger.customers.repaymentDirectDebits;

export const selectRepaymentDirectDebits = createSelector(
  selectDefaultRepaymentDirectDebits,
  items => items && items.map(item => prepareRepaymentDirectDebitsToRender(item))
);
