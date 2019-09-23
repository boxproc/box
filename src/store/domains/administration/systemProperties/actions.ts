import { getFormValues, reset as resetForm } from 'redux-form';

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
  AdminSysPropFilterParamsPrepared,
  EditableAdminSysProp,
  EditableAdminSysPropPrepared,
} from './types';
import {
  prepareAdminSysPropFilterParams,
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

export type FilterAdminSysProps = (filterParams: AdminSysPropFilterParamsPrepared) =>
  FilterAdminSysPropsAction;
export type HandleFilterAdminSysProps = () => Thunk<void>;

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

export const filterAdminSysProps: FilterAdminSysProps = filterParams => ({
  type: ActionTypeKeys.FILTER_ADMIN_SYS_PROPS,
  payload: api.filterAdminSysProps(filterParams),
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
        await dispatch(closeModal(modalNamesConst.ADD_ADMIN_SYSTEM_PROPERTY));
        await dispatch(handleFilterAdminSysProps());
        await dispatch(resetForm(formNamesConst.ADD_ADMIN_SYSTEM_PROPERTY));
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
        const preparedValues = prepareAdminSysPropFilterParams(formValues(state));

        if (preparedValues) {
          await dispatch(filterAdminSysProps(preparedValues));
        }
      },
      dispatch
    );
  };
