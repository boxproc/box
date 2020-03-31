import { IUiSessionsData } from './types';

import { TApiResponse } from 'types';

export enum ActionTypeKeys {
  FILTER_UI_SESSIONS = 'uiSessions/FILTER_UI_SESSIONS',
  FILTER_UI_SESSIONS_FULFILLED = 'uiSessions/FILTER_UI_SESSIONS_FULFILLED',
  FILTER_UI_SESSIONS_REJECTED = 'uiSessions/FILTER_UI_SESSIONS_REJECTED',

  RESET_UI_SESSIONS = 'uiSessions/FILTER_UI_SESSIONS_REJECTED',
}

export interface IFilterUiSessionsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.FILTER_UI_SESSIONS;
}

export interface IFilterUiSessionsFulfilledAction {
  readonly payload: IUiSessionsData;
  readonly type: ActionTypeKeys.FILTER_UI_SESSIONS_FULFILLED;
}

export interface IFilterUiSessionsRejectedAction {
  readonly payload: TApiResponse;
  readonly type: ActionTypeKeys.FILTER_UI_SESSIONS_REJECTED;
}

export interface IResetUiSessionsAction {
  readonly type: ActionTypeKeys.RESET_UI_SESSIONS;
}

export type TUiSessionsAction =
  | IFilterUiSessionsFulfilledAction
  | IResetUiSessionsAction;
