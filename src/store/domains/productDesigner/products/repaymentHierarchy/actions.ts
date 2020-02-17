import { selectActiveItemId } from 'store/domains/utils';
import {
  ActionTypeKeys,
  GetRepaymentHierarchyAction,
  UpdateRepaymentHierarchyAction,
} from './actionTypes';
import * as api from './api';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type GetRepaymentHierarchy = (id: number) => GetRepaymentHierarchyAction;
export type HandleGetRepaymentHierarchy = () => Thunk<void>;

export type UpdateRepaymentHierarchy = (data: any) => UpdateRepaymentHierarchyAction;
export type HandleUpdateRepaymentHierarchy = (data: any) => Thunk<void>;

export const getRepaymentHierarchy: GetRepaymentHierarchy = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY,
  payload: api.getRepaymentHierarchy(id),
});

export const updateRepaymentHierarchy: UpdateRepaymentHierarchy = data => ({
  type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY,
  payload: api.updateRepaymentHierarchy(data),
});

export const handleGetRepaymentHierarchy: HandleGetRepaymentHierarchy = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = selectActiveItemId(state);

        await dispatch(getRepaymentHierarchy(productId));
      },
      dispatch
    );
  };

export const handleUpdateRepaymentHierarchy: HandleUpdateRepaymentHierarchy = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        await dispatch(updateRepaymentHierarchy(data));
        await dispatch(handleGetRepaymentHierarchy());
      },
      dispatch
    );
  };
