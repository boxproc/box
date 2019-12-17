import { createSelector } from 'reselect';

import { actionTypesCodeKeys, actionTypesOptions, yesNoTypesCodes } from 'consts';

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
  prepareProductRewardsToRender,
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
    const institutionName = institution && institution.institutionName;

    return prepareGeneralProductItem(product, institutionName);
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
    if (!product || !product.institutionId) {
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
      direct_debit_interface_id,
      card_repayment_interface_id,
    } = current;

    const currentEndpoint = endpointsOptions
      .find(el => el.value === card_transactions_endpoint_id);
    const currentInterface = interfacesOptions
      .find(el => el.value === card_management_interface_id);
    const currentSecureProviderInterface = interfacesOptions
      .find(el => el.value === provider_3d_secure_interface_id);
    const currentDirectDebitRepaymentInterface = interfacesOptions
      .find(el => el.value === direct_debit_interface_id);
    const currentCardRepaymentInterface = interfacesOptions
      .find(el => el.value === card_repayment_interface_id);

    return {
      endpoints: currentEndpoint || endpointsOptions[0],
      interfaces: currentInterface || interfacesOptions[0],
      secureProviderInterfaces: currentSecureProviderInterface || interfacesOptions[0],
      directDebitRepaymentInterface: currentDirectDebitRepaymentInterface || interfacesOptions[0],
      cardRepaymentInterface: currentCardRepaymentInterface || interfacesOptions[0],
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

export const selectProductAuxCounters = createSelector(
  selectDefaultProductItems,
  selectActiveItemId,
  (products, activeId) => {
    const current = products.find(product => product.id === activeId);

    if (!current) {
      return null;
    }

    const {
      aux_counter_1_description,
      aux_counter_2_description,
      aux_counter_3_description,
      aux_counter_1_enabled,
      aux_counter_2_enabled,
      aux_counter_3_enabled,
    } = current;

    return {
      auxCounter1Description: aux_counter_1_description,
      auxCounter2Description: aux_counter_2_description,
      auxCounter3Description: aux_counter_3_description,
      auxCounter1Enabled: aux_counter_1_enabled === yesNoTypesCodes.YES,
      auxCounter2Enabled: aux_counter_2_enabled === yesNoTypesCodes.YES,
      auxCounter3Enabled: aux_counter_3_enabled === yesNoTypesCodes.YES,
    };
  }
);

export const selectActionTypesOptions = createSelector(
  selectProductAuxCounters,
  auxCounters => {
    const set = new Set() as any;

    const isAuxCounter1Enabled = auxCounters && auxCounters.auxCounter1Enabled;
    const isAuxCounter2Enabled = auxCounters && auxCounters.auxCounter2Enabled;
    const isAuxCounter3Enabled = auxCounters && auxCounters.auxCounter3Enabled;

    const auxCounter1Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_1);
    const auxCounter2Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_2);
    const auxCounter3Option = actionTypesOptions
      .find(el => el.value === actionTypesCodeKeys.UPDATE_AUX_COUNTER_3);

    actionTypesOptions.forEach(type => set.add(type));

    if (!isAuxCounter1Enabled) {
      set.delete(auxCounter1Option);
    }

    if (!isAuxCounter2Enabled) {
      set.delete(auxCounter2Option);
    }

    if (!isAuxCounter3Enabled) {
      set.delete(auxCounter3Option);
    }

    return [...set];
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
  (product, productType) => product && prepareProductDetailsData(product, productType)
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

export const selectCurrentProductScript = createSelector(
  selectCurrentProductRule,
  rule => rule && rule.script
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
        productType: product.product_type,
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
      name: apr.product_apr_id,
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

export const selectDefaultProductRewards = (state: StoreState) =>
  state.productDesigner.products.productRewards;

export const selectProductRewards = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => prepareProductRewardsToRender(reward))
);

export const selectProductRewardsForRules = createSelector(
  selectDefaultProductRewards,
  rewards => rewards && rewards.asMutable().map(reward => {
    return {
      name: reward.product_reward_id,
      description: reward.description,
    };
  })
);
export const selectDefaultAprs = (state: StoreState) =>
  state.productDesigner.products.productFeeAprs;

export const selectAprsOptions = createSelector(
  selectDefaultAprs,
  items => items && items.asMutable().map(item => {
    return {
      value: item.product_apr_id,
      label: item.apr_description,
    };
  })
);
