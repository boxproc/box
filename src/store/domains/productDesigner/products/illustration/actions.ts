
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';
import {
  ActionTypeKeys,
  IIllustrateLoanAction,
  IIllustrateRevCreditAction,
} from './actionTypes';
import * as api from './api';
import {
  ILoanIllustrationReqToSend,
  IRevCreditIllustrationReqToSend,
} from './types';
import {
  prepareLoanToSend,
  prepareRevCreditToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type TIllustrateLoan = (data: ILoanIllustrationReqToSend) => IIllustrateLoanAction;
export type THandleIllustrateLoan = () => Thunk<void>;

export type TIllustrateRevCredit = (data: IRevCreditIllustrationReqToSend) =>
  IIllustrateRevCreditAction;
export type THandleIllustrateRevCredit = () => Thunk<void>;

export type TResetProductIllustration = () => void;

export const illustrateLoan: TIllustrateLoan = data => ({
  type: ActionTypeKeys.ILLUSTRATE_LOAN,
  payload: api.illustrateLoan(data),
});

export const illustrateRevCredit: TIllustrateRevCredit = data => ({
  type: ActionTypeKeys.ILLUSTRATE_REVOLVING_CREDIT,
  payload: api.illustrateRevCredit(data),
});

export const resetProductIllustration: TResetProductIllustration = () => ({
  type: ActionTypeKeys.RESET_PRODUCT_ILLUSTRATION,
});

export const handleIllustrateLoan: THandleIllustrateLoan = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedData = prepareLoanToSend(formValues(state));

        if (preparedData) {
          await dispatch(illustrateLoan(preparedData));
        }
      },
      dispatch
    );
  };

export const handleIllustrateRevCredit: THandleIllustrateRevCredit = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedData = prepareRevCreditToSend(formValues(state));

        if (preparedData) {
          await dispatch(illustrateRevCredit(preparedData));
        }
      },
      dispatch
    );
  };
