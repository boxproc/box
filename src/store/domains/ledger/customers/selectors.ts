import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { selectInstitutionsOptions } from 'store/domains/consts';

export const selectDefaultLedgerCustomers = (state: StoreState) =>
  state.ledger.ledgerCustomers.customers;

export const selectLedgerCustomers = createSelector(
  selectDefaultLedgerCustomers,
  selectInstitutionsOptions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      id: item.id,
      institutionId: institutions.find(el => el.value === item.institution_id).label,
      firstName: item.first_name,
      lastName: item.last_name,
      status: item.status,
      dateOfBirth: item.date_of_birth,
      email: item.email,
      mobilePhoneNumber: item.mobile_phone_number,
      addressLine1: item.address_line_1,
      addressLine2: item.address_line_2,
      addressLine3: item.address_line_3,
      addressLine4: item.address_line_4,
      addressTown: item.address_town,
      addressPostCode: item.address_post_code,
      addressCountryCode: item.address_country_code,
      nationalityCountryCode: item.nationality_country_code,
      dateCreated: item.date_created,
      dateClosed: item.date_closed,
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
      ...current,
      institutionId: institutions.find(el => el.value === currentId),
    };
  }
);
