import { ModalsData } from './types';

export enum ActionTypeKeys {
  OPEN_MODAL = 'modals/OPEN_MODAL',
  CLOSE_MODAL = 'modals/CLOSE_MODAL',
  CLOSE_ALL_MODALS = 'modals/CLOSE_ALL_MODALS',
}

export interface OpenModalAction {
  readonly payload: ModalsData;
  readonly type: ActionTypeKeys.OPEN_MODAL;
}

export interface CloseModalAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.CLOSE_MODAL;
}

export interface CloseAllModalsAction {
  readonly type: ActionTypeKeys.CLOSE_ALL_MODALS;
}

export type ModalActionTypes =
  | OpenModalAction
  | CloseModalAction
  | CloseAllModalsAction;
