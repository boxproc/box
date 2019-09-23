import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import { ActionTypeKeys, FilterLedgerStatementsAction } from './actionTypes';
import * as api from './api';
import { LedgerStatementsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';
import { errorDecoratorUtil } from 'utils';

export type FilterLedgerStatements = (params: Partial<LedgerStatementsFilterParamsPrepared>) =>
  FilterLedgerStatementsAction;
export type HandleFilterLedgerStatements = () => Thunk<void>;

export const filterLedgerStatements: FilterLedgerStatements = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS,
  payload: api.filterLedgerTransactions(filterParams),
});

export const handleFilterLedgerStatements: HandleFilterLedgerStatements = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterParamsToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerStatements(preparedValues));
        }
      },
      dispatch
    );
  };
