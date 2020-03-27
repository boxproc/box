import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst, } from 'consts';

import { closeModal, isAccessibleFilterSelector } from 'store';
import {
  ActionTypeKeys,
  IAddInterfaceAction,
  IDeleteInterfaceAction,
  IFilterInterfacesAction,
  IUpdateInterfaceAction,
} from './actionTypes';
import * as api from './api';
import {
  IInterfaceData,
  IInterfaceDetails,
  IInterfacesFilterToSend,
} from './types';
import { prepareDataToSend, prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Filter interfaces action
 */

export type TFilterInterfaces = (data: Partial<IInterfacesFilterToSend>) => IFilterInterfacesAction;
export type THandleFilterInterfaces = () => Thunk<void>;

export const filterInterfaces: TFilterInterfaces = filter => ({
  type: ActionTypeKeys.FILTER_INTERFACES,
  payload: api.filterInterface(filter),
});

export const handleFilterInterfaces: THandleFilterInterfaces = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterInterfaces(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Add interface action
 */

export type TAddInterface = (data: Partial<IInterfaceData>) => IAddInterfaceAction;
export type THandleAddInterface = (data: Partial<IInterfaceDetails>) => Thunk<void>;

export const addInterface: TAddInterface = data => ({
  type: ActionTypeKeys.ADD_INTERFACE,
  payload: api.addInterface(data),
});

export const handleAddInterface: THandleAddInterface = data =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);
        const state = getState();
        const isAccessibleFiltering = isAccessibleFilterSelector(state);

        await dispatch(addInterface(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_INTERFACE));

        if (isAccessibleFiltering) {
          await dispatch(handleFilterInterfaces());
        }
      },
      dispatch
    );
  };

/**
 * Delete interface action
 */

export type TDeleteInterface = (id: number) => IDeleteInterfaceAction;
export type THandleDeleteInterface = (id: number) => Thunk<void>;

export const deleteInterface: TDeleteInterface = id => ({
  type: ActionTypeKeys.DELETE_INTERFACE,
  payload: api.deleteInterface(id),
  meta: id,
});

export const handleDeleteInterface: THandleDeleteInterface = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteInterface(id));
        dispatch(closeModal(modalNamesConst.EDIT_INTERFACE));
        await dispatch(handleFilterInterfaces());
      },
      dispatch
    );
  };

/**
 * Update interface action
 */

export type TUpdateInterface = (data: Partial<IInterfaceData>) => IUpdateInterfaceAction;
export type THandleUpdateInterface = (data: Partial<IInterfaceDetails>) => Thunk<void>;

export const updateInterface: TUpdateInterface = data => ({
  type: ActionTypeKeys.UPDATE_INTERFACE,
  payload: api.updateInterface(data),
});

export const handleUpdateInterface: THandleUpdateInterface = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateInterface(preparedData));
        await dispatch(handleFilterInterfaces());
      },
      dispatch
    );
  };

/**
 * Reset interfaces action
 */

export type TResetInterfaces = () => void;

export const resetInterfaces: TResetInterfaces = () => ({
  type: ActionTypeKeys.RESET_INTERFACES,
});
