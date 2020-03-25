import { CellInfo } from 'react-table';
import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Response as SuperagentApiResponse } from 'superagent';

import { StoreState } from 'store';

/**
 * I - interface
 * T - type
 */

export type Thunk<R> = ThunkAction<R, StoreState, {}, AnyAction>;
export type VoidPromiseThunk = () => Thunk<Promise<void>>;
export type VoidThunk = () => Thunk<void>;

export interface IResponseStatus {
  response_status: {
    status_code: string;
    error_message?: string;
    error_description?: string;
  };
}

export interface IMessageResponse {
  statusCode: number;
  message: string;
  body?: IResponseStatus;
  error?: {
    message?: string;
  };
}

export type TApiResponse = SuperagentApiResponse;

export interface ITableCellType<T> extends CellInfo {
  value: T;
}

export interface ISelectValue<T = number | string> {
  value: T;
  label: string;
}

export interface IIdNamePair {
  id: number;
  name: string;
}

export interface IContextMenuItem {
  action?: () => void;
  confirmationText?: string;
  confirmationTitle?: string;
  description?: string;
  icon?: string;
  isDisabled?: boolean;
  isDivider?: boolean;
  name: string | number;
  noDataStr?: string;
  shiftCharCount?: number;
  value?: string | number;
  withConfirmation?: boolean;
}

export interface IContextSubMenuItem {
  items?: Array<IContextMenuItem>;
  noDataStr?: string;
  subItems?: Array<IContextSubMenuItem>;
  title: string;
}

export type TContextSubMenu = Array<IContextSubMenuItem>;

export interface ILogData {
  log_file_path?: string;
  log_file: string;
}

export type TChangeFieldValue = (
  fieldName: string,
  formName: string,
  value: string | number | ISelectValue
) => void;
