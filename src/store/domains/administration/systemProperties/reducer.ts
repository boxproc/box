import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  systemProperties: Immutable([]),
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemProperties', action.payload.system_properties);

      case ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set(
            'systemProperties',
            state.systemProperties.filter(el => el.property_name !== action.meta)
          );

      default: return state;
    }
  };

export default adminSysPropsReducer;
