import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodes,
  selectDefaultInstitutions,
  selectInstitutionsOptions,
} from 'store/domains/consts';

import { selectAdminEventsOptions } from 'store/domains/administration';
import {
  prepareGeneralProductItem,
  prepareGeneralProductValues,
  prepareProductDetailsValues,
  prepareProductFiltersParams,
  prepareProductRulesValues,
} from './utils';

// All products
export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  selectDefaultInstitutions,
  selectCurrencyCodes,
  (products, institutions, currencyCodes) => products && products.asMutable().map(product => {
    if (!products) {
      return null;
    }
    return {
      ...prepareGeneralProductItem(product),
      currencyCode: currencyCodes
        && currencyCodes.find(el => el.label === product.currency_code)
        && currencyCodes.find(el => el.label === product.currency_code).label,
      institutionId: institutions.find(el => el.id === product.institution_id)
        && institutions.find(el => el.id === product.institution_id).name,
    };
  })
);

// Current product ID
export const selectCurrentProductId = (state: StoreState) =>
  state.productDesigner.products.currentProductId;

// Current product
export const selectDefaultCurrentProduct = (state: StoreState) =>
  state.productDesigner.products.currentProduct;

export const selectCurrentProduct = createSelector(
  selectDefaultCurrentProduct,
  selectInstitutionsOptions,
  selectCurrencyCodes,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }
    return {
      ...prepareGeneralProductValues(product),
      institutionId: institutions && institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes && currencyCodes.find(el => el.label === product.currency_code),
    };
  }
);

// Current product type
export const selectCurrentProductType = createSelector(
  selectCurrentProduct,
  product => {
    return product && product.productType;
  }
);

// Current product details
export const selectDetailsCurrentProductDetails = (state: StoreState) =>
  state.productDesigner.products.currentProductDetails;

export const selectCurrentProductDetails = createSelector(
  selectDetailsCurrentProductDetails,
  selectCurrentProductType,
  (product, productType) => {
    if (!product) {
      return null;
    }
    return {
      ...prepareProductDetailsValues(product, productType),
    };
  }
);

// Current product rules
export const selectDetailsCurrentProductRules = (state: StoreState) =>
  state.productDesigner.products.currentProductRules;

export const selectCurrentProductRules = createSelector(
  selectDetailsCurrentProductRules,
  selectAdminEventsOptions,
  (rules, events) => {
    if (!rules) {
      return null;
    }
    return {
      ...prepareProductRulesValues(rules),
      eventId: events.find(el => el.value === rules.event_id),
    };
  }
);

// Filter parameters
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
      ...prepareProductFiltersParams(params),
      institutionId: institutions.find(institution => institution.value === params.institution_id),
    };
  }
);
