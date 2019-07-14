import { createSelector } from 'reselect';

import { StoreState } from 'store/StoreState';

import { camelizeFieldsUtil } from 'utils';

export const selectDefaultProductItems = (state: StoreState) =>
  state.productDesigner.products.products;

export const selectProductItems = createSelector(
  selectDefaultProductItems,
  items => items && items.asMutable().map(item => {
    return camelizeFieldsUtil.camelizeFields(item, 'camelcase');
  })
);

export const selectDefaultProductTypes = (state: StoreState) =>
  state.productDesigner.products.productType;

export const selectDefaultCurrencyCode = (state: StoreState) =>
  state.productDesigner.products.currencyCode;

export const selectDefaultScheme = (state: StoreState) =>
  state.productDesigner.products.scheme;

export const selectIsProductOptionsLoaded =
createSelector(
  selectDefaultProductTypes,
  selectDefaultCurrencyCode,
  selectDefaultScheme,
  (productTypes, currencyCode, scheme) => {
    return productTypes.length > 0
    && currencyCode.length > 0
    && scheme.length > 0;
  });
