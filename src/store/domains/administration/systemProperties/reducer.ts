import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  systemProperties: Immutable([]),
  filterSystemProperties: null,
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED:
      case ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemProperties', action.payload.system_properties);

      case ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemProperties', [
            ...Object.values({
              ...state.systemProperties
                .filter(el => el.property_name !== action.payload.system_property.property_name),
            }),
            action.payload.system_property,
          ]);

      case ActionTypeKeys.ADD_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set('systemProperties', [
            ...Object.values({
              ...state.systemProperties,
            }),
            action.payload.system_property,
          ]);

      case ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set(
            'systemProperties',
            state.systemProperties.filter(el => el.property_name !== action.payload.property_name)
          );

      case ActionTypeKeys.SET_FILTER_ADMIN_SYS_PROPS:
        return state
          .set('filterSystemProperties', action.payload);

      default: return state;
    }
  };

export default adminSysPropsReducer;
