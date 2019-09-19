import {
  ActionTypeKeys,
  FilterAuditApiCallsAction,
  SetAuditApiCallIdAction,
} from './actionTypes';
import * as api from './api';
import { AuditApiCallsFilterParams, AuditApiCallsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleFilterAuditApiCalls = (params: Partial<AuditApiCallsFilterParams>) => Thunk<void>;
export type FilterAuditApiCalls = (params: Partial<AuditApiCallsFilterParamsPrepared>) =>
  FilterAuditApiCallsAction;

export type SetAuditApiCallId = (id: number) => SetAuditApiCallIdAction;
export type HandleSetAuditApiCallId = (id: number) => void;

export const filterAuditApiCalls: FilterAuditApiCalls = params => ({
  type: ActionTypeKeys.FILTER_AUDIT_API_CALLS,
  payload: api.filterAuditApiCalls(params),
});

export const setAuditApiCallId: SetAuditApiCallId = id => ({
  type: ActionTypeKeys.SET_AUDIT_API_CALL_ID,
  payload: { id },
});

export const handleFilterAuditApiCalls: HandleFilterAuditApiCalls = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedParams = preparedFilterParamsToSend(params);

        await dispatch(filterAuditApiCalls(preparedParams));
      },
      dispatch
    );
  };

export const handleSetAuditApiCallId: HandleSetAuditApiCallId = id =>
  setAuditApiCallId(id);
