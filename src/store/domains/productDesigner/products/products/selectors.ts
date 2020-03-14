import { createSelector } from 'reselect';

import { productTypesConst } from 'consts';

import { StoreState } from 'store/StoreState';

import { selectCurrencyCodesOptions } from 'store/domains/administration';
import { selectInstitutions, selectInstitutionsOptions } from 'store/domains/login';
import { selectActiveItemId } from 'store/domains/utils';
import {
  prepareGeneralProductData,
  prepareGeneralProductItem,
  prepareProductDetailsData,
} from './utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

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
  (product, institutions, currencyCodes) => {
    if (!product) {
      return null;
    }

    return {
      ...prepareGeneralProductData(product),
      institutionId: institutions && institutions.find(el => el.value === product.institution_id),
      currencyCode: currencyCodes && currencyCodes.find(el => el.value === product.currency_code),
    };
  }
);

export const selectCurrentProductInstitutionId = createSelector(
  selectCurrentProduct,
  product => {
    if (!product || !product.institutionId) {
      return null;
    }

    return product.institutionId.value;
  }
);

export const selectCurrentProductName = createSelector(
  selectDefaultCurrentProduct,
  product => product && product.name
);

export const selectProductName = createSelector(
  selectActiveItemId,
  selectDefaultProductItems,
  (currentId, products) => {
    const current = products.find(product => product.id === currentId);

    return current && current.name;
  }
);

export const selectIsProductOverride = createSelector(
  selectCurrentProduct,
  product => product && product.overridesProductId ? true : false
);

export const selectCurrentProductType = createSelector(
  selectDefaultCurrentProduct,
  product => product && product.product_type
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

export const selectProductLoanDetails = createSelector(
  selectDetailsCurrentProductDetails,
  product => product && prepareProductDetailsData(product, 'L')
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
        productType: product.product_type,
        defNumOfIntrstFreeInstlmts: product.def_num_of_intrst_free_instlmts,
        defNumOfInstallments: product.def_num_of_installments,
      };
    });
  }
);

export const selectInstitutionLoanProductsOptions = createSelector(
  selectDefaultInstitutionProducts,
  products => {
    if (!products) {
      return null;
    }

    const loanProducts = products
      .filter(product => product.product_type === productTypesConst.LOAN);

    return loanProducts && loanProducts.asMutable().map(product => {
      return {
        value: product.id,
        label: product.name,
      };
    });
  }
);
