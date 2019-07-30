import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodes,
  selectDefaultInstitutions,
  selectInstitutionsOptions,
} from 'store/domains/consts';

import {
  preparedDebit,
  preparedGeneralProductItem,
  preparedGeneralProductValues,
  preparedLoan,
  preparedPrepaid,
  preparedRevolvingCredit,
  preparedSavings,
  prepareProductFiltersParams,
} from './utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  selectDefaultInstitutions,
  selectCurrencyCodes,
  (items, institutions, currencyCodes) => items && items.asMutable().map(item => {
    return {
      ...preparedGeneralProductItem(item),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === item.currency_code)
        && currencyCodes.find(el => el.label === item.currency_code).label,
      institutionId: institutions.find(el => el.id === item.institution_id)
        && institutions.find(el => el.id === item.institution_id).name,
    };
  })
);

export const selectCurrentProductId = (state: StoreState) =>
  state.productDesigner.products.currentProductId;

export const selectDefaultFilterProductParams = (state: StoreState) =>
  state.productDesigner.products.filterProductsParams;

export const selectFilterProductParams = createSelector(
  selectDefaultFilterProductParams,
  selectInstitutionsOptions,
  (params, institutions) => {
    if (!params) {
      return null;
    }
    return {
      institutionId: institutions.find(institution => institution.value === params.institution_id),
      ...prepareProductFiltersParams(params),
    };
  }
);

export const selectDefaultDebitProduct = (state: StoreState) =>
  state.productDesigner.products.debitProduct;

export const selectDebitProduct = createSelector(
  selectDefaultDebitProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...preparedGeneralProductValues(product),
      institutionId: institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code),
      ...preparedDebit(product),
    };
  }
);

export const selectDefaultLoanProduct = (state: StoreState) =>
  state.productDesigner.products.loanProduct;

export const selectLoanProduct = createSelector(
  selectDefaultLoanProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...preparedGeneralProductValues(product),
      institutionId: institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code),
      ...preparedLoan(product),
    };
  }
);

export const selectDefaultPrepaidProduct = (state: StoreState) =>
  state.productDesigner.products.prepaidProduct;

export const selectPrepaidProduct = createSelector(
  selectDefaultPrepaidProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...preparedGeneralProductValues(product),
      institutionId: institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code),
      ...preparedPrepaid(product),
    };
  }
);

export const selectDefaultRevolvingCreditProduct = (state: StoreState) =>
  state.productDesigner.products.revolvingCreditProduct;

export const selectRevolvingCreditProduct = createSelector(
  selectDefaultRevolvingCreditProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...preparedGeneralProductValues(product),
      institutionId: institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code),
      ...preparedRevolvingCredit(product),
    };
  }
);

export const selectDefaultSavingsProduct = (state: StoreState) =>
  state.productDesigner.products.savingsProduct;

export const selectSavingsProduct = createSelector(
  selectDefaultSavingsProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...preparedGeneralProductValues(product),
      institutionId: institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code),
      ...preparedSavings(product),
    };
  }
);

export const selectCurrentProduct = createSelector(
  selectDebitProduct,
  selectLoanProduct,
  selectPrepaidProduct,
  selectRevolvingCreditProduct,
  selectSavingsProduct,
  selectCurrentProductId,
  (
    debitProduct,
    loanProduct,
    prepaidProduct,
    revolvingCreditProduct,
    savingsProduct,
    currentProductId
  ) => {
    const products = [
      debitProduct,
      loanProduct,
      prepaidProduct,
      revolvingCreditProduct,
      savingsProduct,
    ];

    const currentProduct = products.find(product => product && product.id === currentProductId);
    return currentProduct;
  }
);
