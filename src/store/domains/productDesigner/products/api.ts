import { productsPathNames } from 'consts';

import { apiClient } from 'services';

// import {
//   institutionProducts,
//   productDetailsData,
//   productItemsFilteredData,
//   productRulesData,
//   successResponseStatus,
// } from './mock';

// import { throttleUtil } from 'utils';

import {
  NewProductPrepared,
  ProductAprItem,
  ProductFeeItem,
  ProductFeesIds,
  ProductFilterPrepared,
  ProductItemDetailsResp,
  ProductItemResp,
  ProductRuleRequestPrepared,
  ProductRulesItemResp,
  ServicesItems,
} from './types';

export const getInstitutionProducts = (id: number | string) =>
  // throttleUtil.getDataAfter(institutionProducts, 500);
  apiClient.post(productsPathNames.GET_INSTITUTIONS_PRODUCTS, {
    data: { institution_id: id },
  });

export const getProduct = (id: number) =>
  // throttleUtil.getDataAfter(productData, 500);
  apiClient.post(productsPathNames.GET_PRODUCT, {
    data: { id },
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

export const getProductRule = (data: ProductRuleRequestPrepared) =>
  // throttleUtil.getDataAfter(productRulesData, 500);
  apiClient.post(productsPathNames.GET_PRODUCTS_RULES, { data });

export const deleteProduct = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(productsPathNames.DELETE_PRODUCT, {
    data: { id },
  });

export const filterProducts = (data: ProductFilterPrepared) =>
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

export const getProductAprs = (id: number) =>
  apiClient.post(productsPathNames.GET_APRS, {
    data: { product_id: id },
  });

export const addProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsPathNames.CREATE_APR, { data });

export const updateProductApr = (data: Partial<ProductAprItem>) =>
  apiClient.post(productsPathNames.UPDATE_APR, { data });

export const deleteProductApr = (id: number) =>
  apiClient.post(productsPathNames.DELETE_APR, {
    data: { id },
  });

export const getProductFees = (id: number) =>
  apiClient.post(productsPathNames.GET_FEES, {
    data: { product_id: id },
  });

export const addProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsPathNames.CREATE_FEE, { data });

export const updateProductFee = (data: Partial<ProductFeeItem>) =>
  apiClient.post(productsPathNames.UPDATE_FEE, { data });

export const deleteProductFee = (data: ProductFeesIds) =>
  apiClient.post(productsPathNames.DELETE_FEE, {
    data: {
      product_id: data.productId,
      product_fee_id: data.productFeeId,
    },
  });
