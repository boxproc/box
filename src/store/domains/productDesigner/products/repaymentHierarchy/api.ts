import { apiClientService } from 'services';

// import { repaymentHierarchy, successResponseStatus } from './mock';
import { ChangeRepaymentHierarchyRequest } from './types';

// import { throttleUtil } from 'utils';

export const getRepaymentHierarchy = (id: number) =>
  // throttleUtil.getDataAfter(repaymentHierarchy, 500);
  apiClientService.post('/ui/product_designer/products/hierarchy/get', {
    data: { product_id: id },
  });

export const updateRepaymentHierarchy = (data: ChangeRepaymentHierarchyRequest) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClientService.post('/ui/product_designer/products/hierarchy/update', { data });
