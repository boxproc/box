import {
  ActionTypeKeys,
  CloseModalAction,
  HideNotificationAction,
  OpenModalAction,
  ShowNotificationAction,
} from './actionTypes';
import { ModalsData } from './types';

export type OpenModal = (data: ModalsData) => OpenModalAction;
export type CloseModal = (modalName: string) => CloseModalAction;

export type ShowNotification = (message: string) => ShowNotificationAction;
export type HideNotification = () => HideNotificationAction;

export const openModal: OpenModal = data => ({
  type: ActionTypeKeys.OPEN_MODAL,
  payload: data,
});

export const closeModal: CloseModal = modalName => ({
  type: ActionTypeKeys.CLOSE_MODAL,
  payload: modalName,
});

export const showNotification: ShowNotification = (message) => ({
  type: ActionTypeKeys.SHOW_NOTIFICATION,
  payload: message,
});

export const hideNotification: HideNotification = () => ({
  type: ActionTypeKeys.HIDE_NOTIFICATION,
  payload: '',
});
