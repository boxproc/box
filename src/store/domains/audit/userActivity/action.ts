import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterUserActivityAction, GetAuditUsersAction } from './actionType';
import * as api from './api';
import { AuditUserActivityFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetAuditUsers = (institutionId: number | string) => GetAuditUsersAction;
export type HandleGetAuditUsers = (institutionId: number | string) => Thunk<void>;

export type FilterAuditUserActivity = (params: Partial<AuditUserActivityFilterPrepared>) =>
  FilterUserActivityAction;
export type HandleFilterAuditUserActivity = () => Thunk<void>;

export const getAuditUsers: GetAuditUsers = institutionId => ({
  type: ActionTypeKeys.GET_AUDIT_USERS,
  payload: api.getAuditUsers(institutionId),
});

export const filterAuditUserActivity: FilterAuditUserActivity = Filter => ({
  type: ActionTypeKeys.FILTER_AUDIT_USER_ACTIVITY,
  payload: api.filterAuditUserActivity(Filter),
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
