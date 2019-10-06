import {
  ActionTypeKeys,
  CloseAllModalsAction,
  CloseModalAction,
  OpenModalAction,
  SetIsEditModalOpenedAction,
} from './actionTypes';
import { ModalsData } from './types';

export type OpenModal = (data: ModalsData) => OpenModalAction;
export type CloseModal = (modalName: string) => CloseModalAction;
export type CloseAllModals = () => CloseAllModalsAction;
export type SetIsEditModalOpened = (value: boolean) => SetIsEditModalOpenedAction;

export const openModal: OpenModal = data => ({
  type: ActionTypeKeys.OPEN_MODAL,
  payload: data,
});

export const closeModal: CloseModal = modalName => ({
  type: ActionTypeKeys.CLOSE_MODAL,
  payload: modalName,
});

export const closeAllModals: CloseAllModals = () => ({
  type: ActionTypeKeys.CLOSE_ALL_MODALS,
});

export const setIsEditModalOpened: SetIsEditModalOpened = value => ({
  type: ActionTypeKeys.SET_IS_EDIT_MODAL_OPENED,
  payload: value,
});
