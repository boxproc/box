import {
  ActionTypeKeys,
  FilterAuditApiCallsAction,
  GetEndpointsByInstitutionIdAction,
} from './actionTypes';
import * as api from './api';
import { AuditApiCallsFilterParams, AuditApiCallsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleFilterAuditApiCalls = (params: Partial<AuditApiCallsFilterParams>) => Thunk<void>;
export type FilterAuditApiCalls = (params: Partial<AuditApiCallsFilterParamsPrepared>) =>
  FilterAuditApiCallsAction;

export type HandleGetEndpointsByInstitutionId = (id: string | number) => Thunk<void>;
export type GetEndpointsByInstitutionId = (id: string | number) =>
  GetEndpointsByInstitutionIdAction;

export const filterAuditApiCalls: FilterAuditApiCalls = params => ({
  type: ActionTypeKeys.FILTER_AUDIT_API_CALLS,
  payload: api.filterAuditApiCalls(params),
});

export const getEndpointsByInstitutionId: GetEndpointsByInstitutionId = id => ({
  type: ActionTypeKeys.GET_ENDPOINTS_BY_INSTITUTION_ID,
  payload: api.getEndpointsByInstitutionId(id),
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

export const handleGetEndpointsByInstitutionId: HandleGetEndpointsByInstitutionId = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getEndpointsByInstitutionId(id));
      },
      dispatch
    );
  };
