import { apiClient } from 'services';

import { AdminInterfaceFilterParamsPrepared, AdminInterfaceItem } from './types';

export const getAdminInterface = () =>
  apiClient.post('/ui/administration/interfaces/get');

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post('/ui/administration/interfaces/create', { data });

export const deleteAdminInterface = (id: string | number) =>
  apiClient.post('/ui/administration/interfaces/delete', {
    data: { id },
  });

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClient.post('/ui/administration/interfaces/update', { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterParamsPrepared>) =>
  apiClient.post('/ui/administration/interfaces/get', { data });
