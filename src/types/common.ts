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

interface NotificationObjectResult extends MessageResponse {
  body?: any;
}

export type SendNotification = (res: NotificationObjectResult | string, isCatch?: boolean)
  => (dispatch: ThunkDispatch<StoreState, {}, Action>) => void;

export interface PromiseAction<R> extends Action {
  payload: R;
}

export interface PromiseRes<R> {
  action?: PromiseAction<R>;
  value?: R;
}

export interface NormalizedData<T1 = {}, T2 = {}> {
  entities: T1;
  result: T2;
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

export type HandleEntityRemoval = (id: number) => Thunk<void>;
