import { adminCyclesPathNames } from 'consts';

import { apiClient } from 'services';

import { AdminCyclesEditorItem } from './types';

export const getAdminCycleEditor = () =>
  apiClient.post(adminCyclesPathNames.GET);

export const addAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  apiClient.post(adminCyclesPathNames.CREATE, { data });

export const deleteAdminCyclesEditor = (id: number) =>
  apiClient.post(adminCyclesPathNames.DELETE, {
    data: { id },
  });

export const updateAdminCyclesEditor = (data: Partial<AdminCyclesEditorItem>) =>
  apiClient.post(adminCyclesPathNames.UPDATE, { data });
