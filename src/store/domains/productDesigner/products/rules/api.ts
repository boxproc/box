import { apiClientService } from 'services';

// import { productRulesData, successResponseStatus } from './mock';

// import { throttleUtil } from 'utils';

import { ProductRuleRequestPrepared, ProductRulesItemResp } from './types';

export const getProductRule = (data: ProductRuleRequestPrepared) =>
  // throttleUtil.getDataAfter(productRulesData, 500);
  apiClientService.post('ui/product_designer/products/rules/get', { data });

export const updateProductRules = (data: ProductRulesItemResp) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('ui/product_designer/products/rules/update', { data });
