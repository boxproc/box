import { adminCyclesPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminCyclesEditorItem, CycleFilterPrepared } from './types';

export const addAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  apiClient.post(adminCyclesPathNames.CREATE, { data });

export const deleteAdminCyclesEditor = (id: number) =>
  apiClient.post(adminCyclesPathNames.DELETE, {
    data: { id },
  });

export const updateAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  apiClient.post(adminCyclesPathNames.UPDATE, { data });

export const filterCycles = (data: CycleFilterPrepared) =>
  apiClient.post(adminCyclesPathNames.GET, { data });
