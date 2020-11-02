import { stringsUtil } from 'utils';
import { IProductRepayment, IProductRepaymentData } from './types';

export const prepareDataToRender = (data: Partial<IProductRepaymentData>) => {
  if (!data) {
    return null;
  }

  const {
    id,
    number_of_days_to_make_repayment,
    direct_debit_submission_nr_days,
  } = data;

  return {
    productId: id,
    numberOfDaysToMakeRepayment: number_of_days_to_make_repayment,
    directDebitSubmissionNrDays: direct_debit_submission_nr_days,
  };
};

export const prepareDataToSend = (data: Partial<IProductRepayment>) => {
  if (!data) {
    return null;
  }

  const {
    numberOfDaysToMakeRepayment,
    directDebitSubmissionNrDays,
    productId,
  } = data;

  return {
    product_id: productId,
    number_of_days_to_make_repayment: stringsUtil.toNumber(numberOfDaysToMakeRepayment),
    direct_debit_submission_nr_days: stringsUtil.toNumber(directDebitSubmissionNrDays),
  };
};
