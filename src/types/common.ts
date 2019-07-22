import { CellInfo } from 'react-table';
import { Action, AnyAction } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { ImmutableArray } from 'seamless-immutable';
import { Response as SuperagentApiResponse } from 'superagent';

import { StoreState } from 'store/StoreState';

export type Thunk<R> = ThunkAction<R, StoreState, {}, AnyAction>;

export type VoidPromiseThunk = () => Thunk<Promise<void>>;
export type VoidThunk = () => Thunk<void>;

export interface MessageResponse {
  statusCode: number;
  message: string;
}

export type ApiResponse = SuperagentApiResponse;

export type SendNotification = (res: MessageResponse | any, isCatch?: boolean)
  => (dispatch: ThunkDispatch<StoreState, {}, Action>) => void;

export interface PromiseAction<R> extends Action {
  payload: R;
}

export interface PromiseRes<R> {
  action?: PromiseAction<R>;
  value?: R;
}

export type toMutable<T> = T extends ImmutableArray<infer U> ? Array<U> : T;

export type toMutableInterface<T> = { [K in keyof T]: toMutable<T[K]> };

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export interface TableCell<T> extends CellInfo {
  value: T;
}

export interface KeyValuePair<T = number> {
  key: T;
  value: string;
}

export interface ParsedSelectValues<T = number | string> {
  value: T;
  label: string;
}

export interface StatusCode {
  status_code: number;
}

export interface SuccessResponseStatusType {
  response_status: StatusCode;
}
