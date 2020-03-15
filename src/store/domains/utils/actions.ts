import { Action, } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import config from 'config';
import { modalNamesConst } from 'consts';

import { StoreState } from 'store/StoreState';
import { openModal } from './../modals';
import {
  ActionTypeKeys,
  SetActiveItemIdAction,
  SetActivePagePermissionAction,
  SetActiveTableRowIndexAction,
  SetIsAccessibleFilteringAction,
  SetIsOpenFilterAction,
  StartAutoRefreshAction,
  StopAutoRefreshAction,
} from './actionTypes';

import { MessageResponse } from 'types';
import { stringsUtil } from 'utils';

export type SetActiveTableRowIndex = (index: number) => SetActiveTableRowIndexAction;
export type HandleSetActiveTableRowIndex = (index: number) => void;

export type SetActiveItemId = (id: number | string) => SetActiveItemIdAction;
export type HandleSetActiveItemId = (id: number | string) => void;

export type SetActivePagePermission = (value: string) => SetActivePagePermissionAction;

export type SetIsOpenFilter = (value: boolean) => SetIsOpenFilterAction;

export type SetIsAccessibleFiltering = (value: boolean) => SetIsAccessibleFilteringAction;

export type StartAutoRefresh = () => StartAutoRefreshAction;
export type StopAutoRefresh = () => StopAutoRefreshAction;

export type ResetUtils = () => void;

export type SendNotification = (res: MessageResponse, isCatch?: boolean) =>
  (dispatch: ThunkDispatch<StoreState, {}, Action>) => void;

export const setActiveTableRowIndex: SetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const setActiveItemId: SetActiveItemId = id => ({
  type: ActionTypeKeys.SET_ACTIVE_ITEM_ID,
  payload: id,
});

export const setActivePagePermission: SetActivePagePermission = value => ({
  type: ActionTypeKeys.SET_ACTIVE_PAGE_PERMISSION,
  payload: value,
});

export const setIsOpenFilter: SetIsOpenFilter = value => ({
  type: ActionTypeKeys.SET_IS_OPEN_FILTER,
  payload: value,
});

export const setIsAccessibleFiltering: SetIsAccessibleFiltering = value => ({
  type: ActionTypeKeys.SET_IS_ACCESSIBLE_FILTERING,
  payload: value,
});

export const startAutoRefresh: StartAutoRefresh = () => ({
  type: ActionTypeKeys.START_AUTO_REFRESH,
});

export const stopAutoRefresh: StopAutoRefresh = () => ({
  type: ActionTypeKeys.STOP_AUTO_REFRESH,
});

export const resetUtils: ResetUtils = () => ({
  type: ActionTypeKeys.RESET_UTILS,
});

export const handleSetActiveTableRowIndex: HandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);

export const handleSetActiveItemId: HandleSetActiveItemId = id => setActiveItemId(id);

const getNotification = (
  title: string,
  message: string,
  details?: string,
  statusCode?: string,
  errorCode?: number
) => openModal({
  name: modalNamesConst.MESSAGE,
  payload: { title, message, details, statusCode, errorCode },
});

export const handleSendNotification: SendNotification =
  (res, isCatch = false) =>
    async dispatch => {
      if (isCatch) {
        if (config.isDevelopment) {
          console.log('---res', res);
        }

        if (res && res.body && res.body.response_status) {
          const { statusCode } = res;
          const { error_message, error_description, status_code } = res.body.response_status;

          const errorDescription = error_description
            ? stringsUtil.addNewLines(error_description)
            : '';

          dispatch(getNotification(
            `${statusCode} Error`, // title
            error_message, // message
            errorDescription, // description
            status_code, // status code
            statusCode // error code
          ));
        } else {
          dispatch(getNotification(
            `${(res && res.statusCode) ? res.statusCode : ''} Error`, // title
            (res && res.error && res.error.message) // message
              ? res.error.message.toString()
              : 'An error occurred.'
          ));
        }
      }
    };
