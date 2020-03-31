// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { productRulesMock } from './mock';
// import { throttleUtil } from 'utils';

import { ProductRuleRequestPrepared, ProductRulesItemResp } from './types';

/**
 * Get product rule API
 */
export const getProductRule = (data: ProductRuleRequestPrepared) =>
  // throttleUtil.getDataAfter(productRulesMock, 500);
  apiClientService.post('ui/product_designer/products/rules/get', { data });

/**
 * Update product rules API
 */
export const updateProductRules = (data: ProductRulesItemResp) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/rules/update', { data });
