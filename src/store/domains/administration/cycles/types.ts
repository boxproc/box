import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

export interface AdminCyclesEditorItemResp {
  id: number;
  institution_id: number;
  description: string;
  cycle_type: string;
  status: string;
  monthly_cycle_first_day: number;
  weekly_cycle_first_day: number | string;
  fixed_cycle_number_of_days: number;
}

export interface AdminCyclesEditorEditableItemId {
  id: number;
}

export interface AdminCyclesEditorEditableItemPrepared extends AdminCyclesEditorEditableItemId {
  institution_id: number | string;
  description: string;
  cycle_type: string;
  status: number | string;
  monthly_cycle_first_day: number | string;
  weekly_cycle_first_day: number | string;
  fixed_cycle_number_of_days: number | string;
}

export interface AdminCyclesEditorItem {
  id: number;
  institutionId: string | number;
  description: string;
  cycleType: string;
  status: string | number;
  monthlyCycleFirstDay: string | number;
  weeklyCycleFirstDay: number | string;
  fixedCycleNumberOfDays: number | string;
}

export interface AdminCyclesEditorEditableItem {
  institutionId?: SelectValues;
  description?: string;
  cycleType?: string;
  status?: SelectValues;
  monthlyCycleFirstDay?: number;
  weeklyCycleFirstDay?: number;
  fixedCycleNumberOfDays?: number;
}

export interface AdminCyclesEditorDataResp extends ResponseStatusType {
  cycle_editor: Array<AdminCyclesEditorItemResp>;
}

export interface AdminCyclesEditorState {
  cycle_editor: ImmutableArray<AdminCyclesEditorItemResp>;
}
