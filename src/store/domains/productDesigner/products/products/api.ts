import { productsURLs } from 'consts';

import { apiClient } from 'services';

// import {
//   institutionProducts,
//   productData,
//   productDetailsData,
//   productItemsFilteredData,
//   successResponseStatus,
// } from './mock';

// import { throttleUtil } from 'utils';

import {
  NewProductPrepared,
  ProductFilterPrepared,
  ProductItemDetailsResp,
  ProductItemResp,
} from './types';

export const getInstitutionProducts = (id: number | string) =>
  // throttleUtil.getDataAfter(institutionProducts, 500);
  apiClient.post(productsURLs.GET_INSTITUTIONS_PRODUCTS, {
    data: { institution_id: id },
  });

export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClient.post(productsURLs.GET_PRODUCT, {
    data: { id },
  });

export const getProductDetails = (id: number) =>
  // throttleUtil.getDataAfter(productDetailsData, 500);
  apiClient.post(productsURLs.GET_PRODUCTS_DETAILS, {
    data: { id },
  });

export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsURLs.DELETE_PRODUCT, {
    data: { id },
  });

export const filterProducts = (data: ProductFilterPrepared) =>
  // throttleUtil.getDataAfter(productItemsFilteredData, 500);
  apiClient.post(productsURLs.GET_PRODUCTS, { data });

export const addProduct = (data: NewProductPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsURLs.CREATE_PRODUCT, { data });

export const updateProduct = (data: ProductItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsURLs.UPDATE_PRODUCT, { data });

export const updateProductDetails = (data: ProductItemDetailsResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsURLs.UPDATE_DETAILS, { data });
