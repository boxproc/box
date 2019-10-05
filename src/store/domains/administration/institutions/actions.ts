import { reset as resetForm } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { closeModal } from 'store/domains/modals';

import * as api from './api';

import { selectActiveItemId } from 'store/domains/utils';
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
import { preparedValuesToSend } from './utils';

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
export type HandleDeleteAdminInstitution = () => Thunk<void>;

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
        dispatch(closeModal(modalNamesConst.ADD_ADMIN_INSTITUTION));
        await dispatch(handleGetAdminInstitutions());
        await dispatch(resetForm(formNamesConst.ADMIN_INSTITUTIONS));
      },
      dispatch
    );
  };

export const handleDeleteAdminInstitution: HandleDeleteAdminInstitution = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const id = selectActiveItemId(state);

        await dispatch(deleteAdminInstitution(id));
        dispatch(closeModal(modalNamesConst.EDIT_ADMIN_INSTITUTION));
      },
      dispatch
    );
  };
