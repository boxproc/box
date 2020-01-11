import { adminEndpointsURLs } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndpointsURLs.CREATE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.post(adminEndpointsURLs.DELETE, {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndpointsURLs.UPDATE, { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post(adminEndpointsURLs.GET, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(adminEndpointsURLs.GET_BY_INSTITUTION_ID, {
    data: { institution_id: id },
  });
