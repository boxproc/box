import { CellInfo } from 'react-table';
import { Action, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { Response as SuperagentApiResponse } from 'superagent';

import { StoreState } from 'store';

export type Thunk<R> = ThunkAction<R, StoreState, {}, AnyAction>;

export type VoidPromiseThunk = () => Thunk<Promise<void>>;
export type VoidThunk = () => Thunk<void>;

export interface ResponseStatus {
  status_code: string;
  error_message?: string;
  error_description?: string;
}

export interface ResponseStatusType {
  response_status: ResponseStatus;
}

export interface MessageResponse {
  statusCode: number;
  message: string;
  body?: ResponseStatusType;
  error?: {
    message?: string;
  };
}

export type ApiResponse = SuperagentApiResponse;

export interface PromiseAction<R> extends Action {
  payload: R;
}

export interface PromiseRes<R> {
  action?: PromiseAction<R>;
  value?: R;
}

export interface TableCellType<T> extends CellInfo {
  value: T;
}

export interface KeyValuePair<T = number> {
  key: T;
  value: string;
}

export interface SelectValue<T = number | string> {
  value: T;
  label: string;
}

export interface IdNamePair {
  id: number;
  name: string;
}
