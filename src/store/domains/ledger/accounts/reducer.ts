import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypeKeys, TAccountsAction } from './actionTypes';
import { IAccountsState } from './types';

export const accountsInitialState: ImmutableObject<IAccountsState> = Immutable({
  accounts: Immutable([]),
  cards: Immutable([]),
});

const accountsReducer = (state = accountsInitialState, action: TAccountsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_ACCOUNTS_FULFILLED:
      return state.set('accounts', action.payload.accounts);

    case ActionTypeKeys.FILTER_ACCOUNTS_BY_ID_FULFILLED:
      return state.set('accounts', action.payload.accounts);

    case ActionTypeKeys.GET_ACCOUNT_CARDS_FULFILLED:
      return state.set('cards', action.payload.cards);

    case ActionTypeKeys.RESET_ACCOUNTS:
      return state = accountsInitialState;

    default: return state;
  }
};

export default accountsReducer;
