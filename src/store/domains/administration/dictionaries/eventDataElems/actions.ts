import {
  ActionTypeKeys,
  FilterAdminEventDataElemsAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminEventDataElemsFilterParams,
  AdminEventDataElemsFilterParamsPrepared,
} from './types';
import { prepareAdminEventDataElemsParams } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterAdminEventDataElems = (params: AdminEventDataElemsFilterParamsPrepared) =>
  FilterAdminEventDataElemsAction;
export type HandleFilterAdminEventDataElems = (params: AdminEventDataElemsFilterParams) =>
  Thunk<void>;

export const filterAdminEventDataElems: FilterAdminEventDataElems = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS,
  payload: api.filterAdminEventDataElems(params),
});

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
