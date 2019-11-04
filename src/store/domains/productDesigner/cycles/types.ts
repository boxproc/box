import { ImmutableArray } from 'seamless-immutable';

import { SelectValues } from 'types';

interface PlainInfo {
  id: number;
  description: string;
}

export interface CyclesEditorItem extends PlainInfo {
  institution_id: number | string;
  cycle_type: number | string;
  monthly_cycle_first_day: number | string;
  weekly_cycle_first_day: number | string;
  fixed_cycle_number_of_days: number | string;
  status: number | string;
}

export interface CyclesEditorItemPreparedPlain extends PlainInfo {
  monthlyCycleFirstDay: number | string;
  fixedCycleNumberOfDays: number | string;
}

export interface CyclesEditorItemPrepared extends CyclesEditorItemPreparedPlain {
  institutionId: string | number;
  cycleType: string | number;
  status: string | number;
  weeklyCycleFirstDay: number | string;
}

export interface CyclesEditorEditableItem extends CyclesEditorItemPreparedPlain {
  institutionId: SelectValues;
  cycleType: SelectValues;
  status: SelectValues;
  weeklyCycleFirstDay: SelectValues;
}

export interface CycleFilter {
  institutionId?: SelectValues;
  activeStatusFlag?: boolean;
}

export interface CycleFilterPrepared {
  institution_id: number | string;
  status: string;
}

export interface CyclesEditorDataResp {
  cycle_editor: Array<CyclesEditorItem>;
}

export interface CyclesEditorIds {
  institutionId: number | string;
}

export interface CyclesEditorIdsPrepared {
  institution_id: number | string;
}

export interface CyclesDescriptions {
  statement_cycles_descriptions: Array<PlainInfo>;
}

export interface CyclesEditorState {
  cycleEditor: ImmutableArray<CyclesEditorItem>;
  cyclesDescriptions: ImmutableArray<PlainInfo>;
}
