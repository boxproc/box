import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, AdminSysPropsActionTypes } from './actionTypes';
import { AdminSysPropsState } from './types';

export const adminSysPropsInitialState: ImmutableObject<AdminSysPropsState> = Immutable({
  systemProperties: Immutable([]),
  systemPropertiesFilterParams: null,
});

const adminSysPropsReducer =
  (state = adminSysPropsInitialState, action: AdminSysPropsActionTypes) => {
    switch (action.type) {
      case ActionTypeKeys.GET_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemProperties', action.payload.system_properties);

      case ActionTypeKeys.DELETE_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set(
            'systemProperties',
            state.systemProperties.filter(el => el.property_name !== action.meta)
          );

      case ActionTypeKeys.ADD_ADMIN_SYS_PROP_FULFILLED:
        return state
          .set('systemProperties', [
            action.meta,
            ...Object.values({
              ...state.systemProperties,
            }),
          ]);

      case ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemProperties', [
            action.meta,
            ...Object.values({
              ...state.systemProperties
                .filter(el => el.property_name !== action.meta.property_name),
            }),
          ]);

      case ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED:
        return state
          // .set('systemPropertiesFilterParams', action.meta)
          .set('systemProperties', action.payload.system_properties);

      case ActionTypeKeys.SET_FILTER_ADMIN_SYS_PROPS:
        return state
          .set('systemPropertiesFilterParams', action.payload);

      default: return state;
    }
  };

export default adminSysPropsReducer;
