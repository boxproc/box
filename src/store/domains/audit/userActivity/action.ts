// tslint:disable-next-line: max-line-length

import { cookiesNames } from 'consts';
import { apiClient } from 'services';
import { VoidPromiseThunk } from 'types';
import { cookiesUtil, errorDecoratorUtil } from 'utils';
import { ActionTypeKeys, GetAuditUserActivityAction } from './actionType';

import * as api from './api';

export type GetAuditUserActivity = () => GetAuditUserActivityAction;
export type HandleGetAuditUserActivity = VoidPromiseThunk;

export const getAuditUserActivity: GetAuditUserActivity = () => ({
    type: ActionTypeKeys.GET_AUDIT_USER_ACTIVITY,
    payload: api.getAuditUserActivity(),
  });

export const handleGetAuditUserActivity: HandleGetAuditUserActivity = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        await dispatch(getAuditUserActivity());
      },
      dispatch
    );
  };
