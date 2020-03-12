import { apiClient } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post('ui/administration/interfaces', { data });

export const deleteAdminInterface = (id: number) =>
  apiClient.delete(`ui/administration/interfaces/${id}`);

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.put('ui/administration/interfaces', { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClient.post('ui/administration/interfaces/get', { data });
