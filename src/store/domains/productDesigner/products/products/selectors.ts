import { createSelector } from 'reselect';

import { productTypesConst } from 'consts';
import { IStoreState } from 'store';
import { currenciesOptionsSelector } from 'store/domains/admin';
import { createLoadingSelector } from 'store/domains/loader';
import { userInstitutionsOptionsSelector, userInstitutionsSelector } from 'store/domains/login';
import { activeItemIdSelector } from 'store/domains/utils';
import { ActionTypeKeys } from './actionTypes';
import {
  prepareCurrGeneralProductToRender,
  prepareDetailsToRender,
  prepareGeneralProductToRender,
} from './utils';

export const defaultProductsSelector = (state: IStoreState) =>
  state.productDesigner.products.products;

export const productsSelector = createSelector(
  defaultProductsSelector,
  userInstitutionsSelector,
  (products, institutions) => products && products.map(product => {
    if (!product) {
      return null;
    }

    const institution = institutions.find(el => el.id === product.institution_id);
    const institutionName = institution && institution.institutionName;

    return prepareGeneralProductToRender(product, institutionName);
  })
);

/**
 * Current product selectors
 */

export const defaultCurrentProductSelector = (state: IStoreState) =>
  state.productDesigner.products.currentProduct;

export const currentProductSelector = createSelector(
  defaultCurrentProductSelector,
  userInstitutionsOptionsSelector,
  currenciesOptionsSelector,
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }

    return {
      ...prepareCurrGeneralProductToRender(product),
      institutionId: institutions && institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes && currencyCodes.find(el => el.value === product.currency_code),
    };
  }
);

export const currentProductInstId = createSelector(
  currentProductSelector,
  data => {
    if (!data || !data.institutionId) {
      return null;
    }

    return data.institutionId.value;
  }
);

export const currentProductNameSelector = createSelector(
  defaultCurrentProductSelector,
  data => data && data.name
);

export const productNameSelector = createSelector(
  activeItemIdSelector,
  defaultProductsSelector,
  (currentId, products) => {
    const currentProduct = products.find(product => product.id === currentId);

    return currentProduct && currentProduct.name;
  }
);

export const isProductOverrideSelector = createSelector(
  currentProductSelector,
  data => data && data.overridesProductId ? true : false
);

export const currentProductTypeSelector = createSelector(
  defaultCurrentProductSelector,
  data => data && data.product_type
);

export const defaultCurrentProductDetailsSelector = (state: IStoreState) =>
  state.productDesigner.products.currentProductDetails;

export const currentProductDetailsSelector = createSelector(
  defaultCurrentProductDetailsSelector,
  currentProductTypeSelector,
  (product, productType) => {
    if (!product) {
      return null;
    }

    return prepareDetailsToRender(product, productType);
  }
);

export const productLoanDetailsSelector = createSelector(
  defaultCurrentProductDetailsSelector,
  data => data && prepareDetailsToRender(data, 'L')
);

/**
 * Institution products selectors
 */

export const defaultInstProductsSelector = (state: IStoreState) =>
  state.productDesigner.products.institutionProducts;

export const instProductsOptionsSelector = createSelector(
  defaultInstProductsSelector,
  products => {
    return products && products.asMutable().map(product => {
      return {
        value: product.id,
        label: product.name,
      };
    });
  }
);

export const instProductsSelector = createSelector(
  defaultInstProductsSelector,
  data => data && data.map(el => {
    return {
      id: el.id,
      name: el.name,
      productType: el.product_type,
      defNumInterestFreeInstlmts: el.def_num_of_intrst_free_instlmts,
      defNumOfInstallments: el.def_num_of_installments,
      defNumDeferredInstlmts: el.def_num_deferred_instlmts,
      statementCycleParameter: el.default_statement_cycle_parameter,
    };
  })
);

export const instLoanProductsOptionsSelector = createSelector(
  defaultInstProductsSelector,
  products => {
    if (!products) {
      return null;
    }

    const loanProducts = products.filter(el => el.product_type === productTypesConst.LOAN);

    return loanProducts && loanProducts.asMutable().map(el => {
      return {
        value: el.id,
        label: el.name,
      };
    });
  }
);

/**
 * Product loading selectors
 */

export const isInstProductsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_INST_PRODUCTS,
]);

export const isProductAddingSelector = createLoadingSelector([
  ActionTypeKeys.ADD_PRODUCT,
]);

export const isProductDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_PRODUCT,
]);

export const isProductUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_PRODUCT,
]);

export const isProductLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT,
]);

export const isProductDetailsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_PRODUCT_DETAILS,
]);

export const isProductDetailsUpdatingSelector = createLoadingSelector([
  ActionTypeKeys.UPDATE_PRODUCT_DETAILS,
]);

export const isProductsFilteringSelector = createLoadingSelector([
  ActionTypeKeys.FILTER_PRODUCTS,
]);

export const isProductsDeletingSelector = createLoadingSelector([
  ActionTypeKeys.DELETE_PRODUCT,
]);
