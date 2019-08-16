import { apiClient } from 'services';

import { AdminEndpointFilterParamsPrepared, AdminEndpointItem } from './types';

export const getAdminEndpoint = () =>
  apiClient.post('/ui/administration/endpoints/get');

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post('/ui/administration/endpoints/create', { data });

export const deleteAdminEndpoint = (id: string | number) =>
  apiClient.post('/ui/administration/endpoints/delete', {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post('/ui/administration/endpoints/update', { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterParamsPrepared>) =>
  apiClient.post('/ui/administration/endpoints/get', { data });
