import { formNames } from 'consts';
import { getFormValues } from 'redux-form';

import { ActionTypeKeys, FilterUserActivitiesAction, GetAuditUsersAction } from './actionType';
import * as api from './api';
import { AuditUserActivitiesFilterPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetAuditUsers = (institutionId: number | string) => GetAuditUsersAction;
export type HandleGetAuditUsers = (institutionId: number | string) => Thunk<void>;

export type FilterAuditUserActivities = (params: Partial<AuditUserActivitiesFilterPrepared>) =>
  FilterUserActivitiesAction;
export type HandleFilterAuditUserActivities = () => Thunk<void>;

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
        await dispatch(getAuditUsers(institutionId));
      },
      dispatch
    );
  };

export const handleFilterAuditUserActivities: HandleFilterAuditUserActivities = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNames.AUDIT_USER_ACTIVITIES_FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAuditUserActivities(preparedValues));
        }
      },
      dispatch
    );
  };
