import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';

import * as api from './api';

import {
  ActionTypeKeys,
  IFilterDictionaryEventDataElemsAction,
  IGetDictionaryAccountStatusesAction,
  IGetDictionaryCardStatusesAction,
  IGetDictionaryCountriesAction,
  IGetDictionaryCurrenciesAction,
  IGetDictionaryEndpointTypesAction,
  IGetDictionaryEventsAction,
  IGetDictionaryInterfaceTypesAction,
  IGetDictionaryRepaymentTypesAction,
  IGetDictionaryStatementCycleTypesAction,
  IGetDictionaryTransactionTypesAction,
} from './actionTypes';

import {
  selectIsAccountStatusesLoaded,
  selectIsCardStatusesLoaded,
  selectIsCountriesLoaded,
  selectIsCurrenciesLoaded,
  selectIsEndpointTypesLoaded,
  selectIsInterfaceTypesLoaded,
  selectIsRepaymentTypesLoaded,
  selectIsTransTypesLoaded,
} from 'store';

import { selectIsStatementCycleTypesLoaded } from './selectors';
import { IDictionaryEventDataElemsFilter, IDictionaryEventDataElemsFilterPrepared } from './types';
import { prepareDictionaryEventIdToSend } from './utils';

import { Thunk, VoidPromiseThunk } from 'types';

import { errorDecoratorUtil } from 'utils';

/**
 * Get account statuses action
 */
export type TGetDictionaryAccountStatuses = () => IGetDictionaryAccountStatusesAction;
export type THandleGetDictionaryAccountStatuses = VoidPromiseThunk;

export const getDictionaryAccountStatuses: TGetDictionaryAccountStatuses = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES,
  payload: api.getDictionaryAccountStatuses(),
});

export const handleGetDictionaryAccountStatuses: THandleGetDictionaryAccountStatuses = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsAccountStatusesLoaded(getState())) {
          await dispatch(getDictionaryAccountStatuses());
        }
      },
      dispatch
    );
  };

/**
 * Get card statuses action
 */
export type TGetDictionaryCardStatuses = () => IGetDictionaryCardStatusesAction;
export type THandleGetDictionaryCardStatuses = VoidPromiseThunk;

export const getDictionaryCardStatuses: TGetDictionaryCardStatuses = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES,
  payload: api.getDictionaryCardStatuses(),
});

export const handleGetDictionaryCardStatuses: THandleGetDictionaryCardStatuses = () =>
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

/**
 * Get endpoint types action
 */
export type TGetDictionaryEndpointTypes = () => IGetDictionaryEndpointTypesAction;
export type THandleGetDictionaryEndpointTypes = VoidPromiseThunk;

export const getDictionaryEndpointTypes: TGetDictionaryEndpointTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES,
  payload: api.getDictionaryEndpointTypes(),
});

export const handleGetDictionaryEndpointTypes: THandleGetDictionaryEndpointTypes = () =>
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

/**
 * Get interfaces types action
 */
export type TGetDictionaryInterfaceTypes = () => IGetDictionaryInterfaceTypesAction;
export type THandleGetDictionaryInterfaceTypes = VoidPromiseThunk;

export const getDictionaryInterfaceTypes: TGetDictionaryInterfaceTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES,
  payload: api.getDictionaryInterfaceTypes(),
});

export const handleGetDictionaryInterfaceTypes: THandleGetDictionaryInterfaceTypes = () =>
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

/**
 * Get statement cycle types action
 */
export type TGetDictionaryStatementCycleTypes = () => IGetDictionaryStatementCycleTypesAction;
export type THandleGetDictionaryStatementCycleTypes = VoidPromiseThunk;

export const getDictionaryStatementCycleTypes: TGetDictionaryStatementCycleTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES,
  payload: api.getDictionaryStatementCycleTypes(),
});

export const handleGetDictionaryStatementCycleTypes: THandleGetDictionaryStatementCycleTypes = () =>
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

/**
 * Get repayment types action
 */
export type TGetDictionaryRepaymentTypes = () => IGetDictionaryRepaymentTypesAction;
export type THandleGetDictionaryRepaymentTypes = VoidPromiseThunk;

