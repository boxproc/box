import { ModalsData } from './types';

export enum ActionTypeKeys {
  OPEN_MODAL = 'modals/OPEN_MODAL',
  CLOSE_MODAL = 'modals/CLOSE_MODAL',

  SHOW_NOTIFICATION = 'modals/SHOW_NOTIFICATION',
  HIDE_NOTIFICATION = 'modals/HIDE_NOTIFICATION',
}

export interface OpenModalAction {
  readonly payload: ModalsData;
  readonly type: ActionTypeKeys.OPEN_MODAL;
}

export interface CloseModalAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.CLOSE_MODAL;
}

export interface ShowNotificationAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.SHOW_NOTIFICATION;
}

export interface HideNotificationAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.HIDE_NOTIFICATION;
}

export type ModalActionTypes =
  | OpenModalAction
  | CloseModalAction
  | ShowNotificationAction
  | HideNotificationAction;
