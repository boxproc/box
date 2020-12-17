import Immutable, { ImmutableObject } from 'seamless-immutable';
import { ActionTypeKeys, TAccountsAction } from './actionTypes';
import { IAccountsState } from './types';

export const accountsInitialState: ImmutableObject<IAccountsState> = Immutable({
  accounts: Immutable([]),
  cards: Immutable([]),
  manualTrResult: Immutable([]),
});

const accountsReducer = (state = accountsInitialState, action: TAccountsAction) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_ACCOUNTS_FULFILLED:
      return state.set('accounts', action.payload.accounts);

    case ActionTypeKeys.FILTER_ACCOUNTS_BY_ID_FULFILLED:
      return state.set('accounts', action.payload.accounts);

    case ActionTypeKeys.GET_ACCOUNT_CARDS_FULFILLED:
      return state.set('cards', action.payload.cards);

    case ActionTypeKeys.MAKE_TRANSACTION_FULFILLED:
      const mData = action.payload.transaction_result[0];
      const mAccInd = state.accounts.findIndex(el => el.id === action.meta.accId);
      const mAccounts = state.accounts.asMutable();

      mAccounts[mAccInd] = {
        ...mAccounts[mAccInd],
        balance_settled: mData.balance_settled_after,
        balance_authorised: mData.balance_authorised_after,
      };

      return state
        .set('accounts', mAccounts)
        .set('manualTrResult', action.payload.transaction_result);

    case ActionTypeKeys.RESET_ACCOUNTS:
      return state = accountsInitialState;

    default: return state;
  }
};

export default accountsReducer;
