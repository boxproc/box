import { push } from 'react-router-redux';
import { getFormValues } from 'redux-form';

import { basePath, formNamesConst, modalNamesConst, uiItemsConst } from 'consts';

import { openModal, setIsOpenFilter } from 'store';
import {
  ActionTypeKeys,
  IActivateCardAction,
  IChangeCardStatusAction,
  IFilterCardsAction,
  IFilterCardsByIdAction,
} from './actionTypes';
import * as api from './api';
import { ICardIds, ICardIdsToSend, ICardsFilterToSend } from './types';
import { prepareCardIds, prepareFilterToSend } from './utils';

import { Thunk } from 'types';

import { cookiesUtil, errorDecoratorUtil, storageUtil } from 'utils';
import { TLedgerId } from './../customers';

/**
 * Filter cards action
 */

export type TFilterCards = (data: Partial<ICardsFilterToSend>) => IFilterCardsAction;
export type THandleFilterCards = () => Thunk<void>;

export const filterCards: TFilterCards = data => ({
  type: ActionTypeKeys.FILTER_CARDS,
  payload: api.filterCards(data),
});

export const handleFilterCards: THandleFilterCards = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const preparedData = prepareFilterToSend(formValues(state));

        if (preparedData) {
          await dispatch(filterCards(preparedData));
        }
      },
      dispatch
    );
  };

/**
 * Activate card action
 */

export type TActivateCard = (cardId: number) => IActivateCardAction;
export type THandleActivateCard = (cardId: number) => Thunk<void>;

export const activateCard: TActivateCard = cardId => ({
  type: ActionTypeKeys.ACTIVATE_CARD,
  payload: api.activateCard(cardId),
  meta: { cardId },
});

export const handleActivateCard: THandleActivateCard = cardId =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(activateCard(cardId));

        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Card was activated.',
            message: `Card ID: ${cardId}`,
          },
        }));
      },
      dispatch
    );
  };

/**
 * Change card status action
 */

export type TChangeCardStatus = (ids: ICardIdsToSend) => IChangeCardStatusAction;
export type THandleChangeCardStatus = (ids: ICardIds) => Thunk<void>;

export const changeCardStatus: TChangeCardStatus = ids => ({
  type: ActionTypeKeys.CHANGE_CARD_STATUS,
  payload: api.changeCardStatus(ids),
  meta: ids,
});

export const handleChangeCardStatus: THandleChangeCardStatus = ids =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareCardIds(ids);

        await dispatch(changeCardStatus(preparedData));
        dispatch(openModal({
          name: modalNamesConst.MESSAGE,
          payload: {
            title: 'Status was changed.',
          },
        }));
      },
      dispatch
    );
  };

/**
 * Filter cards by ID action
 */

export type TFilterCardsById = (id: TLedgerId) => IFilterCardsByIdAction;
export type THandleFilterCardsById = (id: TLedgerId) => Thunk<void>;

export const filterCardsById: TFilterCardsById = data => ({
  type: ActionTypeKeys.FILTER_CARDS_BY_ID,
  payload: api.filterCardsById(data),
});

export const handleFilterByIdCards: THandleFilterCardsById = id =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const userData = storageUtil.getUserData();
        const loggedInUsername = userData && userData.username;

        cookiesUtil.remove(`${basePath}${uiItemsConst.CARDS}-${loggedInUsername}`);
        dispatch(push(`${basePath}${uiItemsConst.CARDS}`));
        await dispatch(filterCardsById(id));
        dispatch(setIsOpenFilter(false));
      },
      dispatch
    );
  };

/**
 * Reset cards action
 */

export type TResetCards = () => void;

export const resetCards: TResetCards = () => ({
  type: ActionTypeKeys.RESET_CARDS,
});
