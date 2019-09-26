import { getFormValues, reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';
import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddAdminCycleEditorAction,
  DeleteAdminCycleEditorAction,
  FilterCyclesAction,
  UpdateAdminCycleEditorAction,
} from './actionTypes';
import * as api from './api';
import {
  AdminCyclesEditorEditableItem,
  AdminCyclesEditorItem,
  CycleFilterPrepared
} from './types';
import {
  prepareAdminCyclesEditorValuesToSend,
  prepareCyclesFiltersParamsToSend
} from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type AddAdminCyclesEditor = (values: Partial<AdminCyclesEditorItem>) =>
  AddAdminCycleEditorAction;
export type HandleAddAdminCyclesEditor = (values: Partial<AdminCyclesEditorEditableItem>) =>
  Thunk<void>;

export type DeleteAdminCycleEditor = (id: number) => DeleteAdminCycleEditorAction;
export type HandleDeleteAdminCycleEditor = () => Thunk<void>;

export type UpdateAdminCyclesEditor =
  (propValues: Partial<AdminCyclesEditorItem>) => UpdateAdminCycleEditorAction;
export type HandleUpdateAdminCyclesEditor =
  (propValues: Partial<AdminCyclesEditorEditableItem>) => Thunk<void>;

export type FilterCycles = (params: CycleFilterPrepared) => FilterCyclesAction;
export type HandleFilterCycles = () => Thunk<void>;

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

export const filterCycles: FilterCycles = params => ({
  type: ActionTypeKeys.FILTER_ADMIN_CYCLES_EDITOR,
  payload: api.filterCycles(params),
});

export const handleFilterCycles: HandleFilterCycles = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = prepareCyclesFiltersParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterCycles(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleAddAdminCyclesEditor: HandleAddAdminCyclesEditor = cycleEditorRecords =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminCyclesEditorValuesToSend(cycleEditorRecords);

        await dispatch(addAdminCyclesEditor(preparedValues));
        await dispatch(closeModal(modalNamesConst.ADD_ADMIN_CYCLE_EDITOR));
        await dispatch(handleFilterCycles());
        await dispatch(resetForm(formNamesConst.DEFINE_ADMIN_CYCLE_EDITOR));
      },
      dispatch
    );
  };

export const handleDeleteAdminCyclesEditor: HandleDeleteAdminCycleEditor = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteAdminCyclesEditor(id));
        await dispatch(closeModal(modalNamesConst.EDIT_CYCLE_EDITOR));
        await dispatch(handleFilterCycles());
      },
      dispatch
    );
  };

export const handleUpdateAdminCyclesEditor: HandleUpdateAdminCyclesEditor = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminCyclesEditorValuesToSend(values);

        await dispatch(updateAdminCyclesEditor(preparedValues));
        await dispatch(closeModal(modalNamesConst.EDIT_CYCLE_EDITOR));
        await dispatch(handleFilterCycles());
      },
      dispatch
    );
  };
