import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectCountryCodesOptions } from 'store/domains/administration';
import { selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import {
  prepareDataToRender,
  preparedDataDetailsToRender,
  prepareRepaymentDebitCardsToRender,
} from './utils';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.customers.customers;

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    const institution = institutions.find(el => el.value === item.institution_id);

    return prepareDataToRender(item, institution);
  })
);

export const selectLedgerCurrentCustomer = createSelector(
  selectDefaultLedgerCustomers,
  selectActiveItemId,
  selectInstitutionsOptions,
  selectCountryCodesOptions,
  (customers, currentId, institutions, countries) => {
    const current = customers && customers.asMutable().find(el => el.id === currentId);

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

export const selectDefaultRepaymentDebitCards = (state: StoreState) =>
  state.ledger.customers.repaymentDebitCards;

export const selectRepaymentDebitCards = createSelector(
  selectDefaultRepaymentDebitCards,
  items => items && items.asMutable().map(item => prepareRepaymentDebitCardsToRender(item))
);
