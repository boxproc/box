import { apiClient } from 'services';

import { AdminEndpointFilterParamsPrepared, AdminEndpointItem } from './types';

export const getAdminEndpoint = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/endpoints/get');

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/endpoints/create', { data });

export const deleteAdminEndpoint = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/endpoints/delete', {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/endpoints/update', { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post('/ui/administration/endpoints/get', { data });
