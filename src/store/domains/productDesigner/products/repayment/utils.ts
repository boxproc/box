import { IProductRepayment, IProductRepaymentData } from './types';

export const prepareDataToRender = (data: Partial<IProductRepaymentData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    repayment_clearing_nr_days,
    direct_debit_submission_nr_days,
  } = data;

  return {
    productId: id,
    repaymentClearingNrDays: repayment_clearing_nr_days,
    directDebitSubmissionNrDays: direct_debit_submission_nr_days,
  };
};

export const prepareDataToSend = (data: Partial<IProductRepayment>) => {
  if (!data) {
    return null;
  }

  const { repaymentClearingNrDays, directDebitSubmissionNrDays, productId } = data;

  return {
    product_id: productId,
    repayment_clearing_nr_days: repaymentClearingNrDays,
    direct_debit_submission_nr_days: directDebitSubmissionNrDays,
  };
};
