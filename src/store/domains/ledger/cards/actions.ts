import { push } from 'react-router-redux';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemConsts } from 'consts';

import { openModal } from 'store/domains/modals';
import { selectActiveItemId, setIsOpenFilter } from 'store/domains/utils';
import {
  ActionTypeKeys,
  ActivateLedgerCardAction,
  ChangeLedgerCardStatusAction,
  FilterLedgerCardsAction,
  FilterLedgerCardsByIdAction,
} from './actionTypes';
import * as api from './api';
import { LedgerCardIds, LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';
import { preparedFilterToSend, prepareLedgerCartIds } from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';
import { LedgerId } from '../customers';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterPrepared>) =>
  FilterLedgerCardsAction;
export type HandleFilterLedgerCards = () => Thunk<void>;

export type ActivateLedgerCard = (cardId: number) => ActivateLedgerCardAction;
export type HandleActivateLedgerCard = () => Thunk<void>;

export type ChangeLedgerCardStatus = (ids: LedgerCardIdsPrepared) => ChangeLedgerCardStatusAction;
export type HandleChangeLedgerCardStatus = (ids: LedgerCardIds) => Thunk<void>;

export type FilterLedgerCardsById = (id: LedgerId) => FilterLedgerCardsByIdAction;
export type HandleFilterLedgerCardsById = (id: LedgerId) => Thunk<void>;

export type ResetCards = () => void;

export const filterLedgerCards: FilterLedgerCards = filter => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS,
  payload: api.filterLedgerCards(filter),
});

export const activateLedgerCard: ActivateLedgerCard = cardId => ({
  type: ActionTypeKeys.ACTIVATE_LEDGER_CARD,
  payload: api.activateLedgerCard(cardId),
});

export const changeLedgerCardStatus: ChangeLedgerCardStatus = ids => ({
  type: ActionTypeKeys.CHANGE_LEDGER_CARD_STATUS,
  payload: api.changeLedgerCardStatus(ids),
});

export const filterLedgerCardsById: FilterLedgerCardsById = data => ({
  type: ActionTypeKeys.FILTER_LEDGER_CARDS_BY_ID,
  payload: api.filterLedgerCardsById(data),
});

export const resetCards: ResetCards = () => ({
  type: ActionTypeKeys.RESET_CARDS,
});

export const handleFilterLedgerCards: HandleFilterLedgerCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedValues = preparedFilterToSend(formValues(state));

        if (preparedValues) {
          await dispatch(filterLedgerCards(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleActivateLedgerCard: HandleActivateLedgerCard = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const cardId = selectActiveItemId(state);

        await dispatch(activateLedgerCard(cardId));
        await dispatch(handleFilterLedgerCards());

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: { title: 'Card was activate' },
        }));
      },
      dispatch
    );
  };

export const handleChangeLedgerCardStatus: HandleChangeLedgerCardStatus = ids =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const prepared = prepareLedgerCartIds(ids);

        await dispatch(changeLedgerCardStatus(prepared));
        await dispatch(handleFilterLedgerCards());
      },
      dispatch
    );
  };

export const handleFilterByIdLedgerCards: HandleFilterLedgerCardsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemConsts.LEDGER_CARDS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemConsts.LEDGER_CARDS}`));
        await dispatch(filterLedgerCardsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };
