import { push } from 'connected-react-router';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, uiItemConsts } from 'consts';

import {
  ActionTypeKeys,
  FilterUserActivityAction,
  FilterUserActivityByIdAction,
  GetAuditUsersAction
} from './actionTypes';
import * as api from './api';
import { AuditUserActivityFilter, AuditUserActivityFilterPrepared, UserId } from './types';
import { preparedFilterToSend } from './utils';

import { setIsOpenFilter } from 'store/domains/utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';

export type GetAuditUsers = (institutionId: number | string) => GetAuditUsersAction;
export type HandleGetAuditUsers = (institutionId: number | string) => Thunk<void>;

export type FilterAuditUserActivity = (params: Partial<AuditUserActivityFilterPrepared>) =>
  FilterUserActivityAction;
export type HandleFilterAuditUserActivity = () => Thunk<void>;
export type HandleFilterAuditUserActivityByData = (data: AuditUserActivityFilter) => Thunk<void>;

export type FilterAuditUserById = (id: UserId) => FilterUserActivityByIdAction;
export type HandleFilterAuditUserById = (id: UserId) => Thunk<void>;

export type ResetUserActivity = () => void;

export const getAuditUsers: GetAuditUsers = institutionId => ({
  type: ActionTypeKeys.GET_AUDIT_USERS,
  payload: api.getAuditUsers(institutionId),
});

export const filterAuditUserActivity: FilterAuditUserActivity = filter => ({
  type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY,
  payload: api.filterAuditUserActivity(filter),
});

export const filterAuditUserActivityById: FilterAuditUserById = data => ({
  type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY_BY_ID,
  payload: api.filterAuditUserActivityById(data),
});

export const resetUserActivity: ResetUserActivity = () => ({
  type: ActionTypeKeys.RESET_USER_ACTIVITY,
});

export const handleGetAuditUsers: HandleGetAuditUsers = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAuditUsers(institutionId));
      },
      dispatch
    );
  };

export const handleFilterAuditUserActivity: HandleFilterAuditUserActivity = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAuditUserActivity(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleFilterByIdAuditUserActivity: HandleFilterAuditUserById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemConsts.AUDIT_USER_ACTIVITY}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemConsts.AUDIT_USER_ACTIVITY}`));
        await dispatch(filterAuditUserActivityById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

export const handleFilterAuditUserActivityByData: HandleFilterAuditUserActivityByData = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterToSend(data);

        if (preparedValues) {
          await dispatch(filterAuditUserActivity(preparedValues));
        }
      },
      dispatch
    );
  };
