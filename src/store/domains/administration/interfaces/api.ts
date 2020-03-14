import { apiClientService } from 'services';

import { AdminInterfaceFilterPrepared, AdminInterfaceItem } from './types';

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClientService.post('ui/administration/interfaces', { data });

export const deleteAdminInterface = (id: number) =>
  apiClientService.delete(`ui/administration/interfaces/${id}`);

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  apiClientService.put('ui/administration/interfaces', { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterPrepared>) =>
  apiClientService.post('ui/administration/interfaces/get', { data });
