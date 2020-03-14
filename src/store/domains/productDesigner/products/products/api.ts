import { apiClientService } from 'services';

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
  apiClientService.post('ui/product_designer/products/get_by_institution', {
    data: { institution_id: id },
  });

export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClientService.post('ui/product_designer/products/get_product_by_id', {
    data: { id },
  });

export const getProductDetails = (id: number) =>
  // throttleUtil.getDataAfter(productDetailsData, 500);
  apiClientService.post('ui/product_designer/products/extensions/get', {
    data: { id },
  });

export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/delete', {
    data: { id },
  });

export const filterProducts = (data: ProductFilterPrepared) =>
  // throttleUtil.getDataAfter(productItemsFilteredData, 500);
  apiClientService.post('ui/product_designer/products/get', { data });

export const addProduct = (data: NewProductPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/create', { data });

export const updateProduct = (data: ProductItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/update', { data });

export const updateProductDetails = (data: ProductItemDetailsResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/extensions/update', { data });
