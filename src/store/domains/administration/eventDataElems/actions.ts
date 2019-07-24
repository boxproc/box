import { getFormValues } from 'redux-form';

import { cookiesNames, formNames } from 'consts';

import {
  ActionTypeKeys,
  FilterAdminEventDataElemsAction,
  GetAdminEventDataElemsAction,
} from './actionTypes';
import * as api from './api';

import {
  AdminEventDataElemsFilterParams,
  AdminEventDataElemsFilterParamsPrepared,
} from './types';

import { prepareAdminEventDataElemsParams } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminEventDataElems = () => GetAdminEventDataElemsAction;
export type HandleGetAdminEventDataElems = VoidPromiseThunk;

export type FilterAdminEventDataElems = (params: AdminEventDataElemsFilterParamsPrepared) =>
  FilterAdminEventDataElemsAction;
export type HandleFilterAdminEventDataElems = (params: AdminEventDataElemsFilterParams) =>
  Thunk<void>;

export const getAdminEventDataElems: GetAdminEventDataElems = () => ({
  type: ActionTypeKeys.GET_ADMIN_EVENT_DATA_ELEMS,
  payload: api.getAdminEventDataElems(),
});

export const filterAdminEventDataElems: FilterAdminEventDataElems = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS,
  payload: api.filterAdminEventDataElems(params),
  meta: params,
});

export const handleGetAdminEventDataElems: HandleGetAdminEventDataElems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const formValues = getFormValues(formNames.ADMIN_EVENT_DATA_ELEMS_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = prepareAdminEventDataElemsParams(formValues(state));
          await dispatch(filterAdminEventDataElems(preparedValues));
        } else {
          await dispatch(getAdminEventDataElems());
        }
      },
      dispatch
    );
  };

export const handleFilterAdminEventDataElems: HandleFilterAdminEventDataElems = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminEventDataElemsParams(params);
        await dispatch(filterAdminEventDataElems(preparedValues));
      },
      dispatch
    );
  };
