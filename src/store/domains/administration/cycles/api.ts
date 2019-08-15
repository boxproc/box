import { apiClient } from 'services';

import { AdminCyclesEditorItem } from './types';

export const getAdminCycleEditor = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/cycles/cycles_editor/get');

export const addAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/cycles/cycles_editor/create', { data });

export const deleteAdminCyclesEditor = (id: string | number) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/cycles/cycles_editor/delete', {
    data: { id },
  });

export const updateAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 100);
  apiClient.post('/ui/administration/cycles/cycles_editor/update', { data });
