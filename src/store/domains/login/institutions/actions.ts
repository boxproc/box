import { ActionTypeKeys, IGetUserInstitutionsAction } from './actionTypes';
import * as api from './api';
import { selectIsInstitutionsLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type GetUserInstitutions = () => IGetUserInstitutionsAction;
export type HandleGetUserInstitutions = VoidPromiseThunk;

export const getUserInstitutions: GetUserInstitutions = () => ({
  type: ActionTypeKeys.GET_USER_INSTITUTIONS,
  payload: api.getUserInstitutions(),
});

export const handleGetUserInstitutions: HandleGetUserInstitutions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsInstitutionsLoaded(getState())) {
          await dispatch(getUserInstitutions());
        }
      },
      dispatch
    );
  };
