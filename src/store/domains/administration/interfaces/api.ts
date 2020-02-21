import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(apiUrls.interfaces.CREATE, { data });

export const deleteAdminInterface = (id: number) =>
  apiClient.post(apiUrls.interfaces.DELETE, {
    data: { id },
  });

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(apiUrls.interfaces.UPDATE, { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClient.post(apiUrls.interfaces.GET, { data });
