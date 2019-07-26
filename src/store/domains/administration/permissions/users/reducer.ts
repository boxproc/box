import Immutable, * as seamlessImmutable from 'seamless-immutable';
import { ActionTypeKeys, AdminUserActionTypes } from './actionType';
import { AdminUserState } from './types';

export const adminUserInitialState:
  seamlessImmutable.ImmutableObject<AdminUserState> = Immutable({
    users: Immutable([]),
  });

const adminUserReducer =
  (state = adminUserInitialState, action: AdminUserActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_USER_FULFILLED:
        return state
          .set('users', action.payload.users);
      case ActionTypeKeys.ADD_ADMIN_USER_FULFILLED:
        return state
          .set('users', [
            action.meta,
            ...Object.values({
              ...state.users,
            }),
          ]);
      case ActionTypeKeys.UPDATE_ADMIN_USER_FULFILLED:
        return state
          .set(
            'users', [
              ...Object.values({
                ...state.users.filter(el => el.id !== action.meta.id),
              }),
              action.meta,
            ].sort((a, b) => (a.id > b.id) ? 1 : -1)
          );
      default:
        return state;
    }
  };

export default adminUserReducer;
