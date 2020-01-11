import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterUiSessionsAction } from './actionTypes';
import * as api from './api';
import { AuditUiSessionsFilterPrepared } from './types';
import { preparedFilterToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type FilterAuditUiSessions = (params: AuditUiSessionsFilterPrepared) =>
  FilterUiSessionsAction;
export type HandleFilterAuditUiSessions = () => Thunk<void>;

export type ResetUiSessions = () => void;

export const filterAuditUiSessions: FilterAuditUiSessions = filter => ({
  type: ActionTypeKeys.FILTER_AUDIT_UI_SESSIONS,
  payload: api.filterAuditUiSessions(filter),
});

export const resetUiSessions: ResetUiSessions = () => ({
  type: ActionTypeKeys.RESET_UI_SESSIONS,
});

export const handleFilterAuditUiSessions: HandleFilterAuditUiSessions = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterAuditUiSessions(preparedValues));
        }
      },
      dispatch
    );
  };
