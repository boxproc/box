export enum ActionTypeKeys {
   OPEN_MODAL = 'modals/OPEN_MODAL',
   CLOSE_MODAL = 'modals/CLOSE_MODAL',
}

export interface OpenModalAction {
  readonly payload: any;
  readonly type: ActionTypeKeys.OPEN_MODAL;
}

export interface CloseModalAction {
  readonly payload: string;
  readonly type: ActionTypeKeys.CLOSE_MODAL;
}

export type ModalActionTypes =
  | OpenModalAction
  | CloseModalAction;
