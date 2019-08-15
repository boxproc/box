import { cookiesNames } from 'consts';

import { ActionTypeKeys, FilterUserActivitiesAction, GetAuditUsersAction } from './actionType';
import * as api from './api';
import { AuditUserActivitiesFilter, AuditUserActivitiesFilterPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { apiClient } from 'services';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAuditUsers = (institutionId: number | string) => GetAuditUsersAction;
export type HandleGetAuditUsers = (institutionId: number | string) => Thunk<void>;

export type FilterAuditUserActivities = (params: Partial<AuditUserActivitiesFilterPrepared>) =>
  FilterUserActivitiesAction;
export type HandleFilterAuditUserActivities = (params: Partial<AuditUserActivitiesFilter>) =>
  Thunk<void>;

export const getAuditUsers: GetAuditUsers = institutionId => ({
  type: ActionTypeKeys.GET_AUDIT_USERS,
  payload: api.getAuditUsers(institutionId),
});

export const filterAuditUserActivities: FilterAuditUserActivities = filterParams => ({
  type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITIES,
  payload: api.filterAuditUserActivities(filterParams),
});

export const handleGetAuditUsers: HandleGetAuditUsers = institutionId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getAuditUsers(institutionId));
      },
      dispatch
    );
  };

export const handleFilterAuditUserActivities: HandleFilterAuditUserActivities = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterAuditUserActivities(preparedValues));
      },
      dispatch
    );
  };
