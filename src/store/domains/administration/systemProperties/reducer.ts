import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TSysPropsActionTypes } from './actionTypes';
import { ISysPropsState } from './types';

export const sysPropsInitialState: ImmutableObject<ISysPropsState> = Immutable({
  sysProps: Immutable([]),
});

const sysPropsReducer = (state = sysPropsInitialState, action: TSysPropsActionTypes) => {
  switch (action.type) {
    case ActionTypeKeys.FILTER_SYS_PROPS_FULFILLED:
      return state.set('sysProps', action.payload.system_properties);

    case ActionTypeKeys.DELETE_SYS_PROP_FULFILLED:
      return state.set('sysProps', state.sysProps.filter(el => el.property_name !== action.meta));

    case ActionTypeKeys.RESET_SYSTEM_PROPERTIES:
      return state = sysPropsInitialState;

    default: return state;
  }
};

export default sysPropsReducer;
