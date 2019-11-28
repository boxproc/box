import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';
import { selectActiveItemId, selectIsAccessibleFiltering } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddCycleEditorAction,
  DeleteCycleEditorAction,
  FilterCyclesAction,
  GetCyclesDescriptionsAction,
  ResetCyclesDescriptionsAction,
  UpdateCycleEditorAction,
} from './actionTypes';
import * as api from './api';
import {
  CycleFilterPrepared,
  CyclesEditorEditableItem,
  CyclesEditorIds,
  CyclesEditorIdsPrepared,
  CyclesEditorItem
} from './types';
import {
  prepareCyclesEditorValuesToSend,
  prepareCyclesFiltersParamsToSend,
  prepareIdsToGetDesc,
} from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type AddCyclesEditor = (values: Partial<CyclesEditorItem>) => AddCycleEditorAction;
export type HandleAddCyclesEditor = (values: Partial<CyclesEditorEditableItem>) => Thunk<void>;

export type DeleteCycleEditor = (id: number) => DeleteCycleEditorAction;
export type HandleDeleteCycleEditor = () => Thunk<void>;

export type UpdateCyclesEditor = (values: Partial<CyclesEditorItem>) => UpdateCycleEditorAction;
export type HandleUpdateCyclesEditor = (values: Partial<CyclesEditorEditableItem>) =>
  Thunk<void>;

export type FilterCycles = (params: CycleFilterPrepared) => FilterCyclesAction;
export type HandleFilterCycles = () => Thunk<void>;

export type GetCyclesDescriptions = (ids: CyclesEditorIdsPrepared) => GetCyclesDescriptionsAction;
export type HandleGetCyclesDescriptions  = (ids: CyclesEditorIds) => Thunk<void>;

export type ResetCyclesDescriptions = () => ResetCyclesDescriptionsAction;

export type ResetCycles = () => void;

export const addCyclesEditor: AddCyclesEditor = values => ({
  type: ActionTypeKeys.ADD_CYCLE_EDITOR,
  payload: api.addCyclesEditor(values),
});

export const deleteCyclesEditor: DeleteCycleEditor = id => ({
  type: ActionTypeKeys.DELETE_CYCLE_EDITOR,
  payload: api.deleteCyclesEditor(id),
  meta: id,
});

export const updateCyclesEditor: UpdateCyclesEditor = values => ({
  type: ActionTypeKeys.UPDATE_CYCLE_EDITOR,
  payload: api.updateCyclesEditor(values),
});

export const filterCycles: FilterCycles = params => ({
  type: ActionTypeKeys.FILTER_CYCLES_EDITOR,
  payload: api.filterCycles(params),
});

export const getCyclesDescriptions: GetCyclesDescriptions = ids => ({
  type: ActionTypeKeys.GET_STATEMENTS_DESCRIPTIONS,
  payload: api.getCyclesDescriptions(ids),
});

export const resetCyclesDescriptions: ResetCyclesDescriptions = () => ({
  type: ActionTypeKeys.RESET_STATEMENTS_DESCRIPTIONS,
});

export const resetCycles: ResetCycles = () => ({
  type: ActionTypeKeys.RESET_CYCLES,
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

export const handleAddCyclesEditor: HandleAddCyclesEditor = cycleEditorRecords =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareCyclesEditorValuesToSend(cycleEditorRecords);
        const state = getState();
        const isAccessibleFiltering = selectIsAccessibleFiltering(state);

        await dispatch(addCyclesEditor(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_CYCLE_EDITOR));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterCycles());
        }
      },
      dispatch
    );
  };

export const handleDeleteCyclesEditor: HandleDeleteCycleEditor = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteCyclesEditor(id));
        dispatch(closeModal(modalNamesConst.EDIT_CYCLE_EDITOR));
        await dispatch(handleFilterCycles());
      },
      dispatch
    );
  };

export const handleUpdateCyclesEditor: HandleUpdateCyclesEditor = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareCyclesEditorValuesToSend(values);

        await dispatch(updateCyclesEditor(preparedValues));
        dispatch(closeModal(modalNamesConst.EDIT_CYCLE_EDITOR));
        await dispatch(handleFilterCycles());
      },
      dispatch
    );
  };

export const handleGetCyclesDescriptions: HandleGetCyclesDescriptions = ids =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const prepared = prepareIdsToGetDesc(ids);

        if (ids.institutionId) {
          await dispatch(getCyclesDescriptions(prepared));
        } else {
          dispatch(resetCyclesDescriptions());
        }
      },
      dispatch
    );
  };
