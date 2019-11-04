import { cyclesPathNames } from 'consts';

import { apiClient } from 'services';

import { CycleFilterPrepared, CyclesEditorIdsPrepared, CyclesEditorItem } from './types';

export const addCyclesEditor = (data: Partial<CyclesEditorItem>) =>
  apiClient.post(cyclesPathNames.CREATE, { data });

export const deleteCyclesEditor = (id: number) =>
  apiClient.post(cyclesPathNames.DELETE, {
    data: { id },
  });

export const updateCyclesEditor = (data: Partial<CyclesEditorItem>) =>
  apiClient.post(cyclesPathNames.UPDATE, { data });

export const filterCycles = (data: CycleFilterPrepared) =>
  apiClient.post(cyclesPathNames.GET, { data });

export const getCyclesDescriptions = (data: CyclesEditorIdsPrepared) =>
  apiClient.post(cyclesPathNames.GET_DESCRIPTIONS, { data });
