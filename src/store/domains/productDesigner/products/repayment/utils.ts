import { IProductRepayment, IProductRepaymentData } from './types';

export const prepareDataToRender = (data: Partial<IProductRepaymentData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    repayment_clearing_nr_days,
    direct_debit_submission_nr_days,
    repayment_date_calc_nr_days,
  } = data;

  return {
    productId: id,
    repaymentClearingNrDays: repayment_clearing_nr_days || 2,
    directDebitSubmissionNrDays: direct_debit_submission_nr_days || 5,
    repaymentDateCalcNrDays: repayment_date_calc_nr_days || 6,
  };
};

export const prepareDataToSend = (data: Partial<IProductRepayment>) => {
  if (!data) {
    return null;
  }

  const {
    repaymentClearingNrDays,
    directDebitSubmissionNrDays,
    repaymentDateCalcNrDays,
    productId,
  } = data;

  return {
    product_id: productId,
    repayment_clearing_nr_days: repaymentClearingNrDays,
    direct_debit_submission_nr_days: directDebitSubmissionNrDays,
    repayment_date_calc_nr_days: repaymentDateCalcNrDays,
  };
};
