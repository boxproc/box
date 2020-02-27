import { modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import { getInstitutions } from 'store/domains/login';
import {
  ActionTypeKeys,
  AddAdminInstitutionAction,
  DeleteAdminInstitutionAction,
  GetAdminInstitutionsAction,
  UpdateAdminInstitutionAction,
} from './actionTypes';
import {
  AdminInstitutionsItem,
  AdminInstitutionsItemDetailsPrepared,
} from './types';
import { preparedDataToSend } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetAdminInstitutions = () => GetAdminInstitutionsAction;
export type HandleGetAdminInstitutions = VoidPromiseThunk;

export type AddAdminInstitution = (values: Partial<AdminInstitutionsItem>) =>
  AddAdminInstitutionAction;
export type HandleAddAdminInstitution = (values: Partial<AdminInstitutionsItemDetailsPrepared>) =>
  Thunk<void>;

export type UpdateAdminInstitution = (values: Partial<AdminInstitutionsItem>) =>
  UpdateAdminInstitutionAction;
export type HandleUpdateAdminInstitution =
  (values: Partial<AdminInstitutionsItemDetailsPrepared>) => Thunk<void>;

export type DeleteAdminInstitution = (id: number) => DeleteAdminInstitutionAction;
export type HandleDeleteAdminInstitution = (id: number) => Thunk<void>;

export type ResetInstitutions = () => void;

export const getAdminInstitutions: GetAdminInstitutions = () => ({
  type: ActionTypeKeys.GET_ADMIN_INSTITUTIONS,
  payload: api.getAdminInstitutions(),
});

export const addAdminInstitution: AddAdminInstitution = values => ({
  type: ActionTypeKeys.ADD_ADMIN_INSTITUTION,
  payload: api.addAdminInstitution(values),
});

export const updateAdminInstitutions: UpdateAdminInstitution = values => ({
  type: ActionTypeKeys.UPDATE_ADMIN_INSTITUTION,
  payload: api.updateAdminInstitution(values),
});

export const deleteAdminInstitution: DeleteAdminInstitution = id => ({
  type: ActionTypeKeys.DELETE_ADMIN_INSTITUTION,
  payload: api.deleteAdminInstitution(id),
  meta: { id },
});

export const resetInstitutions: ResetInstitutions = () => ({
  type: ActionTypeKeys.RESET_INSTITUTIONS,
});

export const handleGetAdminInstitutions: HandleGetAdminInstitutions = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getAdminInstitutions());
      },
      dispatch
    );
  };

export const handleUpdateAdminInstitution: HandleUpdateAdminInstitution = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(values);

        await dispatch(updateAdminInstitutions(preparedValues));
        await dispatch(handleGetAdminInstitutions());
      },
      dispatch
    );
  };

export const handleAddAdminInstitution: HandleAddAdminInstitution = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedDataToSend(values);

        await dispatch(addAdminInstitution(preparedValues));
        dispatch(closeModal(modalNamesConst.ADD_INSTITUTION));
        await dispatch(handleGetAdminInstitutions());
        await dispatch(getInstitutions());
      },
      dispatch
    );
  };

export const handleDeleteAdminInstitution: HandleDeleteAdminInstitution = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminInstitution(id));
        dispatch(closeModal(modalNamesConst.EDIT_INSTITUTION));
        await dispatch(getInstitutions());
      },
      dispatch
    );
  };
