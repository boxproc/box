import { ActionTypeKeys, GetInstitutionsAction } from './actionTypes';
import * as api from './api';
import { selectIsInstitutionsLoaded } from './selectors';

import { VoidPromiseThunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type GetInstitutions = () => GetInstitutionsAction;
export type HandleGetInstitutions= VoidPromiseThunk;

export const getInstitutions: GetInstitutions = () => ({
  type: ActionTypeKeys.GET_INSTITUTIONS,
  payload: api.getInstitutions(),
});

export const handleGetInstitutions: HandleGetInstitutions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsInstitutionsLoaded(getState())) {
          await dispatch(getInstitutions());
        }
      },
      dispatch
    );
  };
