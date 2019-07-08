import { ImmutableArray } from 'seamless-immutable';

export interface AdminSysPropsItemResp {
  property_name: string;
  current_value: string | number;
  previous_value: string | number;
  last_datetime: string;
  locked_flag: string;
}

export interface AdminSysPropsDataResp {
  system_properties: Array<AdminSysPropsItemResp>;
}

export interface AdminSysPropsItem {
  propertyName: string;
  currentValue: string | number;
  previousValue: string | number;
  lastDatetime: string;
  lockedFlag: string;
}

export interface AdminSysPropsData {
  systemProperties: Array<AdminSysPropsItem>;
}

export interface AdminSysPropsState {
  system_properties: ImmutableArray<AdminSysPropsItemResp>;
}
