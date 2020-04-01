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

export const selectDefaultProductItems = (state: IStoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
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

export const selectDefaultCurrentProduct = (state: IStoreState) =>
  state.productDesigner.products.currentProduct;

export const selectCurrentProduct = createSelector(
  selectDefaultCurrentProduct,
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

export const selectCurrentProductInstitutionId = createSelector(
  selectCurrentProduct,
  data => {
    if (!data || !data.institutionId) {
      return null;
    }

    return data.institutionId.value;
  }
);

export const selectCurrentProductName = createSelector(
  selectDefaultCurrentProduct,
  data => data && data.name
);

export const selectProductName = createSelector(
  activeItemIdSelector,
  selectDefaultProductItems,
  (currentId, products) => {
    const current = products.find(product => product.id === currentId);

    return current && current.name;
  }
);

export const selectIsProductOverride = createSelector(
  selectCurrentProduct,
  data => data && data.overridesProductId ? true : false
);

export const selectCurrentProductType = createSelector(
  selectDefaultCurrentProduct,
  data => data && data.product_type
);

export const selectDetailsCurrentProductDetails = (state: IStoreState) =>
  state.productDesigner.products.currentProductDetails;

export const selectCurrentProductDetails = createSelector(
  selectDetailsCurrentProductDetails,
  selectCurrentProductType,
  (product, productType) => {
    if (!product) {
      return null;
    }

    return prepareDetailsToRender(product, productType);
  }
);

export const selectProductLoanDetails = createSelector(
  selectDetailsCurrentProductDetails,
  data => data && prepareDetailsToRender(data, 'L')
);

export const selectDefaultInstitutionProducts = (state: IStoreState) =>
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

export const instProductsLoadingSelector = createLoadingSelector([
  ActionTypeKeys.GET_INSTITUTION_PRODUCTS,
]);

export const selectInstitutionProducts = createSelector(
  selectDefaultInstitutionProducts,
  data => data && data.map(el => {
    return {
      id: el.id,
      name: el.name,
      productType: el.product_type,
      defNumOfIntrstFreeInstlmts: el.def_num_of_intrst_free_instlmts,
      defNumOfInstallments: el.def_num_of_installments,
    };
  })
);

export const selectInstitutionLoanProductsOptions = createSelector(
  selectDefaultInstitutionProducts,
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
