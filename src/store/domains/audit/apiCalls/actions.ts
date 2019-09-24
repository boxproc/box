import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  FilterAuditApiCallsAction,
  GetDetailsAuditApiCallsAction,
} from './actionTypes';
import * as api from './api';
import { AuditApiCallsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type HandleFilterAuditApiCalls = () => Thunk<void>;
export type FilterAuditApiCalls = (params: Partial<AuditApiCallsFilterParamsPrepared>) =>
  FilterAuditApiCallsAction;

export type HandleGetDetailsAuditApiCalls = () => Thunk<void>;
export type GetDetailsAuditApiCalls = (id: number) => GetDetailsAuditApiCallsAction;

export const filterAuditApiCalls: FilterAuditApiCalls = params => ({
  type: ActionTypeKeys.FILTER_AUDIT_API_CALLS,
  payload: api.filterAuditApiCalls(params),
});

export const getDetailsAuditApiCalls: GetDetailsAuditApiCalls = id => ({
  type: ActionTypeKeys.GET_DETAILS_AUDIT_API_CALLS,
  payload: api.getDetailsAuditApiCalls({ id }),
});

export const handleFilterAuditApiCalls: HandleFilterAuditApiCalls = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const formValues = getFormValues(formNamesConst.FILTER);
        const preparedParams = preparedFilterParamsToSend(formValues(state));

        await dispatch(filterAuditApiCalls(preparedParams));
      },
      dispatch
    );
  };

export const handleGetDetailsAuditApiCalls: HandleGetDetailsAuditApiCalls = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const apiCallId = selectActiveItemId(state);

        await dispatch(getDetailsAuditApiCalls(apiCallId));
      },
      dispatch
    );
  };
