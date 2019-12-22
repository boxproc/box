import * as api from './api';

import { ActionTypeKeys, GetUiItemsAction, UpdateUiItemsAction } from './actionTypes';
import { selectIsUiItems } from './selectors';

import { Thunk, VoidPromiseThunk } from 'types';

import { UiItem, UiItemsGroupItem } from './types';
import { prepareItemsToSend } from './utils';

import { errorDecoratorUtil } from 'utils';

export type GetUiItems = () => GetUiItemsAction;
export type HandleGetUiItems = VoidPromiseThunk;

export type UpdateUiItems = (data: Array<Partial<UiItem>>) => UpdateUiItemsAction;
export type HandleUpdateUiItems = (data: Array<Partial<UiItemsGroupItem>>) => Thunk<void>;

export const getUiItems: GetUiItems = () => ({
  type: ActionTypeKeys.GET_UI_ITEMS,
  payload: api.getUiItems(),
});

export const updateUiItems: UpdateUiItems = data => ({
  type: ActionTypeKeys.UPDATE_UI_ITEMS,
  payload: api.updateUiItems(data),
});

export const handleGetUiItems: HandleGetUiItems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();

        if (!selectIsUiItems(state)) {
          await dispatch(getUiItems());
        }
      },
      dispatch
    );
  };

export const handleUpdateUiItems: HandleUpdateUiItems = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareItemsToSend(data);

        await dispatch(updateUiItems(preparedData));
        await dispatch(getUiItems());
      },
      dispatch
    );
  };
