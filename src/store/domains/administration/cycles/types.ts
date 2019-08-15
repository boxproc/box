import { ImmutableArray } from 'seamless-immutable';

import { ResponseStatusType, SelectValues } from 'types';

interface PlainInfo {
  id: number;
  description: string;
}

export interface AdminCyclesEditorItem extends PlainInfo {
  institution_id: number | string;
  cycle_type: number | string;
  monthly_cycle_first_day: number | string;
  weekly_cycle_first_day: number | string;
  fixed_cycle_number_of_days: number;
  status: number | string;
}

export interface AdminCyclesEditorItemPreparedPlain extends PlainInfo {
  monthlyCycleFirstDay: number | string;
  fixedCycleNumberOfDays: number | string;
}

export interface AdminCyclesEditorItemPrepared extends AdminCyclesEditorItemPreparedPlain {
  institutionId: string | number;
  cycleType: string | number;
  status: string | number;
  weeklyCycleFirstDay: number | string;
}

export interface AdminCyclesEditorEditableItem extends AdminCyclesEditorItemPreparedPlain {
  institutionId: SelectValues;
  cycleType: SelectValues;
  status: SelectValues;
  weeklyCycleFirstDay: SelectValues;
}

export interface AdminCyclesEditorDataResp extends ResponseStatusType {
  cycle_editor: Array<AdminCyclesEditorItem>;
}

export interface AdminCyclesEditorState {
  cycleEditor: ImmutableArray<AdminCyclesEditorItem>;
  currentCycleEditorId: null;
}
