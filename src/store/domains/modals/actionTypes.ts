import { IModalsData } from './types';

export enum ActionTypeKeys {
  OPEN_MODAL = 'modals/OPEN_MODAL',
  CLOSE_MODAL = 'modals/CLOSE_MODAL',
  CLOSE_ALL_MODALS = 'modals/CLOSE_ALL_MODALS',
}

export interface IOpenModalAction {
  readonly payload: IModalsData;
  readonly type: ActionTypeKeys.OPEN_MODAL;
}

export interface ICloseModalAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.CLOSE_MODAL;
}

export interface ICloseAllModalsAction {
  readonly type: ActionTypeKeys.CLOSE_ALL_MODALS;
}

export type ModalActionTypes =
  | IOpenModalAction
  | ICloseModalAction
  | ICloseAllModalsAction;
