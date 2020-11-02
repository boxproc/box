/**
 * Product repayment interfaces
 */

export interface IProductRepaymentData {
  id: number;
  number_of_days_to_make_repayment: number;
  direct_debit_submission_nr_days: number;
}

export interface IProductRepayment {
  productId: number;
  numberOfDaysToMakeRepayment: number;
  directDebitSubmissionNrDays: number;
}
