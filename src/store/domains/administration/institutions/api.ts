import { apiClient } from 'services';

// import { adminInstitutionsItems, successResponseStatus } from './mock';

import { AdminInstitutionsItem } from './types';

// import { throttleUtil } from 'utils';

export const getAdminInstitutions = () =>
  // throttleUtil.getDataAfter(adminInstitutionsItems, 500);
  apiClient.post('ui/institutions/get');

export const addAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.post('ui/institutions', { data });

export const deleteAdminInstitution = (id: number) =>
  // throttleUtil.getDataAfter(successResponseStatus, 500);
  apiClient.delete(`ui/institutions/${id}`);

export const updateAdminInstitution = (data: Partial<AdminInstitutionsItem>) =>
  // throttleUtil.getDataAfter(successResponseStatus, 100);
  apiClient.put('ui/institutions', { data });
