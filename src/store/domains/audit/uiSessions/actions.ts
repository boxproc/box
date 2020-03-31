import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, IFilterUiSessionsAction } from './actionTypes';
import * as api from './api';
import { IUiSessionsFilterToSend } from './types';
import { prepareFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type TFilterUiSessions = (data: IUiSessionsFilterToSend) => IFilterUiSessionsAction;
export type THandleFilterUiSessions = () => Thunk<void>;

export type TResetUiSessions = () => void;

export const filterUiSessions: TFilterUiSessions = filter => ({
  type: ActionTypeKeys.FILTER_UI_SESSIONS,
  payload: api.filterUiSessions(filter),
});

export const resetUiSessions: TResetUiSessions = () => ({
  type: ActionTypeKeys.RESET_UI_SESSIONS,
});

export const handleFilterUiSessions: THandleFilterUiSessions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterUiSessions(preparedData));
        }
      },
      dispatch
    );
  };
