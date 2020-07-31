/**
 * Product repayment interfaces
 */

export interface IProductRepaymentData {
  id: number;
  repayment_clearing_nr_days: number;
  direct_debit_submission_nr_days: number;
  repayment_date_calc_nr_days: number;
}

export interface IProductRepayment {
  productId: number;
  repaymentClearingNrDays: number;
  directDebitSubmissionNrDays: number;
  repaymentDateCalcNrDays: number;
}
