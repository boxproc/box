import { getFormValues, reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames, } from 'consts';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminCycleEditorAction,
  DeleteAdminCycleEditorAction,
  FilterCyclesAction,
  GetAdminCycleEditorAction,
  SetAdminCycleEditorIdAction,
  UpdateAdminCycleEditorAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminCyclesEditorEditableItem,
  AdminCyclesEditorItem,
  CycleFilterParams,
  CycleFilterParamsPrepared
} from './types';
import {
  prepareAdminCyclesEditorValuesUnderscore,
  prepareCyclesFiltersParamsToSend
} from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminCyclesEditor = () => GetAdminCycleEditorAction;
export type HandleGetAdminCyclesEditor = VoidPromiseThunk;

export type AddAdminCyclesEditor = (values: Partial<AdminCyclesEditorItem>) =>
  AddAdminCycleEditorAction;
export type HandleAddAdminCyclesEditor = (values: Partial<AdminCyclesEditorEditableItem>) =>
  Thunk<void>;

export type DeleteAdminCycleEditor = (id: number) => DeleteAdminCycleEditorAction;
export type HandleDeleteAdminCycleEditor = (id: number) => Thunk<void>;

export type UpdateAdminCyclesEditor =
  (propValues: Partial<AdminCyclesEditorItem>) => UpdateAdminCycleEditorAction;
export type HandleUpdateAdminCyclesEditor =
  (propValues: Partial<AdminCyclesEditorEditableItem>) => Thunk<void>;

export type FilterCycles = (params: CycleFilterParamsPrepared) => FilterCyclesAction;
export type HandleFilterCycles = (params: CycleFilterParams) => Thunk<void>;

export type SetAdminCycleEditorId = (id: number) => SetAdminCycleEditorIdAction;
export type HandleSetAdminCycleEditorId = (id: number) => void;

export const getAdminCycleEditor: GetAdminCyclesEditor = () => ({
  type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR,
  payload: api.getAdminCycleEditor(),
});

export const addAdminCyclesEditor: AddAdminCyclesEditor = values => ({
  type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR,
  payload: api.addAdminCyclesEditor(values),
});

export const deleteAdminCyclesEditor: DeleteAdminCycleEditor = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR,
  payload: api.deleteAdminCyclesEditor(id),
  meta: id,
});

export const updateAdminCyclesEditor: UpdateAdminCyclesEditor = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR,
  payload: api.updateAdminCyclesEditor(values),
});

export const setAdminCycleEditorId: SetAdminCycleEditorId = id => ({
  type: ActionTypeKeys.SET_ADMIN_CYCLE_EDITOR_ID,
  payload: id,
});
export const filterCycles: FilterCycles = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR,
  payload: api.filterCycles(params),
});

export const handleGetAdminCyclesEditor: HandleGetAdminCyclesEditor = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);

        apiClient.set('session_id', sessionId);
        const formValues = getFormValues(formNames.CYCLES_EDITOR_FILTER);
        const state = getState();

        if (formValues(state)) {
          const preparedValues = prepareCyclesFiltersParamsToSend(formValues(state));
          await dispatch(filterCycles(preparedValues));
        } else {
          await dispatch(getAdminCycleEditor());
        }
      },
      dispatch
    );
  };

export const handleFilterCycles: HandleFilterCycles = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareCyclesFiltersParamsToSend(params);

        await dispatch(filterCycles(preparedValues));
      },
      dispatch
    );
  };

export const handleAddAdminCyclesEditor: HandleAddAdminCyclesEditor = cycleEditorRecords =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminCyclesEditorValuesUnderscore(cycleEditorRecords);

        await dispatch(addAdminCyclesEditor(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_CYCLE_EDITOR));
        await dispatch(getAdminCycleEditor());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_CYCLE_EDITOR));
      },
      dispatch
    );
  };

export const handleDeleteAdminCyclesEditor: HandleDeleteAdminCycleEditor = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminCyclesEditor(id));
        await dispatch(closeModal(modalNames.EDIT_CYCLE_EDITOR));
      },
      dispatch
    );
  };

export const handleUpdateAdminCyclesEditor: HandleUpdateAdminCyclesEditor = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminCyclesEditorValuesUnderscore(values);

        await dispatch(updateAdminCyclesEditor(preparedValues));
        await dispatch(closeModal(modalNames.EDIT_CYCLE_EDITOR));
        await dispatch(getAdminCycleEditor());
      },
      dispatch
    );
  };

export const handleSetAdminCycleEditorId: HandleSetAdminCycleEditorId = id =>
  setAdminCycleEditorId(id);
