import { adminEndpointsPathNames } from 'consts';

import { apiClient } from 'services';

// import { endpointLogData } from './mock';
import { AdminEndpointFilterPrepared, AdminEndpointItem } from './types';

// import { throttleUtil } from 'utils';

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

export const getEndpointLogData = (data: object) =>
  // throttleUtil.getDataAfter(endpointLogData, 500);
  apiClient.post(adminEndpointsPathNames.GET_LOG_DATA, { data });
