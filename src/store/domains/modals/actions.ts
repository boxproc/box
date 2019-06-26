import {
  ActionTypeKeys,
  CloseModalAction,
  OpenModalAction,
} from './actionTypes';

export type OpenModal = (modalName: string) => OpenModalAction;
export type CloseModal = (modalName: string) => CloseModalAction;

export const openModal: OpenModal = param => ({
  type: ActionTypeKeys.OPEN_MODAL,
  payload: param,
});

export const closeModal: CloseModal = param => ({
  type: ActionTypeKeys.CLOSE_MODAL,
  payload: param,
});
