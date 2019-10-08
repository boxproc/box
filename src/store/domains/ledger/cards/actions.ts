import { getFormValues } from 'redux-form';

import { formNamesConst, modalNamesConst } from 'consts';

import { openModal } from 'store/domains/modals';
import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  ActivateLedgerCardAction,
  ChangeLedgerCardStatusAction,
  FilterLedgerCardsAction,
} from './actionTypes';
import * as api from './api';
import { LedgerCardIds, LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';
import { preparedFilterToSend, prepareLedgerCartIds } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type FilterLedgerCards = (params: Partial<LedgerCardsFilterPrepared>) =>
  FilterLedgerCardsAction;
export type HandleFilterLedgerCards = () => Thunk<void>;

export type ActivateLedgerCard = (cardId: number) => ActivateLedgerCardAction;
export type HandleActivateLedgerCard = () => Thunk<void>;

export type ChangeLedgerCardStatus = (ids: LedgerCardIdsPrepared) => ChangeLedgerCardStatusAction;
export type HandleChangeLedgerCardStatus = (ids: LedgerCardIds) => Thunk<void>;

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
          name: modalNamesConst.MESSAGE_MODAL,
          payload: {
            title: 'Card was activate',
          },
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
