import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post(apiUrls.interfaces.BASE, { data });

export const deleteAdminInterface = (id: number) =>
  apiClient.delete(`${apiUrls.interfaces.BASE}/${id}`);

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.put(apiUrls.interfaces.BASE, { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClient.post(apiUrls.interfaces.GET, { data });
