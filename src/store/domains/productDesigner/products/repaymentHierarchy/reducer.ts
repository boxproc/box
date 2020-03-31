import Immutable, { ImmutableObject } from 'seamless-immutable';

import { ActionTypeKeys, TRepaymentHierarchyAction } from './actionTypes';
import { RepaymentHierarchyState } from './types';

export const repaymentHierarchyInitialState:
  ImmutableObject<RepaymentHierarchyState> = Immutable({
    repaymentHierarchy: Immutable([]),
  });

const repaymentHierarchyReducer =
  (state = repaymentHierarchyInitialState, action: TRepaymentHierarchyAction) => {
    switch (action.type) {
      case ActionTypeKeys.GET_REPAYMENT_HIERARCHY_FULFILLED:
        return state.set('repaymentHierarchy', action.payload.repayment_hierarchy);

      default: return state;
    }
  };

export default repaymentHierarchyReducer;
