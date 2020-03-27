import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store';

import * as api from './api';

import {
  ActionTypeKeys,
  IAddSysPropAction,
  IDeleteSysPropAction,
  IFilterSysPropsAction,
  IUpdateSysPropAction,
} from './actionTypes';

import { currentSysPropSelector } from './selectors';

import {
  IEditableSysProp,
  IEditableSysPropToSend,
  ISysPropFilterToSend,
} from './types';

import {
  prepareEditableSysProp,
  prepareSysPropsFilter,
} from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

/**
 * Filter system properties action
 */

export type TFilterSysProps = (data: ISysPropFilterToSend) => IFilterSysPropsAction;
export type THandleFilterSysProps = () => Thunk<void>;

export const filterSysProps: TFilterSysProps = data => ({
  type: ActionTypeKeys.FILTER_SYS_PROPS,
  payload: api.filterSysProps(data),
});

export const handleFilterSysProps: THandleFilterSysProps = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareSysPropsFilter(formValues(state));

        if (preparedData) {
          await dispatch(filterSysProps(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Delete system property action
 */

export type TDeleteSysProp = (id: number | string) => IDeleteSysPropAction;
export type THandleDeleteSysProp = (id: number | string) => Thunk<void>;

export const deleteSysProp: TDeleteSysProp = id => ({
  type: ActionTypeKeys.DELETE_SYS_PROP,
  payload: api.deleteSysProp(id),
  meta: id,
});

export const handleDeleteSysProp: THandleDeleteSysProp = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteSysProp(id));
        dispatch(closeModal(modalNamesConst.EDIT_SYSTEM_PROPERTY));
      },
      dispatch
    );
  };

/**
 * Add system property action
 */

export type TAddSysProp = (data: IEditableSysPropToSend) => IAddSysPropAction;
export type THandleAddSysProp = (data: IEditableSysProp) => Thunk<void>;

export const addSysProp: TAddSysProp = data => ({
  type: ActionTypeKeys.ADD_SYS_PROP,
  payload: api.addSysProp(data),
});

export const handleAddSysProp: THandleAddSysProp = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareEditableSysProp(data);

        await dispatch(addSysProp(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_SYSTEM_PROPERTY));
        await dispatch(handleFilterSysProps());
      },
      dispatch
    );
  };

/**
 * Update system property action
 */

export type TUpdateSysProps = (data: IEditableSysPropToSend) => IUpdateSysPropAction;
export type THandleUpdateSysProps = (data: IEditableSysProp) => Thunk<void>;

export const updateSysProps: TUpdateSysProps = data => ({
  type: ActionTypeKeys.UPDATE_SYS_PROP,
  payload: api.updateSysProps(data),
});

export const handleUpdateSysProps: THandleUpdateSysProps = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const preparedData = prepareEditableSysProp({
          ...currentSysPropSelector(state),
          ...data,
        });

        await dispatch(updateSysProps(preparedData));
        await dispatch(handleFilterSysProps());
      },
      dispatch
    );
  };

/**
 * Reset system properties action
 */

export type TResetSystemProperties = () => void;

export const resetSystemProperties: TResetSystemProperties = () => ({
  type: ActionTypeKeys.RESET_SYSTEM_PROPERTIES,
});
