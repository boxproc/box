import { apiClient } from 'services';

import { AdminInterfaceFilterParamsPrepared, AdminInterfaceItem } from './types';

export const getAdminInterface = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/interfaces/get');

export const addAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/interfaces/create', { data });

export const deleteAdminInterface = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/interfaces/delete', {
    data: { id },
  });

export const updateAdminInterface = (data: Partial<AdminInterfaceItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/interfaces/update', { data });

export const filterAdminInterface = (data: Partial<AdminInterfaceFilterParamsPrepared>) =>
  // throttleUtil.getDataAfter(LedgerAccountsFilteredItems, 500);
  apiClient.post('/ui/administration/interfaces/get', { data });
