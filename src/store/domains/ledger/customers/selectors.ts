import { createSelector } from 'reselect';

import { IStoreState } from 'store';

import { countriesOptionsSelector } from 'store/domains/admin';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareCurrencyLimitToRender,
  prepareDataToRender,
  prepareDetailsToRender,
  prepareRepaymentDebitCardsToRender,
  prepareRepaymentDirectDebitsToRender,
} from './utils';

export const defaultCustomersSelector = (state: IStoreState) => state.ledger.customers.customers;

export const customersSelector = createSelector(
  defaultCustomersSelector,
  userInstitutionsOptionsSelector,
  (customers, institutions) => customers && customers.map(customer => {
    const institution = institutions.find(el => el.value === customer.institution_id);

    return prepareDataToRender(customer, institution);
  })
);

/**
 * Current customer selectors
 */

export const currentCustomerSelector = createSelector(
  defaultCustomersSelector,
  activeItemIdSelector,
  userInstitutionsOptionsSelector,
  countriesOptionsSelector,
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
      ...prepareDetailsToRender(current),
      institutionId,
      addressCountryCode,
      nationalityCountryCode,
    };
  }
);

export const currentCustomerNameSelector = createSelector(
  currentCustomerSelector,
  data => data && `${data.firstName} ${data.lastName}`
);

export const currentCustomerInstIdSelector = createSelector(
  currentCustomerSelector,
  data => data && data.institutionId.value
);

export const isLimitAtCustomerLevelSelector = createSelector(
  currentCustomerSelector,
  data => data && data.limitAtCustomerLevel
);

/**
 * Repayment debit cards selectors
 */

export const defaultRepaymentDebitCardsSelector = (state: IStoreState) =>
  state.ledger.customers.repaymentDebitCards;

export const repaymentDebitCardsSelector = createSelector(
  defaultRepaymentDebitCardsSelector,
  data => data && data.map(el => prepareRepaymentDebitCardsToRender(el))
);

/**
 * Repayment direct debit selectors
 */

export const defaultRepaymentDirectDebitsSelector = (state: IStoreState) =>
  state.ledger.customers.repaymentDirectDebits;

export const repaymentDirectDebitsSelector = createSelector(
  defaultRepaymentDirectDebitsSelector,
  data => data && data.map(el => prepareRepaymentDirectDebitsToRender(el))
);

/**
 * Currency limits selectors
 */

export const defaultCurrencyLimitSelector = (state: IStoreState) =>
  state.ledger.customers.currencyLimit;

export const currencyLimitSelector = createSelector(
  defaultCurrencyLimitSelector,
  data => prepareCurrencyLimitToRender(data)
);

export const currencyLimitLabelSelector = createSelector(
  defaultCurrencyLimitSelector,
  data => data && `${data.currency_name} (${data.currency_code})`
);

/**
 * Customers loading selectors
 */

export const isLoadingCustomersSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_CUSTOMERS,
]);

export const isDeletingCustomerSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_CUSTOMER,
]);

export const isUpdatingCustomerSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_CUSTOMER,
]);

export const isAddingCustomerSelector = createLoadingSelector([
  ActionTypeKeys.ADD_CUSTOMER,
]);

export const isGettingRepaymentDebitCardsSelector = createLoadingSelector([
  ActionTypeKeys.GET_REPAYMENT_DEBIT_CARDS,
]);

export const isAddingRepaymentDebitCardSelector = createLoadingSelector([
  ActionTypeKeys.ADD_REPAYMENT_DEBIT_CARD,
]);

export const isGettingRepaymentDirectDebitsSelector = createLoadingSelector([
  ActionTypeKeys.GET_REPAYMENT_DIRECT_DEBITS,
]);

export const isAddingRepaymentDirectDebitSelector = createLoadingSelector([
  ActionTypeKeys.ADD_REPAYMENT_DIRECT_DEBIT,
]);

export const isGettingCurrencyLimitSelector = createLoadingSelector([
  ActionTypeKeys.GET_CURRENCY_LIMIT,
]);

export const isUpdatingCurrencyLimitSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_CURRENCY_LIMIT,
]);
