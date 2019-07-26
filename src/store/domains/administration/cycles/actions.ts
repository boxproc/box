import { cookiesNames, formNames, modalNames, } from 'consts';
import { reset as resetForm } from 'redux-form';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminCycleEditorAction,
  DeleteAdminCycleEditorAction,
  GetAdminCycleEditorAction,
  UpdateAdminCycleEditorAction,
} from './actionTypes';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { prepareAdminCyclesEditorValuesUnderscore } from './utils';

import { AdminCyclesEditorEditableItem, AdminCyclesEditorEditableItemPrepared } from './types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminCyclesEditor = () => GetAdminCycleEditorAction;
export type HandleGetAdminCyclesEditor = VoidPromiseThunk;

export type AddAdminCyclesEditor = (values: AdminCyclesEditorEditableItemPrepared) =>
AddAdminCycleEditorAction;
export type HandleAddAdminCyclesEditor = (values: AdminCyclesEditorEditableItem) =>
  Thunk<void>;

export type DeleteAdminCycleEditor = (id: string | number) => DeleteAdminCycleEditorAction;
export type HandleDeleteAdminCycleEditor = (id: string | number) => Thunk<void>;

export type UpdateAdminCyclesEditor = (propValues: AdminCyclesEditorEditableItemPrepared) =>
UpdateAdminCycleEditorAction;
export type HandleUpdateAdminCyclesEditor =
 (propValues: AdminCyclesEditorEditableItem) => Thunk<void>;

export const getAdminCycleEditor: GetAdminCyclesEditor = () => ({
  type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR,
  payload: api.getAdminCycleEditor(),
});

export const addAdminCyclesEditor: AddAdminCyclesEditor = values => ({
  type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR,
  payload: api.addAdminCyclesEditor(values),
  meta: values,
});

export const deleteAdminCyclesEditor: DeleteAdminCycleEditor = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_CYCLE_EDITOR,
  payload: api.deleteAdminCyclesEditor(id),
  meta: id,
});

export const updateAdminCyclesEditor: UpdateAdminCyclesEditor = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_CYCLE_EDITOR,
  payload: api.updateAdminCyclesEditor(values),
  meta: values,
});

export const handleGetAdminCyclesEditor: HandleGetAdminCyclesEditor = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);
        await dispatch(getAdminCycleEditor());
      },
      dispatch
    );
  };

export const handleAddAdminCyclesEditor: HandleAddAdminCyclesEditor = cycleEditorRecords =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareAdminCyclesEditorValuesUnderscore(cycleEditorRecords);
        console.log('preparedValues', preparedValues);
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

      },
      dispatch
    );
  };
