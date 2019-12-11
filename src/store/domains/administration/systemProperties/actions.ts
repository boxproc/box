import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  AddAdminSysPropAction,
  DeleteAdminSysPropAction,
  FilterAdminSysPropsAction,
  UpdateAdminSysPropsAction,
} from './actionTypes';
import { selectCurrentAdminSysPropsItem } from './selectors';
import {
  AdminSysPropFilterPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';
import {
  prepareAdminSysPropFilter,
  prepareEditableAdminSysPropItemValues,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type DeleteAdminSysProp = (id: number | string) => DeleteAdminSysPropAction;
export type HandleDeleteAdminSysProp = () => Thunk<void>;

export type AddAdminSysProp = (propValues: EditableAdminSysPropPrepared) =>
  AddAdminSysPropAction;
export type HandleAddAdminSysProp = (propValues: EditableAdminSysProp) => Thunk<void>;

export type UpdateAdminSysProps = (propValues: EditableAdminSysPropPrepared) =>
  UpdateAdminSysPropsAction;
export type HandleUpdateAdminSysProps = (propValues: EditableAdminSysProp) => Thunk<void>;

export type FilterAdminSysProps = (filter: AdminSysPropFilterPrepared) =>
  FilterAdminSysPropsAction;
export type HandleFilterAdminSysProps = () => Thunk<void>;

export type ResetSystemProperties = () => void;

export const deleteAdminSysProp: DeleteAdminSysProp = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_SYS_PROP,
  payload: api.deleteAdminSysProp(id),
  meta: id,
});

export const addAdminSysProp: AddAdminSysProp = propValues => ({
  type: ActionTypeKeys.ADD_ADMIN_SYS_PROP,
  payload: api.addAdminSysProp(propValues),
});

export const updateAdminSysProps: UpdateAdminSysProps = propValues => ({
  type: ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS,
  payload: api.updateAdminSysProps(propValues),
});

export const filterAdminSysProps: FilterAdminSysProps = filter => ({
  type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS,
  payload: api.filterAdminSysProps(filter),
});

export const resetSystemProperties: ResetSystemProperties = () => ({
  type: ActionTypeKeys.RESET_SYSTEM_PROPERTIES,
});

export const handleDeleteAdminSysProp: HandleDeleteAdminSysProp = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteAdminSysProp(id));
        await dispatch(handleFilterAdminSysProps());
      },
      dispatch
    );
  };

export const handleAddAdminSysProp: HandleAddAdminSysProp = propValues =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = prepareEditableAdminSysPropItemValues(propValues);

        await dispatch(addAdminSysProp(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_SYSTEM_PROPERTY));
        await dispatch(handleFilterAdminSysProps());
      },
      dispatch
    );
  };

export const handleUpdateAdminSysProps: HandleUpdateAdminSysProps = propValues =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedValues = prepareEditableAdminSysPropItemValues({
          ...selectCurrentAdminSysPropsItem(state),
          ...propValues,
        });

        await dispatch(updateAdminSysProps(preparedValues));
        dispatch(closeModal(modalNamesConst.EDIT_SYSTEM_PROPERTY));
        await dispatch(handleFilterAdminSysProps());
      },
      dispatch
    );
  };

export const handleFilterAdminSysProps: HandleFilterAdminSysProps = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = prepareAdminSysPropFilter(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminSysProps(preparedValues));
        }
      },
      dispatch
    );
  };
