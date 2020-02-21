import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(apiUrls.endpoints.CREATE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.post(apiUrls.endpoints.DELETE, {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(apiUrls.endpoints.UPDATE, { data });

export const filterAdminEndpoints = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post(apiUrls.endpoints.GET, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(apiUrls.endpoints.GET_BY_INSTITUTION_ID, {
    data: { institution_id: id },
  });
