import { reset as resetForm } from 'redux-form';

import { cookiesNames, formNames, modalNames } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import {
  ActionTypeKeys,
  AddAdminInstitutionAction,
  DeleteAdminInstitutionAction,
  GetAdminInstitutionsAction,
  SetAdminInstitutionIdAction,
  UpdateAdminInstitutionAction,
} from './actionTypes';

import {
  AdminInstitutionsItem,
  AdminInstitutionsItemDetailsPrepared,
} from './types';

import { preparedValuesToSend } from './utils';

import { apiClient } from 'services';

import { Thunk, VoidPromiseThunk } from 'types';

import { cookiesUtil, errorDecoratorUtil } from 'utils';

export type GetAdminInstitutions = () => GetAdminInstitutionsAction;
export type HandleGetAdminInstitutions = VoidPromiseThunk;

export type AddAdminInstitution = (values: Partial<AdminInstitutionsItem>) =>
  AddAdminInstitutionAction;
export type HandleAddAdminInstitution = (values: Partial<AdminInstitutionsItemDetailsPrepared>) =>
  Thunk<void>;

export type SetAdminInstitutionId = (id: number) => SetAdminInstitutionIdAction;
export type HandleSetAdminInstitutionId = (id: number) => void;

export type UpdateAdminInstitution = (values: Partial<AdminInstitutionsItem>) =>
  UpdateAdminInstitutionAction;
export type HandleUpdateAdminInstitution =
  (values: Partial<AdminInstitutionsItemDetailsPrepared>) => Thunk<void>;

export type DeleteAdminInstitution = (id: number) => DeleteAdminInstitutionAction;
export type HandleDeleteAdminInstitution = (id: number) => Thunk<void>;

export const getAdminInstitutions: GetAdminInstitutions = () => ({
  type: ActionTypeKeys.GET_ADMIN_INSTITUTIONS,
  payload: api.getAdminInstitutions(),
});

export const setAdminInstitutionId: SetAdminInstitutionId = id => ({
  type: ActionTypeKeys.SET_ADMIN_INSTITUTION_ID,
  payload: id,
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

export const handleGetAdminInstitutions: HandleGetAdminInstitutions = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        await dispatch(getAdminInstitutions());
      },
      dispatch
    );
  };

export const handleSetAdminInstitutionId: HandleSetAdminInstitutionId = id =>
  setAdminInstitutionId(id);

export const handleUpdateAdminInstitution: HandleUpdateAdminInstitution = values =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedValuesToSend(values);

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
        const preparedValues = preparedValuesToSend(values);

        await dispatch(addAdminInstitution(preparedValues));
        await dispatch(closeModal(modalNames.ADD_ADMIN_INSTITUTION));
        await dispatch(handleGetAdminInstitutions());
        await dispatch(resetForm(formNames.ADMIN_INSTITUTIONS));
      },
      dispatch
    );
  };

export const handleDeleteAdminInstitution: HandleDeleteAdminInstitution = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(deleteAdminInstitution(id));
        await dispatch(closeModal(modalNames.EDIT_ADMIN_INSTITUTION));
      },
      dispatch
    );
  };
