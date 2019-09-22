import { ActionTypeKeys, FilterLedgerStatementsAction } from './actionTypes';

import * as api from './api';

import { LedgerStatementsFilterParams, LedgerStatementsFilterParamsPrepared } from './types';

import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerStatements = (params: Partial<LedgerStatementsFilterParamsPrepared>) =>
  FilterLedgerStatementsAction;
export type HandleFilterLedgerStatements = (params: Partial<LedgerStatementsFilterParams>) =>
  Thunk<void>;

export const filterLedgerStatements: FilterLedgerStatements = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_STATEMENTS,
  payload: api.filterLedgerTransactions(filterParams),
});

export const handleFilterLedgerStatements: HandleFilterLedgerStatements = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedValues = preparedFilterParamsToSend(params);

        if (preparedValues) {
          await dispatch(filterLedgerStatements(preparedValues));
        }
      },
      dispatch
    );
  };
