import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemsConst } from 'consts';

import {
  ActionTypeKeys,
  IFilterUsersActivityAction,
  IFilterUsersActivityByIdAction,
  IGetUsersActivityUsersAction,
} from './actionTypes';
import * as api from './api';
import { IUserId, IUsersActivityFilter, IUsersActivityFilterToSend } from './types';
import { prepareFilterToSend } from './utils';

import { setIsOpenFilter } from 'store';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

export type TGetUsersActivityUsers = (institutionId: number | string) =>
  IGetUsersActivityUsersAction;
export type THandleGetUsersActivityUsers = (institutionId: number | string) => Thunk<void>;

export type TFilterUsersActivity = (data: Partial<IUsersActivityFilterToSend>) =>
  IFilterUsersActivityAction;
export type THandleFilterUsersActivity = () => Thunk<void>;
export type THandleFilterUsersActivityByData = (data: IUsersActivityFilter) => Thunk<void>;

export type TFilterUserById = (id: IUserId) => IFilterUsersActivityByIdAction;
export type THandleFilterUserById = (id: IUserId) => Thunk<void>;

export type TResetUsersActivity = () => void;

export const getUsersActivityUsers: TGetUsersActivityUsers = institutionId => ({
  type: ActionTypeKeys.GET_USERS,
  payload: api.getUsersActivityUsers(institutionId),
});

export const filterUsersActivity: TFilterUsersActivity = filter => ({
  type: ActionTypeKeys.FILTER_USERS_ACTIVITY,
  payload: api.filterUsersActivity(filter),
});

export const filterUsersActivityById: TFilterUserById = data => ({
  type: ActionTypeKeys.FILTER_USERS_ACTIVITY_BY_ID,
  payload: api.filterUsersActivityById(data),
});

export const resetUsersActivity: TResetUsersActivity = () => ({
  type: ActionTypeKeys.RESET_USERS_ACTIVITY,
});

export const handleGetUsersActivityUsers: THandleGetUsersActivityUsers = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsersActivityUsers(institutionId));
      },
      dispatch
    );
  };

export const handleFilterUsersActivity: THandleFilterUsersActivity = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterUsersActivity(preparedData));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdUsersActivity: THandleFilterUserById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.USERS_ACTIVITY}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.USERS_ACTIVITY}`));
        await dispatch(filterUsersActivityById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

export const handleFilterUsersActivityByData: THandleFilterUsersActivityByData = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareFilterToSend(data);

        if (preparedData) {
          await dispatch(filterUsersActivity(preparedData));
        }
      },
      dispatch
    );
  };
