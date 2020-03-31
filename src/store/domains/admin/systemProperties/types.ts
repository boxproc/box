import { ImmutableArray } from 'seamless-immutable';

export interface ISysPropData {
  property_name: string | number;
  current_value: string | number;
  previous_value: string | number;
  last_datetime: string;
  locked_flag: string;
}

export interface ISysPropsData {
  system_properties: Array<ISysPropData>;
}

export interface ISysProp {
  id: string | number;
  currentValue: string | number;
  previousValue: string | number;
  lastDatetime: string;
  lockedFlag: boolean;
}

/** Editable system property interfaces */

export interface IEditableSysProp {
  id?: string | number;
  lockedFlag?: boolean;
  currentValue?: string | number;
}

export interface IEditableSysPropToSend {
  property_name: string | number;
  locked_flag: string;
  current_value: string | number;
}

/** System properties filter interfaces */

export interface ISysPropFilter {
  id?: string;
}

export interface ISysPropFilterToSend {
  property_name: string | number;
}

/** System properties state interface */
export interface ISysPropsState {
  sysProps: ImmutableArray<ISysPropData>;
}
