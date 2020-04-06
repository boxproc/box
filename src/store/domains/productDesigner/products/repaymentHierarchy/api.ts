// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { repaymentHierarchyMock } from './mock';
import { IRepaymentHierarchyReqToSend } from './types';
// import { throttleUtil } from 'utils';

/**
 * Get repayment hierarchy API
 */
export const getRepaymentHierarchy = (id: number) =>
  // throttleUtil.getDataAfter(repaymentHierarchyMock, 500);
  apiClientService.post('ui/product_designer/products/hierarchy/get', {
    data: { product_id: id },
  });

/**
 * Update repayment hierarchy API
 */
export const updateRepaymentHierarchy = (data: IRepaymentHierarchyReqToSend) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/product_designer/products/hierarchy/update', { data });
