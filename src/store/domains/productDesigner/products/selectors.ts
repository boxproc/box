import { createSelector } from 'reselect';

import { productTypesOptions, schemeTypesOptions, statusTypesOptions } from 'consts';

import { StoreState } from 'store/StoreState';

import { selectDefaultInstitutions } from 'store/domains/consts';

import { camelizeUtil } from 'utils';

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
