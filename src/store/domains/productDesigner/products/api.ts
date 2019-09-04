import { productsPathNames } from 'consts';

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
  ServicesItems,
} from './types';

export const getProducts = () =>
  // throttleUtil.getDataAfter(productItemsData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS);

export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(generalProductData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS, {
    data: { id },
  });

export const getInstitutionProducts = (id: number | string) =>
  // throttleUtil.getDataAfter(institutionProducts, 500);
  apiClient.post(productsPathNames.GET_INSTITUTIONS_PRODUCTS, {
    data: { institution_id: id },
  });

export const getProductDetails = (id: number) =>
  // throttleUtil.getDataAfter(productDetailsData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS_DETAILS, {
    data: { id },
  });

export const getEndpointsService = (institutionId: number | string) =>
  apiClient.post(productsPathNames.GET_ENDPOINTS_SERVICE, {
    data: { institution_id: institutionId },
  });

export const getInterfacesService = (institutionId: number | string) =>
  apiClient.post(productsPathNames.GET_INTERFACES_SERVICE, {
    data: { institution_id: institutionId },
  });

export const updateCardService = (data: Partial<ServicesItems>) =>
  apiClient.post(productsPathNames.UPDATE_CARD_SERVICE, { data });

export const getProductRules = (id: number) =>
  // throttleUtil.getDataAfter(productRulesData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS_RULES, {
    data: { id },
  });

export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.DELETE_PRODUCT, {
    data: { id },
  });

export const filterProducts = (data: ProductFilterParamsPrepared) =>
  // throttleUtil.getDataAfter(productItemsFilteredData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS, { data });

export const addProduct = (data: NewProductPrepared) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.CREATE_PRODUCT, { data });

export const updateProduct = (data: ProductItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.UPDATE_PRODUCT, { data });

export const updateProductDetails = (data: ProductItemDetailsResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.UPDATE_DETAILS, { data });

export const updateProductRules = (data: ProductRulesItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.UPDATE_RULES, { data });
