// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import {
//   institutionProductsMock,
//   productDetailsMock,
//   productsFilteredMock,
//   productsMock,
// } from './mock';
// import { throttleUtil } from 'utils';

import {
  INewProductToSend,
  IProductData,
  IProductDetailsResp,
  IProductsFilterToSend,
} from './types';

/**
 * Get institution products API
 */
export const getInstProducts = (id: number | string) =>
  // throttleUtil.getDataAfter(institutionProductsMock, 500);
  apiClientService.post('ui/product_designer/products/get_by_institution', {
    data: { institution_id: id },
  });

/**
 * Get products API
 */
export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(productsMock, 500);
  apiClientService.post('ui/product_designer/products/get_product_by_id', {
    data: { id },
  });

/**
 * Get product details API
 */
export const getProductDetails = (id: number) =>
  // throttleUtil.getDataAfter(productDetailsMock, 500);
  apiClientService.post('ui/product_designer/products/extensions/get', {
    data: { id },
  });

/**
 * Delete product API
 */
export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/delete', {
    data: { id },
  });

/**
 * Filter products API
 */
export const filterProducts = (data: IProductsFilterToSend) =>
  // throttleUtil.getDataAfter(productsFilteredMock, 500);
  apiClientService.post('ui/product_designer/products/get', { data });

/**
 * Add product API
 */
export const addProduct = (data: INewProductToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/create', { data });

/**
 * Update product API
 */
export const updateProduct = (data: IProductData) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/update', { data });

/**
 * Update product details API
 */
export const updateProductDetails = (data: IProductDetailsResp) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/extensions/update', { data });
