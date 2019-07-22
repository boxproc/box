import { ImmutableArray } from 'seamless-immutable';
import { SuccessResponseStatusType } from 'types';

export interface EditableAdminSysProp {
  propertyName?: string;
  lockedFlag?: string;
  currentValue?: string | number;
}

export interface EditableAdminSysPropPrepared {
  property_name?: string;
  locked_flag?: string;
  current_value?: string | number;
}

export interface AdminSysPropFilterParams {
  propertyName?: string;
}

export interface AdminSysPropFilterParamsPrepared {
  property_name?: string;
}

export interface AdminSysPropsItemResp {
  property_name?: string;
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

export interface AdminSysPropsDataResp extends SuccessResponseStatusType {
  system_properties: Array<AdminSysPropsItemResp>;
}

export interface AdminSysPropsState {
  systemProperties: ImmutableArray<AdminSysPropsItemResp>;
  systemPropertiesFilterParams: AdminSysPropsItem;
}
