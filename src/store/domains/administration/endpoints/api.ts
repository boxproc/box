import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const filterAdminEndpoints = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post(apiUrls.endpoints.GET, { data });

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(apiUrls.endpoints.BASE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.delete(`${apiUrls.endpoints.BASE}/${id}`);

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.put(apiUrls.endpoints.BASE, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(apiUrls.endpoints.GET_BY_INSTITUTION_ID, {
    data: { institution_id: id },
  });
