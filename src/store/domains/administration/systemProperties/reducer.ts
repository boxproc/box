import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  system_properties: Immutable([]),
  filter_system_properties: null,
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED:
      case ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('system_properties', action.payload.system_properties);

      case ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('system_properties', Object.values({
              ...state.system_properties
                .filter(el => el.property_name !== action.payload.system_property.property_name),
              ...action.payload,
            })
          );

      case ActionTypeKeys.ADD_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set('system_properties', Object.values({
              ...state.system_properties,
              ...action.payload,
            })
          );

      case ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set(
            'system_properties',
            state.system_properties.filter(el => el.property_name !== action.payload.property_name)
          );

      case ActionTypeKeys.SET_FILTER_ADMIN_SYS_PROPS:
        return state
          .set('filter_system_properties', action.payload);

      default: return state;
    }
  };

export default adminSysPropsReducer;
