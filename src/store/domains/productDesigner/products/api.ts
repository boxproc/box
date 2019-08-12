import { apiClient } from 'services';

// import {
// institutionProducts
//   generalProductData,
//   productDetailsData,
//   productItemsData,
//   productItemsFilteredData,
//   productRulesData,
//   successResponseStatus,
// } from './mock';

// import { throttleUtil } from 'utils';

import {
  NewProductPrepared,
  ProductFilterParamsPrepared,
  ProductItemDetailsResp,
  ProductItemResp,
  ProductRulesItemResp,
} from './types';

export const getProducts = () =>
  // throttleUtil.getDataAfter(productItemsData, 500);
  apiClient.post('/ui/product_designer/products/get');

export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(generalProductData, 500);
  apiClient.post('/ui/product_designer/products/get', {
    data: { id },
  });

export const getInstitutionProducts = (id: number | string) =>
  // throttleUtil.getDataAfter(institutionProducts, 500);
  apiClient.post('/ui/service_data/institutions/products/get', {
    data: { institution_id: id },
  });

export const getProductDetails = (id: number) =>
  // throttleUtil.getDataAfter(productDetailsData, 500);
  apiClient.post('/ui/product_designer/products/extensions/get', {
    data: { id },
  });

export const getProductRules = (id: number) =>
  // throttleUtil.getDataAfter(productRulesData, 500);
  apiClient.post('/ui/product_designer/products/rules/get', {
    data: { id },
  });

export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('/ui/product_designer/products/delete', {
    data: { id },
  });

export const filterProducts = (data: ProductFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(productItemsFilteredData, 500);
  apiClient.post('/ui/product_designer/products/get', { data });

export const addProduct = (data: NewProductPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('/ui/product_designer/products/create', { data });

export const updateProduct = (data: ProductItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('/ui/product_designer/products/update', { data });

export const updateProductDetails = (data: ProductItemDetailsResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('/ui/product_designer/products/extensions/update', { data });

export const updateProductRules = (data: ProductRulesItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('/ui/product_designer/products/rules/update', { data });
