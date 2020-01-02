import * as api from './api';

import {
  ActionTypeKeys,
  GetDictionaryCardStatusesAction,
  GetDictionaryEndpointTypesAction,
  GetDictionaryInterfaceTypesAction,
  GetDictionaryStatementCycleTypesAction,
} from './actionTypes';

import {
  selectIsCardStatusesLoaded,
  selectIsEndpointTypesLoaded,
  selectIsInterfaceTypesLoaded,
} from 'store/domains/administration';

import { VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';
import { selectIsStatementCycleTypesLoaded } from './selectors';

export type GetDictionaryCardStatuses = () => GetDictionaryCardStatusesAction;
export type HandleGetDictionaryCardStatuses = VoidPromiseThunk;

export type GetDictionaryEndpointTypes = () => GetDictionaryEndpointTypesAction;
export type HandleGetDictionaryEndpointTypes = VoidPromiseThunk;

export type GetDictionaryInterfaceTypes = () => GetDictionaryInterfaceTypesAction;
export type HandleGetDictionaryInterfaceTypes = VoidPromiseThunk;

export type GetDictionaryStatementCycleTypes = () => GetDictionaryStatementCycleTypesAction;
export type HandleGetDictionaryStatementCycleTypes = VoidPromiseThunk;

export const getDictionaryCardStatuses: GetDictionaryCardStatuses = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES,
  payload: api.getDictionaryCardStatuses(),
});

export const getDictionaryEndpointTypes: GetDictionaryEndpointTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES,
  payload: api.getDictionaryEndpointTypes(),
});

export const getDictionaryInterfaceTypes: GetDictionaryInterfaceTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES,
  payload: api.getDictionaryInterfaceTypes(),
});

export const getDictionaryStatementCycleTypes: GetDictionaryStatementCycleTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES,
  payload: api.getDictionaryStatementCycleTypes(),
});

export const handleGetDictionaryCardStatuses: HandleGetDictionaryCardStatuses = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCardStatusesLoaded(getState())) {
          await dispatch(getDictionaryCardStatuses());
        }
      },
      dispatch
    );
  };

export const handleGetDictionaryEndpointTypes: HandleGetDictionaryEndpointTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsEndpointTypesLoaded(getState())) {
          await dispatch(getDictionaryEndpointTypes());
        }
      },
      dispatch
    );
  };

export const handleGetDictionaryInterfaceTypes: HandleGetDictionaryInterfaceTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsInterfaceTypesLoaded(getState())) {
          await dispatch(getDictionaryInterfaceTypes());
        }
      },
      dispatch
    );
  };

export const handleGetDictionaryStatementCycleTypes: HandleGetDictionaryStatementCycleTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsStatementCycleTypesLoaded(getState())) {
          await dispatch(getDictionaryStatementCycleTypes());
        }
      },
      dispatch
    );
  };