export const getDictionaryRepaymentTypes: TGetDictionaryRepaymentTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES,
  payload: api.getDictionaryRepaymentTypes(),
});

export const handleGetDictionaryRepaymentTypes: THandleGetDictionaryRepaymentTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsRepaymentTypesLoaded(getState())) {
          await dispatch(getDictionaryRepaymentTypes());
        }
      },
      dispatch
    );
  };

/**
 * Get transaction types action
 */
export type TGetDictionaryTransactionTypes = () => IGetDictionaryTransactionTypesAction;
export type THandleGetDictionaryTransactionTypes = VoidPromiseThunk;

export const getDictionaryTransactionTypes: TGetDictionaryTransactionTypes = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES,
  payload: api.getDictionaryTransactionTypes(),
});

export const handleGetDictionaryTransactionTypes: THandleGetDictionaryTransactionTypes = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsTransTypesLoaded(getState())) {
          await dispatch(getDictionaryTransactionTypes());
        }
      },
      dispatch
    );
  };

/**
 * Get countries action
 */
export type TGetDictionaryCountries = () => IGetDictionaryCountriesAction;
export type THandleGetDictionaryCountries = VoidPromiseThunk;

export const getDictionaryCountries: TGetDictionaryCountries = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_COUNTRIES,
  payload: api.getDictionaryCountries(),
});

export const handleGetDictionaryCountries: THandleGetDictionaryCountries = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();

        if (!selectIsCountriesLoaded(state)) {
          await dispatch(getDictionaryCountries());
        }
      },
      dispatch
    );
  };

/**
 * Get currencies action
 */
export type TGetDictionaryCurrencies = () => IGetDictionaryCurrenciesAction;
export type THandleGetDictionaryCurrencies = VoidPromiseThunk;

export const getDictionaryCurrencies: TGetDictionaryCurrencies = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_CURRENCIES,
  payload: api.getDictionaryCurrencies(),
});

export const handleGetDictionaryCurrencies: THandleGetDictionaryCurrencies = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        if (!selectIsCurrenciesLoaded(getState())) {
          await dispatch(getDictionaryCurrencies());
        }
      },
      dispatch
    );
  };

/**
 * Filter event data elements actions
 */
export type TFilterDictionaryEventDataElems = (data: IDictionaryEventDataElemsFilterPrepared) =>
  IFilterDictionaryEventDataElemsAction;
export type THandleFilterDictionaryEventDataElems = () => Thunk<void>;
export type THandleFilterDictionaryEventDataElemsById = (data: IDictionaryEventDataElemsFilter) =>
  Thunk<void>;

export const filterDictionaryEventDataElems: TFilterDictionaryEventDataElems = data => ({
  type: ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS,
  payload: api.filterDictionaryEventDataElems(data),
});

export const handleFilterDictionaryEventDataElems: THandleFilterDictionaryEventDataElems = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.FILTER);
        const state = getState();
        const eventId = prepareDictionaryEventIdToSend(formValues(state));

        await dispatch(filterDictionaryEventDataElems(eventId));
      },
      dispatch
    );
  };

export const handleFilterDictionaryEventDataElemsById:
  THandleFilterDictionaryEventDataElemsById = data =>
    async dispatch => {
      errorDecoratorUtil.withErrorHandler(
        async () => {
          const eventId = prepareDictionaryEventIdToSend(data);

          await dispatch(filterDictionaryEventDataElems(eventId));
        },
        dispatch
      );
    };

/**
 * Reset event data elements action
 */

export type TResetEventDataElems = () => void;

export const resetEventDataElems: TResetEventDataElems = () => ({
  type: ActionTypeKeys.RESET_EVENT_DATA_ELEMS,
});

/**
 * Get events action
 */
export type TGetDictionaryEvents = () => IGetDictionaryEventsAction;
export type THandleGetDictionaryEvents = VoidPromiseThunk;

export const getDictionaryEvents: TGetDictionaryEvents = () => ({
  type: ActionTypeKeys.GET_DICTIONARY_EVENTS,
  payload: api.getDictionaryEvents(),
});

export const handleGetDictionaryEvents: THandleGetDictionaryEvents = () =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(getDictionaryEvents());
      },
      dispatch
    );
  };
