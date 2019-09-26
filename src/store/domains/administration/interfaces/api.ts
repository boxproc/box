import { adminInterfacePathNames } from 'consts';

import { apiClient } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(adminInterfacePathNames.CREATE, { data });

export const deleteAdminInterface = (id: number) =>
  apiClient.post(adminInterfacePathNames.DELETE, {
    data: { id },
  });

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(adminInterfacePathNames.UPDATE, { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClient.post(adminInterfacePathNames.GET, { data });
