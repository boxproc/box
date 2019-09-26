import * as api from './api';

import { ActionTypeKeys, GetDictionaryEventsAction } from './actionTypes';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetDictionaryEvents = () => GetDictionaryEventsAction;
export type HandleGetDictionaryEvents = VoidPromiseThunk;

export const getDictionaryEvents: GetDictionaryEvents = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_EVENTS,
  payload: api.getDictionaryEvents(),
});

export const handleGetDictionaryEvents: HandleGetDictionaryEvents = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getDictionaryEvents());
      },
      dispatch
    );
  };
