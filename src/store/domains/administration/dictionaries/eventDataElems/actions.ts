import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterAdminEventDataElemsAction } from './actionTypes';
import * as api from './api';
import { AdminEventDataElemsFilterParams, AdminEventDataElemsFilterParamsPrepared } from './types';
import { prepareAdminEventDataElemsParams } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterAdminEventDataElems = (params: AdminEventDataElemsFilterParamsPrepared) =>
  FilterAdminEventDataElemsAction;
export type HandleFilterAdminEventDataElems = () => Thunk<void>;
export type HandleFilterAdminEventDataElemsById = (params: AdminEventDataElemsFilterParams) =>
  Thunk<void>;

export const filterAdminEventDataElems: FilterAdminEventDataElems = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS,
  payload: api.filterAdminEventDataElems(params),
});

export const handleFilterAdminEventDataElems: HandleFilterAdminEventDataElems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = prepareAdminEventDataElemsParams(formValues(state));

        await dispatch(filterAdminEventDataElems(preparedValues));
      },
      dispatch
    );
  };

export const handleFilterAdminEventDataElemsById: HandleFilterAdminEventDataElemsById = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminEventDataElemsParams(params);

        await dispatch(filterAdminEventDataElems(preparedValues));
      },
      dispatch
    );
  };
