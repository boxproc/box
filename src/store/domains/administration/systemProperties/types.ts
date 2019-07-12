import { ImmutableArray } from 'seamless-immutable';

export interface AdminSysPropNameDataResp {
  property_name?: string;
}

export interface AdminSysPropsItemResp extends AdminSysPropNameDataResp {
  current_value?: string | number;
  previous_value?: string | number;
  last_datetime?: string;
  locked_flag?: string;
}

export interface AdminSysPropsItem {
  propertyName?: string;
  currentValue?: string | number;
  previousValue?: string | number;
  lastDatetime?: string;
  lockedFlag?: string;
}

export interface AdminSysPropsDataResp {
  system_properties: Array<AdminSysPropsItemResp>;
}

export interface AdminSysPropsData {
  systemProperties: Array<AdminSysPropsItem>;
}

export interface AdminSysPropDataResp {
  system_property: AdminSysPropsItemResp;
}

export interface AdminSysPropsState {
  system_properties: ImmutableArray<AdminSysPropsItemResp>;
  filter_system_properties: AdminSysPropsItem;
}
