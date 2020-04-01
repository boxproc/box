// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { productRulesMock } from './mock';
// import { throttleUtil } from 'utils';

import { IProductRuleData, IProductRuleReqToSend } from './types';

/**
 * Get product rule API
 */
export const getProductRule = (data: IProductRuleReqToSend) =>
  // throttleUtil.getDataAfter(productRulesMock, 500);
  apiClientService.post('ui/product_designer/products/rules/get', { data });

/**
 * Update product rule API
 */
export const updateProductRule = (data: IProductRuleData) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/rules/update', { data });
