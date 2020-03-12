import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const filterAdminEndpoints = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post('ui/administration/endpoints/get', { data });

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post('ui/administration/endpoints', { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.delete(`ui/administration/endpoints'${id}`);

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.put('ui/administration/endpoints', { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post('ui/administration/endpoints/id_and_name', {
    data: { institution_id: id },
  });
