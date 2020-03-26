import {
  ActionTypeKeys,
  ICloseAllModalsAction,
  ICloseModalAction,
  IOpenModalAction,
} from './actionTypes';
import { IModalsData } from './types';

export type TOpenModal = (data: IModalsData) => IOpenModalAction;
export type TCloseModal = (modalName: string) => ICloseModalAction;
export type TCloseAllModals = () => ICloseAllModalsAction;

export const openModal: TOpenModal = data => ({
  type: ActionTypeKeys.OPEN_MODAL,
  payload: data,
});

export const closeModal: TCloseModal = modalName => ({
  type: ActionTypeKeys.CLOSE_MODAL,
  payload: modalName,
});

export const closeAllModals: TCloseAllModals = () => ({
  type: ActionTypeKeys.CLOSE_ALL_MODALS,
});
