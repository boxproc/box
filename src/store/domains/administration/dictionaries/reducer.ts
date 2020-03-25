import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, DictionaryActionTypes } from './actionTypes';
import { IDictionariesState } from './types';

export const dictionariesInitialState: ImmutableObject<IDictionariesState> = Immutable({
  accountStatuses: Immutable([]),
  cardStatuses: Immutable([]),
  countries: Immutable([]),
  currencies: Immutable([]),
  endpointTypes: Immutable([]),
  eventDataElems: Immutable([]),
  events: Immutable([]),
  interfaceTypes: Immutable([]),
  repaymentTypes: Immutable([]),
  statementCycleTypes: Immutable([]),
  transactionTypes: Immutable([]),
});

const dictionariesReducer =
  (state = dictionariesInitialState, action: DictionaryActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_DICTIONARY_ACCOUNT_STATUSES_FULFILLED:
        return state.set('accountStatuses', action.payload.account_statuses);

      case ActionTypeKeys.GET_DICTIONARY_CARD_STATUSES_FULFILLED:
        return state.set('cardStatuses', action.payload.card_statuses);

      case ActionTypeKeys.GET_DICTIONARY_ENDPOINT_TYPES_FULFILLED:
        return state.set('endpointTypes', action.payload.endpoint_types);

      case ActionTypeKeys.GET_DICTIONARY_INTERFACE_TYPES_FULFILLED:
        return state.set('interfaceTypes', action.payload.interface_types);

      case ActionTypeKeys.GET_DICTIONARY_STATEMENT_CYCLE_TYPES_FULFILLED:
        return state.set('statementCycleTypes', action.payload.statement_cycle_types);

      case ActionTypeKeys.GET_DICTIONARY_REPAYMENT_TYPES_FULFILLED:
        return state.set('repaymentTypes', action.payload.repayment_types);

      case ActionTypeKeys.GET_DICTIONARY_TRANSACTION_TYPES_FULFILLED:
        return state.set('transactionTypes', action.payload.transaction_types);

      case ActionTypeKeys.GET_DICTIONARY_COUNTRIES_FULFILLED:
        return state.set('countries', action.payload.countries);

      case ActionTypeKeys.GET_DICTIONARY_CURRENCIES_FULFILLED:
        return state.set('currencies', action.payload.currencies);

      case ActionTypeKeys.FILTER_DICTIONARY_EVENT_DATA_ELEMS_FULFILLED:
        return state.set('eventDataElems', action.payload.event_data_elements);

      case ActionTypeKeys.RESET_EVENT_DATA_ELEMS:
        return state.set('eventDataElems', Immutable([]));

      case ActionTypeKeys.GET_DICTIONARY_EVENTS_FULFILLED:
        return state.set('events', action.payload.events);

      default: return state;
    }
  };

export default dictionariesReducer;
