import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { activeItemIdSelector } from 'store';
import {
  ActionTypeKeys,
  IFilterApiCallsAction,
  IGetDetailsApiCallsAction,
} from './actionTypes';
import * as api from './api';
import { IApiCallsFilterToSend } from './types';
import { prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type THandleFilterApiCalls = () => Thunk<void>;
export type TFilterApiCalls = (data: Partial<IApiCallsFilterToSend>) => IFilterApiCallsAction;

export type THandleGetDetailsApiCalls = () => Thunk<void>;
export type TGetDetailsApiCalls = (id: number) => IGetDetailsApiCallsAction;

export type TResetApiCalls = () => void;

export const filterApiCalls: TFilterApiCalls = data => ({
  type: ActionTypeKeys.FILTER_API_CALLS,
  payload: api.filterApiCalls(data),
});

export const getDetailsApiCalls: TGetDetailsApiCalls = id => ({
  type: ActionTypeKeys.GET_DETAILS_API_CALLS,
  payload: api.getDetailsApiCalls({ id }),
});

export const resetApiCalls: TResetApiCalls = () => ({
  type: ActionTypeKeys.RESET_API_CALLS,
});

export const handleFilterApiCalls: THandleFilterApiCalls = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const formValues = getFormValues(formNamesConst.FILTER);
        const preparedParams = prepareFilterToSend(formValues(state));

        await dispatch(filterApiCalls(preparedParams));
      },
      dispatch
    );
  };

export const handleGetDetailsApiCalls: THandleGetDetailsApiCalls = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const apiCallId = activeItemIdSelector(state);

        await dispatch(getDetailsApiCalls(apiCallId));
      },
      dispatch
    );
  };
