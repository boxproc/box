import { IProductRepayment, IProductRepaymentData } from './types';

export const prepareDataToRender = (data: Partial<IProductRepaymentData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    number_of_days_to_make_repayment,
    direct_debit_submission_nr_days,
    repayment_date_calc_nr_days,
  } = data;

  return {
    productId: id,
    numberOfDaysToMakeRepayment: number_of_days_to_make_repayment || 2,
    directDebitSubmissionNrDays: direct_debit_submission_nr_days || 5,
    repaymentDateCalcNrDays: repayment_date_calc_nr_days || 6,
  };
};

export const prepareDataToSend = (data: Partial<IProductRepayment>) => {
  if (!data) {
    return null;
  }

  const {
    numberOfDaysToMakeRepayment,
    directDebitSubmissionNrDays,
    repaymentDateCalcNrDays,
    productId,
  } = data;

  return {
    product_id: productId,
    number_of_days_to_make_repayment: numberOfDaysToMakeRepayment,
    direct_debit_submission_nr_days: directDebitSubmissionNrDays,
    repayment_date_calc_nr_days: repaymentDateCalcNrDays,
  };
};
