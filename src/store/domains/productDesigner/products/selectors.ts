import { createSelector } from 'reselect';

import {
  loanTypesOptions,
  productTypesOptions,
  savingsTypesOptions,
  schemeTypesOptions,
  statusTypesOptions,
  yesNoTypes,
} from 'consts';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodes,
  selectDefaultInstitutions,
  selectInstitutionsOptions,
} from 'store/domains/consts';

import { camelizeUtil } from 'utils';
import { preparedGeneralProductValues } from './utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  selectDefaultInstitutions,
  (items, institutions) => items && items.asMutable().map(item => {
    return {
      ...camelizeUtil.camelize(item, 'camelcase'),
      status: statusTypesOptions.find(el => el.value === item.status).label,
      scheme: schemeTypesOptions.find(el => el.value === item.scheme).label,
      productType: productTypesOptions.find(el => el.value === item.product_type).label,
      institutionId: institutions.find(el => el.id === item.institution_id).institution_name,
    };
  })
);

export const selectFilterProductParams = (state: StoreState) =>
  state.productDesigner.products.filterProductsParams;

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
        && currencyCodes.find(el => el.value === product.currency_code),
      details: {
        ...camelizeUtil.camelize(product.details, 'camelcase'),
        overdraftAllowed:
          product.details.overdraft_allowed === yesNoTypes.YES ? true : false,
      },
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
        && currencyCodes.find(el => el.value === product.currency_code),
      details: {
        ...camelizeUtil.camelize(product.details, 'camelcase'),
        loanType: loanTypesOptions.find(el => el.value === product.details.loan_type),
      },
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
        && currencyCodes.find(el => el.value === product.currency_code),
      details: {
        ...camelizeUtil.camelize(product.details, 'camelcase'),
        breakAgesAllowed:
          product.details.break_ages_allowed === yesNoTypes.YES ? true : false,
        reloadAllowed:
          product.details.reload_allowed === yesNoTypes.YES ? true : false,
      },
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
        && currencyCodes.find(el => el.value === product.currency_code),
      details: {
        ...camelizeUtil.camelize(product.details, 'camelcase'),
        limitSharingAllowed:
          product.details.limit_sharing_allowed_flag === yesNoTypes.YES ? true : false,
      },
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
        && currencyCodes.find(el => el.value === product.currency_code),
      details: {
        ...camelizeUtil.camelize(product.details, 'camelcase'),
        savingsType: savingsTypesOptions.find(el => el.value === product.details.savings_type),
      },
    };
  }
);
