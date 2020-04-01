import { activeItemIdSelector } from 'store';
import {
  ActionTypeKeys,
  IGetRepaymentHierarchyAction,
  IUpdateRepaymentHierarchyAction,
} from './actionTypes';
import * as api from './api';
import { IRepaymentHierarchyReq, IRepaymentHierarchyReqToSend } from './types';
import { prepareDataToSend } from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TGetRepaymentHierarchy = (id: number) => IGetRepaymentHierarchyAction;
export type THandleGetRepaymentHierarchy = () => Thunk<void>;

export type TUpdateRepaymentHierarchy = (data: IRepaymentHierarchyReqToSend) =>
  IUpdateRepaymentHierarchyAction;
export type THandleUpdateRepaymentHierarchy = (data: IRepaymentHierarchyReq) => Thunk<void>;

export const getRepaymentHierarchy: TGetRepaymentHierarchy = id => ({
  type: ActionTypeKeys.GET_REPAYMENT_HIERARCHY,
  payload: api.getRepaymentHierarchy(id),
});

export const updateRepaymentHierarchy: TUpdateRepaymentHierarchy = data => ({
  type: ActionTypeKeys.UPDATE_REPAYMENT_HIERARCHY,
  payload: api.updateRepaymentHierarchy(data),
});

export const handleGetRepaymentHierarchy: THandleGetRepaymentHierarchy = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const state = getState();
        const productId = activeItemIdSelector(state);

        await dispatch(getRepaymentHierarchy(productId));
      },
      dispatch
    );
  };

export const handleUpdateRepaymentHierarchy: THandleUpdateRepaymentHierarchy = data =>
  async dispatch => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const preparedData = prepareDataToSend(data);

        await dispatch(updateRepaymentHierarchy(preparedData));
        await dispatch(handleGetRepaymentHierarchy());
      },
      dispatch
    );
  };
