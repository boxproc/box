import { adminEndPointsPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndPointsPathNames.CREATE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.post(adminEndPointsPathNames.DELETE, {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndPointsPathNames.UPDATE, { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterPrepared>) =>
  apiClient.post(adminEndPointsPathNames.GET, { data });

export const getEndpointsByInstitutionId = (id: number | string) =>
  apiClient.post(adminEndPointsPathNames.GET_BY_INSTITUTION_ID, {
    data: {
      institution_id: id,
    },
  });
