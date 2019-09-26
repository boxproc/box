import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterDictionaryEventDataElemsAction } from './actionTypes';
import * as api from './api';
import { DictionaryEventDataElemsFilter, DictionaryEventDataElemsFilterPrepared } from './types';
import { prepareDictionaryEventDataElemsParams } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterDictionaryEventDataElems = (params: DictionaryEventDataElemsFilterPrepared) =>
  FilterDictionaryEventDataElemsAction;
export type HandleFilterDictionaryEventDataElems = () => Thunk<void>;
export type HandleFilterDictionaryEventDataElemsById = (params: DictionaryEventDataElemsFilter) =>
  Thunk<void>;

export const filterDictionaryEventDataElems: FilterDictionaryEventDataElems = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_EVENT_DATA_ELEMS,
  payload: api.filterDictionaryEventDataElems(params),
});

export const handleFilterDictionaryEventDataElems: HandleFilterDictionaryEventDataElems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = prepareDictionaryEventDataElemsParams(formValues(state));

        await dispatch(filterDictionaryEventDataElems(preparedValues));
      },
      dispatch
    );
  };

export const handleFilterDictionaryEventDataElemsById:
  HandleFilterDictionaryEventDataElemsById = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareDictionaryEventDataElemsParams(params);

        await dispatch(filterDictionaryEventDataElems(preparedValues));
      },
      dispatch
    );
  };
