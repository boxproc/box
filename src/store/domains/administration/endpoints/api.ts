import { adminEndPointsPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminEndpointFilterParamsPrepared, AdminEndpointItem } from './types';

export const getAdminEndpoint = () =>
  apiClient.post(adminEndPointsPathNames.GET);

export const addAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndPointsPathNames.CREATE, { data });

export const deleteAdminEndpoint = (id: number) =>
  apiClient.post(adminEndPointsPathNames.DELETE, {
    data: { id },
  });

export const updateAdminEndpoint = (data: Partial<AdminEndpointItem>) =>
  apiClient.post(adminEndPointsPathNames.UPDATE, { data });

export const filterAdminEndpoint = (data: Partial<AdminEndpointFilterParamsPrepared>) =>
  apiClient.post(adminEndPointsPathNames.GET, { data });
