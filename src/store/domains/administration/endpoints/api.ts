import { apiClientService } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const filterAdminEndpoints = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClientService.post('ui/administration/endpoints/get', { data });

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClientService.post('ui/administration/endpoints', { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClientService.delete(`ui/administration/endpoints/${id}`);

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClientService.put('ui/administration/endpoints', { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClientService.post('ui/administration/endpoints/id_and_name', {
    data: { institution_id: id },
  });
