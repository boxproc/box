import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  system_properties: null,
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED:
      return state
        .set('system_properties', action.payload.system_properties);

    default: return state;
  }
};

export default adminSysPropsReducer;
