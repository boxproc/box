import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';
import * as api from './api';

import { closeModal, isAccessibleFilterSelector } from 'store';
import {
  ActionTypeKeys,
  IAddUserAction,
  IFilterUsersAction,
  IGetUsernamesAction,
  IUpdateUserAction,
} from './actionTypes';
import { IUserData, IUserDetails, IUsersFilterToSend } from './types';
import { prepareDataToSend, prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Filter users action
 */

export type TFilterUsers = (data: Partial<IUsersFilterToSend>) => IFilterUsersAction;
export type THandleFilterUsers = () => Thunk<void>;

export const filterUsers: TFilterUsers = data => ({
  type: ActionTypeKeys.FILTER_USERS,
  payload: api.filterUsers(data),
});

export const handleFilterUsers: THandleFilterUsers = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterUsers(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Add user action
 */

export type TAddUser = (data: Partial<IUserData>) => IAddUserAction;
export type THandleAddUser = (data: Partial<IUserDetails>) => Thunk<void>;

export const addUser: TAddUser = data => ({
  type: ActionTypeKeys.ADD_USER,
  payload: api.addUser(data),
});

export const handleAddUser: THandleAddUser = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        await dispatch(addUser(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_USER));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterUsers());
        }
      },
      dispatch
    );
  };

/**
 * Update user action
 */

export type TUpdateUser = (data: Partial<IUserData>) => IUpdateUserAction;
export type THandleUpdateUser = (data: Partial<IUserDetails>) => Thunk<void>;

export const updateUser: TUpdateUser = data => ({
  type: ActionTypeKeys.UPDATE_USER,
  payload: api.updateUser(data),
});

export const handleUpdateUser: THandleUpdateUser = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateUser(preparedData));
        dispatch(closeModal(modalNamesConst.EDIT_USER));
        await dispatch(handleFilterUsers());
      },
      dispatch
    );
  };

/**
 * Get usernames action
 */

export type TGetUsernames = () => IGetUsernamesAction;
export type THandleGetUsernames = () => Thunk<void>;

export const getUsernames: TGetUsernames = () => ({
  type: ActionTypeKeys.GET_USERNAMES,
  payload: api.getUsernames(),
});

export const handleGetUsernames: THandleGetUsernames = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getUsernames());
      },
      dispatch
    );
  };

/**
 * Reset users action
 */

export type TResetUsers = () => void;

export const resetUsers: TResetUsers = () => ({
  type: ActionTypeKeys.RESET_USERS,
});
