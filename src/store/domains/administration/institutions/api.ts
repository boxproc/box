// import { adminInstitutionsPathNames } from 'consts';

// import { apiClient } from 'services';

import {
  adminInstitutionsItems,
  SuccessResponseStatus,
} from './mock';

import { AdminInstitutionsItem } from './types';

import { throttleUtil } from 'utils';

export const getAdminInstitutions = () =>
  throttleUtil.getDataAfter(adminInstitutionsItems, 500);
// apiClient.post(adminInstitutionsPathNames.GET);

export const addAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(adminInstitutionsPathNames.CREATE, { data });

export const deleteAdminInstitution = (id: number) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 500);
// apiClient.post(adminInstitutionsPathNames.DELETE, {
//   data: { id },
// });

export const updateAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  // apiClient.post(adminInstitutionsPathNames.UPDATE, { data });
