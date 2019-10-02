import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodesOptions,
  selectCyclesDescriptionsOptions,
  selectDictionaryEventsOptions,
} from 'store/domains/administration';
import { selectInstitutions, selectInstitutionsOptions } from 'store/domains/consts';
import {
  prepareGeneralProductItem,
  prepareGeneralProductValues,
  prepareProductDetailsValues,
  prepareProductRuleValues,
} from './utils';

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

export const selectDefaultCurrentProduct = (state: StoreState) =>
  state.productDesigner.products.currentProduct;

export const selectCurrentProduct = createSelector(
  selectDefaultCurrentProduct,
  selectInstitutionsOptions,
  selectCurrencyCodesOptions,
  selectCyclesDescriptionsOptions,
  (product, institutions, currencyCodes, cyclesOptions) => {
    if (!product) {
      return null;
    }

    return {
      ...prepareGeneralProductValues(product),
      institutionId: institutions && institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes && currencyCodes.find(el => el.value === product.currency_code),
      defaultStatementCycle: cyclesOptions
        .find(el => el.value === product.default_statement_cycle_id),
    };
  }
);

export const selectCurrentInstitutionId = createSelector(
  selectCurrentProduct,
  product => {
    if (!product) {
      return null;
    }
    return product.institutionId.value;
  }
);

export const selectProductCardInterfacesService = createSelector(
  selectDefaultInterfaces,
  data => data && data.map(el => {
    return {
      value: el.id ? el.id : 0,
      label: el.name,
    };
  })
);

export const selectProductCardEndpointsService = createSelector(
  selectDefaultEndpoints,
  data => data && data.map(el => {
    return {
      value: el.id ? el.id : 0,
      label: el.name,
    };
  })
);

export const selectCurrentProductName = createSelector(
  selectCurrentProduct,
  product => product && product.name
);

export const selectIsProductOverride = createSelector(
  selectCurrentProduct,
  product => product && product.overridesProductId ? true : false
);

export const selectCurrentProductType = createSelector(
  selectCurrentProduct,
  product => {
    return product && product.productType;
  }
);

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

export const selectDefaultCurrentRule = (state: StoreState) =>
  state.productDesigner.products.currentProductRule;

export const selectCurrentProductRule = createSelector(
  selectDefaultCurrentRule,
  selectDictionaryEventsOptions,
  (currentRule, events) => {
    if (!currentRule) {
      return null;
    }

    return {
      ...prepareProductRuleValues(currentRule),
      eventId: events && events.find(el => el.value === currentRule.event_id),
    };
  }
);

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
