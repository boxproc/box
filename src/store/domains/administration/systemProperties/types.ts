import { ImmutableArray } from 'seamless-immutable';

export interface AdminSysPropsItemResp {
  property_name: string;
  current_value: string;
  previous_value: string;
  last_datetime: string;
  locked_flag: string;
}

export interface AdminSysPropsDataResp {
  system_properties: Array<AdminSysPropsItemResp>;
}

export interface AdminSysPropsItem {
  propertyName: string;
  currentValue: string;
  previousValue: string;
  lastDatetime: string;
  lockedFlag: string;
}

export interface AdminSysPropsData {
  systemProperties: Array<AdminSysPropsItem>;
}

export interface AdminSysPropsState {
  system_properties: ImmutableArray<AdminSysPropsItemResp>;
}
