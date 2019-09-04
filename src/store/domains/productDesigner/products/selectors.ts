import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodes,
  selectInstitutions,
  selectInstitutionsOptions,
} from 'store/domains/consts';

import { selectAdminEventsOptions } from 'store/domains/administration';
import {
  prepareGeneralProductItem,
  prepareGeneralProductValues,
  prepareProductDetailsValues,
  prepareProductFiltersParams,
  prepareProductRuleValues,
} from './utils';

// All products
export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectDefaultInterfaces = (state: StoreState) =>
  state.productDesigner.products.interfaces.asMutable();

export const selectDefaultEndpoints = (state: StoreState) =>
  state.productDesigner.products.endpoints.asMutable();

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  selectInstitutions,
  (products, institutions) => products && products.asMutable().map(product => {
    if (!products) {
      return null;
    }
    return {
      ...prepareGeneralProductItem(product),
      institutionId: institutions.find(el => el.id === product.institution_id)
        && institutions.find(el => el.id === product.institution_id).institutionName,
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
      currencyCode: currencyCodes && currencyCodes.find(el => el.value === product.currency_code),
    };
  }
);

export const selectCurrentInstitutionId = createSelector(
  selectDefaultCurrentProduct,
  product => {
    if (!product) {
      return null;
    }
    return product.institution_id;
  }
);

export const selectProductCardInterfacesService = createSelector(
  selectDefaultInterfaces,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: el.name,
    };
  })
);

export const selectProductCardEndpointsService = createSelector(
  selectDefaultEndpoints,
  data => data && data.map(el => {
    return {
      value: el.id,
      label: el.name,
    };
  })
);

// Current product name
export const selectCurrentProductName = createSelector(
  selectCurrentProduct,
  (product) => product && product.name
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
  state.productDesigner.products.currentProductRules.asMutable();

// Current rule
export const selectDefaultCurrentRule = (state: StoreState) =>
  state.productDesigner.products.currentProductRule;

// Current rules code
export const selectDefaultCurrentRulesCode = (state: StoreState) =>
  state.productDesigner.products.currentRulesCode;

export const selectCurrentProductRules = createSelector(
  selectDetailsCurrentProductRules,
  selectDefaultCurrentRule,
  selectDefaultCurrentRulesCode,
  selectAdminEventsOptions,
  (rules, currentRule, code, events) => {
    if (!rules.length) {
      return null;
    }

    const rule = currentRule ? currentRule : rules[0];

    return {
      ...prepareProductRuleValues(rule),
      eventId: rule && events.find(el => el.value === rule.event_id),
      script: code,
    };
  }
);

export const selectProductRules = createSelector(
  selectDetailsCurrentProductRules,
  selectDefaultCurrentRulesCode,
  selectAdminEventsOptions,
  (rules, code, events) => {
    if (!rules.length) {
      return null;
    }

    return rules.map(rule => {
      return {
        ...prepareProductRuleValues(rule),
        eventId: rule && events.find(el => el.value === rule.event_id),
      };
    });
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

// Institution products
export const selectDefaultInstitutionProducts = (state: StoreState) =>
  state.productDesigner.products.institutionProducts;

export const selectInstitutionProductsOptions = createSelector(
  selectDefaultInstitutionProducts,
  products => {
    return products && products.asMutable().map(product => {
      return {
        value: product.id,
        label: product.name,
      };
    });
  }
);
