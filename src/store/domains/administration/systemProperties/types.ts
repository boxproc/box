import { ImmutableArray } from 'seamless-immutable';

export interface EditableAdminSysProp {
  id?: string | number;
  lockedFlag?: boolean;
  currentValue?: string | number;
}

export interface EditableAdminSysPropPrepared {
  property_name: string | number;
  locked_flag: string;
  current_value: string | number;
}

export interface AdminSysPropFilter {
  id?: string;
}

export interface AdminSysPropFilterPrepared {
  property_name: string | number;
}

export interface AdminSysPropsItemResp {
  property_name: string | number;
  current_value: string | number;
  previous_value: string | number;
  last_datetime: string;
  locked_flag: string;
}

export interface AdminSysPropsItem {
  id: string | number;
  currentValue: string | number;
  previousValue: string | number;
  lastDatetime: string;
  lockedFlag: boolean;
}

export interface AdminSysPropsDataResp {
  system_properties: Array<AdminSysPropsItemResp>;
}

export interface AdminSysPropsState {
  systemProperties: ImmutableArray<AdminSysPropsItemResp>;
}
