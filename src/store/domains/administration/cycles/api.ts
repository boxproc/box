import { apiClient } from 'services';

import { AdminCyclesEditorEditableItemPrepared } from './types';

export const getAdminCycleEditor = () =>
  // throttleUtil.getDataAfter(AdminSchedulerData, 500);
  apiClient.post('/ui/administration/cycles/cycles_editor/get');

export const addAdminCyclesEditor = (data: AdminCyclesEditorEditableItemPrepared) =>
  // throttleUtil.getDataAfter(SuccessResponseStatus, 500);
  apiClient.post('/ui/administration/cycles/cycles_editor/create', { data });
