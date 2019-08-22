import {
  ActionTypeKeys,
  FilterLedgerCardsAction,
} from './actionTypes';

import * as api from './api';

import { LedgerCardsFilterParams, LedgerCardsFilterParamsPrepared } from './types';
import { preparedFilterParamsToSend } from './utils';

import { Thunk } from 'types';

import { cookiesNames } from 'consts';
import { apiClient } from 'services';
import {  cookiesUtil, errorDecoratorUtil } from 'utils';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterParamsPrepared>) =>
FilterLedgerCardsAction;
export type HandleFilterLedgerCards = (params: Partial<LedgerCardsFilterParams>) =>
  Thunk<void>;

export const filterLedgerCards: FilterLedgerCards = filterParams => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(filterParams),
  meta: filterParams,
});

export const handleFilterLedgerCards: HandleFilterLedgerCards = params =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const sessionId = cookiesUtil.get(cookiesNames.SESSION_ID);
        apiClient.set('session_id', sessionId);

        const preparedValues = preparedFilterParamsToSend(params);

        await dispatch(filterLedgerCards(preparedValues));
      },
      dispatch
    );
  };
