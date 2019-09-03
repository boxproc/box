import {
  AdminEventsData,
} from './types';

import { ApiResponse } from 'types';

export enum ActionTypeKeys {
  GET_ADMIN_EVENTS = 'administration/events/GET_ADMIN_EVENTS',
  GET_ADMIN_EVENTS_FULFILLED = 'administration/events/GET_ADMIN_EVENTS_FULFILLED',
  GET_ADMIN_EVENTS_REJECTED = 'administration/events/GET_ADMIN_EVENTS_REJECTED',
}

export interface GetAdminEventsAction {
  readonly payload: Promise<object>;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENTS;
}

export interface GetAdminEventsFulfilledAction {
  readonly payload: AdminEventsData;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENTS_FULFILLED;
}

export interface GetAdminEventsRejectedAction {
  readonly payload: ApiResponse;
  readonly type: ActionTypeKeys.GET_ADMIN_EVENTS_REJECTED;
}

export type AdminEventsActionTypes =
  | GetAdminEventsFulfilledAction;
