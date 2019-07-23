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
          ].sort((a, b) => (a.property_name > b.property_name) ? 1 : -1));

      case ActionTypeKeys.UPDATE_ADMIN_SYS_PROPS_FULFILLED:
        const currentItem = state.systemProperties
          .find(el => el.property_name === action.meta.property_name);
        const updatedItem = {
          ...currentItem,
          current_value: action.meta.current_value,
          previous_value: currentItem.current_value,
          locked_flag: action.meta.locked_flag,
        };

        return state
          .set('systemProperties', [
            ...Object.values({
              ...state.systemProperties
                .filter(el => el.property_name !== action.meta.property_name),
            }),
            updatedItem,
          ].sort((a, b) => (a.property_name > b.property_name) ? 1 : -1));

      case ActionTypeKeys.FILTER_ADMIN_SYS_PROPS_FULFILLED:
        return state
          .set('systemPropertiesFilterParams', action.meta)
          .set('systemProperties', action.payload.system_properties);

      default: return state;
    }
  };

export default adminSysPropsReducer;
