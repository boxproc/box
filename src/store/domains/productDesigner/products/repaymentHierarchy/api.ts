// import { productsURLs } from 'consts';

// import { apiClient } from 'services';

import { repaymentHierarchy, successResponseStatus } from './mock';
import { ChangeRepaymentHierarchyRequest } from './types';

import { throttleUtil } from 'utils';

export const getRepaymentHierarchy = (id: number) =>
  throttleUtil.getDataAfter(repaymentHierarchy, 500);
  // apiClient.post(productsURLs.GET_REPAYMENT_HIERARCHY, {
  //   data: { product_id: id },
  // });

export const updateRepaymentHierarchy = (order: ChangeRepaymentHierarchyRequest) =>
  throttleUtil.getDataAfter(successResponseStatus, 500);
  // apiClient.post(productsURLs.UPDATE_REPAYMENT_HIERARCHY, { data });
