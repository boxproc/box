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
  prepareDirectDebitAccountsToRender,
  prepareDirectDebitMandatesToRender,
  prepareRepaymentDebitCardsToRender,
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

export const currentCustomerCountryCodeSelector = createSelector(
  currentCustomerSelector,
  data => data && data.addressCountryCode.value
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
 * Direct debit account selectors
 */

export const defaultDirectDebitAccountsSelector = (state: IStoreState) =>
  state.ledger.customers.directDebitAccounts;

export const directDebitsAccountsSelector = createSelector(
  defaultDirectDebitAccountsSelector,
  data => data && data.map(el => prepareDirectDebitAccountsToRender(el))
);

/**
 * Direct debit mandates selectors
 */

export const defaultDirectDebitMandatesSelector = (state: IStoreState) =>
  state.ledger.customers.directDebitMandates;

export const directDebitsMandatesSelector = createSelector(
  defaultDirectDebitMandatesSelector,
  data => data && data.map(el => prepareDirectDebitMandatesToRender(el))
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
  ActionTypeKeys.FILTER_CUSTOMERS_BY_ID,
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

export const isGettingDirectDebitAccountsSelector = createLoadingSelector([
  ActionTypeKeys.GET_DIRECT_DEBIT_ACCOUNTS,
]);

export const isAddingDirectDebitAccountSelector = createLoadingSelector([
  ActionTypeKeys.ADD_DIRECT_DEBIT_ACCOUNT,
]);

export const isGettingDirectDebitMandatesSelector = createLoadingSelector([
  ActionTypeKeys.GET_DIRECT_DEBIT_MANDATES,
]);

export const isAddingDirectDebitMandateSelector = createLoadingSelector([
  ActionTypeKeys.ADD_DIRECT_DEBIT_MANDATE,
]);

export const isGettingCurrencyLimitSelector = createLoadingSelector([
  ActionTypeKeys.GET_CURRENCY_LIMIT,
]);

export const isUpdatingCurrencyLimitSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_CURRENCY_LIMIT,
]);
