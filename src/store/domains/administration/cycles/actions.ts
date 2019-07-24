import { cookiesNames, formNames, modalNames, } from 'consts';
import { reset as resetForm } from 'redux-form';
import * as api from './api';

import { closeModal } from 'store/domains/modals';

import {
  ActionTypeKeys,
  AddAdminCycleEditorAction,
  GetAdminCycleEditorAction,
} from './actionTypes';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { prepareAdminCyclesEditorValues } from './utils';

import { AdminCyclesEditorEditableItem, AdminCyclesEditorEditableItemPrepared } from './types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminCyclesEditor = () => GetAdminCycleEditorAction;
export type HandleGetAdminCyclesEditor = VoidPromiseThunk;

export type AddAdminCyclesEditor = (values: AdminCyclesEditorEditableItemPrepared) =>
AddAdminCycleEditorAction;
export type HandleAddAdminCyclesEditor = (values: AdminCyclesEditorEditableItem) =>
  Thunk<void>;

export const getAdminCycleEditor: GetAdminCyclesEditor = () => ({
  type: ActionTypeKeys.GET_ADMIN_CYCLE_EDITOR,
  payload: api.getAdminCycleEditor(),
});

export const addAdminCyclesEditor: AddAdminCyclesEditor = values => ({
  type: ActionTypeKeys.ADD_ADMIN_CYCLE_EDITOR,
  payload: api.addAdminCyclesEditor(values),
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
        const preparedValues = prepareAdminCyclesEditorValues(cycleEditorRecords);
        await dispatch(addAdminCyclesEditor(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_CYCLE_EDITOR));
        await dispatch(getAdminCycleEditor());
        await dispatch(resetForm(formNames.DEFINE_ADMIN_CYCLE_EDITOR));
      },
      dispatch
    );
  };
