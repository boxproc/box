import { adminEndpointsPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndpointsPathNames.CREATE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.post(adminEndpointsPathNames.DELETE, {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndpointsPathNames.UPDATE, { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post(adminEndpointsPathNames.GET, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(adminEndpointsPathNames.GET_BY_INSTITUTION_ID, {
    data: {
      institution_id: id,
    },
  });
