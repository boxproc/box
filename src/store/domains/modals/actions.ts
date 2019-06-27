import {
  ActionTypeKeys,
  CloseModalAction,
  OpenModalAction,
} from './actionTypes';
import { ModalsData } from './types';

export type OpenModal = (data: ModalsData) => OpenModalAction;
export type CloseModal = (modalName: string) => CloseModalAction;

export const openModal: OpenModal = data => ({
  type: ActionTypeKeys.OPEN_MODAL,
  payload: data,
});

export const closeModal: CloseModal = modalName => ({
  type: ActionTypeKeys.CLOSE_MODAL,
  payload: modalName,
});
