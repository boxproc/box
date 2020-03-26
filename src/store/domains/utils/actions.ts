import { Action, } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import config from 'config';
import { modalNamesConst } from 'consts';

import { StoreState } from 'store';
import { openModal } from './../modals';
import {
  ActionTypeKeys,
  ISetActiveItemIdAction,
  ISetActivePagePermissionAction,
  ISetActiveTableRowIndexAction,
  ISetIsAccessibleFilteringAction,
  ISetIsOpenFilterAction,
  IStartAutoRefreshAction,
  IStopAutoRefreshAction,
} from './actionTypes';

import { IMessageResponse } from 'types';
import { stringsUtil } from 'utils';

/**
 * Set active table row index util action
 */

export type TSetActiveTableRowIndex = (index: number) => ISetActiveTableRowIndexAction;
export type THandleSetActiveTableRowIndex = (index: number) => void;

export const setActiveTableRowIndex: TSetActiveTableRowIndex = index => ({
  type: ActionTypeKeys.SET_ACTIVE_TABLE_ROW_INDEX,
  payload: index,
});

export const handleSetActiveTableRowIndex: THandleSetActiveTableRowIndex = index =>
  setActiveTableRowIndex(index);

/**
 * Set active item ID util action
 */

export type TSetActiveItemId = (id: number | string) => ISetActiveItemIdAction;
export type THandleSetActiveItemId = (id: number | string) => void;

export const setActiveItemId: TSetActiveItemId = id => ({
  type: ActionTypeKeys.SET_ACTIVE_ITEM_ID,
  payload: id,
});

export const handleSetActiveItemId: THandleSetActiveItemId = id => setActiveItemId(id);

/**
 * Set permission for active page util action
 */

export type TSetActivePagePermission = (value: string) => ISetActivePagePermissionAction;

export const setActivePagePermission: TSetActivePagePermission = value => ({
  type: ActionTypeKeys.SET_ACTIVE_PAGE_PERMISSION,
  payload: value,
});

/**
 * Set opening filter util action
 */

export type TSetIsOpenFilter = (value: boolean) => ISetIsOpenFilterAction;

export const setIsOpenFilter: TSetIsOpenFilter = value => ({
  type: ActionTypeKeys.SET_IS_OPEN_FILTER,
  payload: value,
});

/**
 * Set accessible filtering util action
 */

export type TSetIsAccessibleFiltering = (value: boolean) => ISetIsAccessibleFilteringAction;

export const setIsAccessibleFiltering: TSetIsAccessibleFiltering = value => ({
  type: ActionTypeKeys.SET_IS_ACCESSIBLE_FILTERING,
  payload: value,
});

/**
 * Stop / Start auto refresh util actions
 */

export type TStartAutoRefresh = () => IStartAutoRefreshAction;

export const startAutoRefresh: TStartAutoRefresh = () => ({
  type: ActionTypeKeys.START_AUTO_REFRESH,
});

export type TStopAutoRefresh = () => IStopAutoRefreshAction;

export const stopAutoRefresh: TStopAutoRefresh = () => ({
  type: ActionTypeKeys.STOP_AUTO_REFRESH,
});

/**
 * Reset utils action
 */

export type TResetUtils = () => void;

export const resetUtils: TResetUtils = () => ({
  type: ActionTypeKeys.RESET_UTILS,
});

/**
 * Notification action
 */

export type TSendNotification = (res: IMessageResponse, isCatch?: boolean) =>
  (dispatch: ThunkDispatch<StoreState, {}, Action>) => void;

interface INotification {
  title: string;
  message: string;
  details?: string;
  statusCode?: string;
  errorCode?: number;
}

const getNotification = ({
  title,
  message,
  details,
  statusCode,
  errorCode,
}: INotification) => openModal({
  name: modalNamesConst.MESSAGE,
  payload: { title, message, details, statusCode, errorCode },
});

export const handleSendNotification: TSendNotification =
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

          dispatch(getNotification({
            title: `${statusCode} Error`,
            message: error_message,
            details: errorDescription,
            statusCode: status_code,
            errorCode: statusCode,
          }));
        } else {
          dispatch(getNotification({
            title: `${(res && res.statusCode) ? res.statusCode : ''} Error`,
            message: (res && res.error && res.error.message)
              ? res.error.message.toString()
              : 'An error occurred.',
          }));
        }
      }
    };
