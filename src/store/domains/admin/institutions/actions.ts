import { modalNamesConst } from 'consts';

import { closeModal, getUserInstitutions } from 'store';
import {
  ActionTypeKeys,
  IAddInstitutionAction,
  IDeleteInstitutionAction,
  IGetInstitutionsAction,
  IUpdateInstitutionAction,
} from './actionTypes';
import * as api from './api';
import { IInstitutionData, IInstitutionDetails } from './types';
import { prepareDataToSend } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';
import { errorDecoratorUtil } from 'utils';

/**
 * Get institutions action
 */

export type TGetInstitutions = () => IGetInstitutionsAction;
export type THandleGetInstitutions = VoidPromiseThunk;

export const getInstitutions: TGetInstitutions = () => ({
  type: ActionTypeKeys.GET_INSTITUTIONS,
  payload: api.getInstitutions(),
});

export const handleGetInstitutions: THandleGetInstitutions = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getInstitutions());
      },
      dispatch
    );
  };

/**
 * Add institution action
 */

export type TAddInstitution = (data: Partial<IInstitutionData>) => IAddInstitutionAction;
export type THandleAddInstitution = (data: Partial<IInstitutionDetails>) => Thunk<void>;

export const addInstitution: TAddInstitution = data => ({
  type: ActionTypeKeys.ADD_INSTITUTION,
  payload: api.addInstitution(data),
});

export const handleAddInstitution: THandleAddInstitution = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(addInstitution(preparedData));
        dispatch(closeModal(modalNamesConst.ADD_INSTITUTION));
        await dispatch(handleGetInstitutions());
        await dispatch(getUserInstitutions());
      },
      dispatch
    );
  };

/**
 * Update institution action
 */

export type TUpdateInstitution = (data: Partial<IInstitutionData>) => IUpdateInstitutionAction;
export type THandleUpdateInstitution = (data: Partial<IInstitutionDetails>) => Thunk<void>;

export const updateInstitutions: TUpdateInstitution = data => ({
  type: ActionTypeKeys.UPDATE_INSTITUTION,
  payload: api.updateInstitution(data),
});

export const handleUpdateInstitution: THandleUpdateInstitution = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateInstitutions(preparedData));
        await dispatch(handleGetInstitutions());
      },
      dispatch
    );
  };

/**
 * Delete institution action
 */

export type TDeleteInstitution = (id: number) => IDeleteInstitutionAction;
export type THandleDeleteInstitution = (id: number) => Thunk<void>;

export const deleteInstitution: TDeleteInstitution = id => ({
  type: ActionTypeKeys.DELETE_INSTITUTION,
  payload: api.deleteInstitution(id),
  meta: { id },
});

export const handleDeleteInstitution: THandleDeleteInstitution = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteInstitution(id));
        dispatch(closeModal(modalNamesConst.EDIT_INSTITUTION));
        await dispatch(getUserInstitutions());
      },
      dispatch
    );
  };

/**
 * Reset institutions action
 */

export type TResetInstitutions = () => void;

export const resetInstitutions: TResetInstitutions = () => ({
  type: ActionTypeKeys.RESET_INSTITUTIONS,
});
