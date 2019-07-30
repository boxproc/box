// import { apiClient } from 'services';

import {
  // debitItemData,
  productItemsData,
  productItemsFilteredData,
  // loanItemData,
  // prepaidItemData,
  revolvingCreditItemData,
  // savingsItemData,
  successResponseStatus,
} from './mock';

import { throttleUtil } from 'utils';
import { ProductFilterParamsPrepared, ProductItemDetailsResp } from './types';

export const getProducts = () =>
  throttleUtil.getDataAfter(productItemsData, 500);
  // apiClient.post('/ui/product_designer/products/get');

export const getProduct = (id: number) =>
  throttleUtil.getDataAfter(revolvingCreditItemData, 500);
  // apiClient.post('/ui/product_designer/products/get', {
  //   data: { id },
  // });

export const deleteProduct = (id: number) =>
  throttleUtil.getDataAfter(successResponseStatus, 500);
  // apiClient.post('/ui/product_designer/products/delete', {
  //   data: { id },
  // });

export const filterProducts = (data: ProductFilterParamsPrepared) =>
  throttleUtil.getDataAfter(productItemsFilteredData, 500);
  // apiClient.post('/ui/product_designer/products/get', { data });

export const addProduct = (data: ProductItemDetailsResp) =>
  throttleUtil.getDataAfter(successResponseStatus, 500);
  // apiClient.post('/ui/product_designer/products/create', { data });

export const updateProduct = (data: ProductItemDetailsResp) =>
  throttleUtil.getDataAfter(successResponseStatus, 500);
  // apiClient.post('/ui/product_designer/products/update', { data });
