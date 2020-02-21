import { apiUrls } from 'consts';

import { apiClient } from 'services';

// import { productRulesData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { ProductRuleRequestPrepared, ProductRulesItemResp } from './types';

export const getProductRule = (data: ProductRuleRequestPrepared) =>
  // throttleUtil.getDataAfter(productRulesData, 500);
  apiClient.post(apiUrls.products.GET_PRODUCTS_RULES, { data });

export const updateProductRules = (data: ProductRulesItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(apiUrls.products.UPDATE_RULES, { data });
