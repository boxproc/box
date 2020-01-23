
import { getFormValues } from 'redux-form';

import { formNamesConst } from 'consts';
import {
  selectActiveItemId,
} from 'store/domains/utils';
import {
  ActionTypeKeys,
  IllustrateProductLoanAction,
  IllustrateProductRevolvingCreditAction,
} from './actionTypes';
import * as api from './api';
import {
  LoanProductIllustratePrepared,
  RevolvingCreditProductIllustratePrepared,
} from './types';
import {
  prepareProductLoanIllustrateDataToSend,
  prepareProductRevolvingCreditIllustrateDataToSend,
} from './utils';

import { Thunk } from 'types';

import { errorDecoratorUtil } from 'utils';

export type IllustrateLoanProduct = (data: Partial<LoanProductIllustratePrepared>) =>
  IllustrateProductLoanAction;
export type HandleIllustrateLoanProduct = () => Thunk<void>;

export type IllustrateRevolvingCreditProduct = (
  data: Partial<RevolvingCreditProductIllustratePrepared>
) => IllustrateProductRevolvingCreditAction;
export type HandleIllustrateRevolvingCreditProduct = () => Thunk<void>;

export type ResetProductIllustration = () => void;

export const illustrateLoanProduct: IllustrateLoanProduct = data => ({
  type: ActionTypeKeys.ILLUSTRATE_PRODUCT_LOAN,
  payload: api.illustrateLoanProduct(data),
});

export const illustrateRevolvingCreditProduct: IllustrateRevolvingCreditProduct = data => ({
  type: ActionTypeKeys.ILLUSTRATE_PRODUCT_REVOLVING_CREDIT,
  payload: api.illustrateRevolvingCreditProduct(data),
});

export const resetProductIllustration: ResetProductIllustration = () => ({
  type: ActionTypeKeys.RESET_PRODUCT_ILLUSTRATION,
});

export const handleIllustrateLoanProduct: HandleIllustrateLoanProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedValues = prepareProductLoanIllustrateDataToSend({
          productId: selectActiveItemId(state),
          ...formValues(state),
        });

        if (preparedValues) {
          await dispatch(illustrateLoanProduct(preparedValues));
        }
      },
      dispatch
    );
  };

export const handleIllustrateRevolvingCreditProduct: HandleIllustrateRevolvingCreditProduct = () =>
  async (dispatch, getState) => {
    errorDecoratorUtil.withErrorHandler(
      async () => {
        const formValues = getFormValues(formNamesConst.PRODUCT_ILLUSTRATION_FORM);
        const state = getState();
        const preparedValues = prepareProductRevolvingCreditIllustrateDataToSend({
          productId: selectActiveItemId(state),
          ...formValues(state),
        });

        if (preparedValues) {
          await dispatch(illustrateRevolvingCreditProduct(preparedValues));
        }
      },
      dispatch
    );
  };
