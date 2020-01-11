import { adminInstitutionsURLs } from 'consts';

import { apiClient } from 'services';

// import { adminInstitutionsItems, successResponseStatus } from './mock';

import { AdminInstitutionsItem } from './types';

// import { throttleUtil } from 'utils';

export const getAdminInstitutions = () =>
  // throttleUtil.getDataAfter(adminInstitutionsItems, 500);
  apiClient.post(adminInstitutionsURLs.GET);

export const addAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminInstitutionsURLs.CREATE, { data });

export const deleteAdminInstitution = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post(adminInstitutionsURLs.DELETE, {
    data: { id },
  });

export const updateAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.post(adminInstitutionsURLs.UPDATE, { data });
