import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  system_properties: Immutable([]),
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED:
      case ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('system_properties', action.payload.system_properties);

      case ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set(
            'system_properties',
            state.system_properties.filter(el => el.property_name !== action.payload)
          );

      default: return state;
    }
  };

export default adminSysPropsReducer;
