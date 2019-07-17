import { createSelector } from 'reselect';

import { productTypesOptions, schemeTypesOptions, statusTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  items => items && items.asMutable().map(item => {
    return {
      ...camelizeFieldsUtil.camelizeFields(item, 'camelcase'),
      status: statusTypesOptions.find(el => el.value === item.status).label,
      scheme: schemeTypesOptions.find(el => el.value === item.scheme).label,
      productType: productTypesOptions.find(el => el.value === item.product_type).label,
    };
  })
);

export const selectFilterProductParams = (state: StoreState) =>
  state.productDesigner.products.filterProductsParams;
