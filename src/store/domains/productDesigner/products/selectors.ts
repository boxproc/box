import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import {
  selectCurrencyCodesOptions,
  selectDictionaryEventsOptions,
} from 'store/domains/administration';
import { selectInstitutions, selectInstitutionsOptions } from 'store/domains/consts';
import { selectActiveItemId } from 'store/domains/utils';
import { selectCyclesDescriptionsOptions } from '../cycles';
import {
  prepareGeneralProductData,
  prepareGeneralProductItem,
  prepareProductAprsToRender,
  prepareProductDetailsData,
  prepareProductFeesToRender,
  prepareProductRuleData,
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

    const institution = institutions.find(el => el.id === product.institution_id);

    return {
      ...prepareGeneralProductItem(product),
      institutionId: institution && institution.institutionName,
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
      ...prepareGeneralProductData(product),
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

export const selectProductServices = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  selectProductCardInterfacesService,
  selectProductCardEndpointsService,
  (products, activeId, interfacesOptions, endpointsOptions) => {
    const current = products.find(product => product.id === activeId);

    if (!current) {
      return null;
    }

    const {
      card_transactions_endpoint_id,
      card_management_interface_id,
      provider_3d_secure_interface_id,
    } = current;

    const currentEndpoint = endpointsOptions.find(el => el.value === card_transactions_endpoint_id);
    const currentInterface = interfacesOptions
      .find(el => el.value === card_management_interface_id);
    const currentSecureProviderInterface = interfacesOptions
      .find(el => el.value === provider_3d_secure_interface_id);

    return {
      endpoints: currentEndpoint || endpointsOptions[0],
      interfaces: currentInterface || interfacesOptions[0],
      secureProviderInterfaces: currentSecureProviderInterface || interfacesOptions[0],
    };
  }
);

export const selectProductGeneralLedger = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    if (!current) {
      return null;
    }

    const {
      gl_acc_assets,
      gl_acc_liabilities,
      gl_acc_profit,
      gl_acc_loss,
    } = current;

    return {
      glAccAssets: gl_acc_assets,
      glAccLiabilities: gl_acc_liabilities,
      glAccProfit: gl_acc_profit,
      glAccLoss: gl_acc_loss,
    };
  }
);

export const selectCurrentProductName = createSelector(
  selectDefaultCurrentProduct,
  product => product && product.name
);

export const selectProductName = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    return current && current.name;
  }
);

export const selectIsProductOverride = createSelector(
  selectCurrentProduct,
  product => product && product.overridesProductId ? true : false
);

export const selectCurrentProductType = createSelector(
  selectCurrentProduct,
  product => product && product.productType
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

    return prepareProductDetailsData(product, productType);
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
      ...prepareProductRuleData(currentRule),
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

export const selectInstitutionProducts = createSelector(
  selectDefaultInstitutionProducts,
  products => {
    return products && products.asMutable().map(product => {
      return {
        id: product.id,
        name: product.name,
        defaultStatementCycleId: product.default_statement_cycle_id,
      };
    });
  }
);

export const selectDefaultProductAprs = (state: StoreState) =>
  state.productDesigner.products.productAprs;

export const selectProductAprs = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.asMutable().map(apr => prepareProductAprsToRender(apr))
);

export const selectProductAprsForRules = createSelector(
  selectDefaultProductAprs,
  aprs => aprs && aprs.asMutable().map(apr => {
    return {
      name: apr.id,
      description: apr.description,
    };
  })
);

export const selectDefaultProductFees = (state: StoreState) =>
  state.productDesigner.products.productFees;

export const selectProductFees = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => prepareProductFeesToRender(fee))
);

export const selectProductFeesForRules = createSelector(
  selectDefaultProductFees,
  fees => fees && fees.asMutable().map(fee => {
    return {
      name: fee.product_fee_id,
      description: fee.description,
    };
  })
);
