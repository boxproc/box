import { adminInterfaceURLs } from 'consts';

import { apiClient } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(adminInterfaceURLs.CREATE, { data });

export const deleteAdminInterface = (id: number) =>
  apiClient.post(adminInterfaceURLs.DELETE, {
    data: { id },
  });

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(adminInterfaceURLs.UPDATE, { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClient.post(adminInterfaceURLs.GET, { data });
