import { ActionTypeKeys, GetInstitutionsAction } from './actionTypes';
import * as api from './api';
import { selectIsInstitutionsLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type GetUserInstitutions = () => GetInstitutionsAction;
export type HandleGetUserInstitutions= VoidPromiseThunk;

export const getUserInstitutions: GetUserInstitutions = () => ({
  type: ActionTypeKeys.GET_INSTITUTIONS,
  payload: api.getInstitutions(),
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
