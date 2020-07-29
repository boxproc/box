import { ImmutableArray } from 'seamless-immutable';
import { ISelectValue } from 'types';

/**
 * Loan illustration interfaces
 */

export interface ILoanIllustrationData {
  statement_id: number;
  statement_date: string;
  installment_balance: number;
  fee: number;
  apr: number;
  balance_to_repay: number;
  minimum_amount_due_repayment: number;
  start_date: string;
  end_date: string;
}

export interface ILoansIllustrationData {
  product_information: Array<ILoanIllustrationData>;
}

export interface ILoanIllustration {
  statementId: number;
  statementDate: string;
  installmentBalance: string;
  fee: string;
  apr: string;
  balanceToRepay: string;
  minimumAmountDueRepayment: string;
  startDate: string;
  endDate: string;
}

/**
 * Loan illustration request interfaces
 */

export interface ILoanIllustrationReq {
  productId: number;
  amount: number;
  startDate: string;
  defNumOfInstallments: number;
  defNumInterestFreeInstlmts: number;
  defNumDeferredInstlmts: number;
}

export interface ILoanIllustrationReqToSend {
  product_id: number;
  amount: number;
  start_date: string;
  nr_loan_cycles: number;
  num_of_interest_free_instllmnts: number;
  num_deferred_instlmts: number;
}

/**
 * Revolving credit illustration interfaces
 */

/** statements */
export interface IRevCreditIllustrationStatementData {
  statement_id: number;
  statement_date: string;
  first_transaction_id: number;
  last_transaction_id: number;
  balance_open: number;
  balance_close: number;
  repayment_minimum_amount_due: number;
  minimum_repayment: number;
  start_date: string;
  end_date: string;
}

export interface IRevCreditIllustrationStatement {
  statementId: number | string;
  statementDate: number | string;
  firstTransactionId: number | string;
  lastTransactionId: number | string;
  balanceOpen: number | string;
  balanceClose: string;
  repaymentMinimumAmountDue: string;
  minimumRepayment: string;
  startDate: number | string;
  endDate: number | string;
}

/** aprs */
export interface IRevCreditIllustrationAprData {
  description: string;
  curr_accrued_interest: number;
  rate: number;
}

export interface IRevCreditIllustrationApr {
  description: string;
  currAccruedInterest: string;
  rate: string;
}

/** transactions */
export interface IRevCreditIllustrationTransData {
  transaction_datetime: string;
  debit_credit_indicator: string;
  amount: number;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_authorised_before: number;
  balance_authorised_after: number;
  description: string;
  status: string;
  apr_rate: number;
  transaction_type: string;
}

export interface IRevCreditIllustrationTrans {
  transactionDatetime: string;
  debitCreditIndicator: string;
  amount: string;
  balanceSettledBefore: string;
  balanceSettledAfter: string;
  balanceAuthorisedBefore: string;
  balanceAuthorisedAfter: string;
  description: string;
  status: string;
  aprRate: string;
  transactionType: string;
}

export interface IRevCreditIllustration {
  statements: Array<IRevCreditIllustrationStatementData>;
  aprs: Array<IRevCreditIllustrationAprData>;
  transactions: Array<IRevCreditIllustrationTransData>;
}

export interface IRevCreditIllustrationAllData {
  revolving_credit_information: IRevCreditIllustration;
}

/**
 * Revolving credit illustration request interfaces
 */

export interface IRevCreditIllustrationReqToSend {
  product_id: number;
  limit: number;
  start_date: string;
  open_balance: number;
  transaction_date_1: string;
  transaction_date_2: string;
  transaction_date_3: string;
  transaction_type_1: number | string;
  transaction_type_2: number | string;
  transaction_type_3: number | string;
  transaction_amount_1: number;
  transaction_amount_2: number;
  transaction_amount_3: number;
}

export interface IRevCreditIllustrationReq {
  productId: number;
  limit: number;
  openBalance: number;
  startDate: string;
  transactionDate1: string;
  transactionDate2: string;
  transactionDate3: string;
  transactionType1: ISelectValue;
  transactionType2: ISelectValue;
  transactionType3: ISelectValue;
  transactionAmount1: number;
  transactionAmount2: number;
  transactionAmount3: number;
}

/**
 * Product illustration state interface
 */
export interface IProductIllustrationState {
  loanIllustration: ImmutableArray<ILoanIllustrationData>;
  revCreditIllustration: {
    statements: ImmutableArray<IRevCreditIllustrationStatementData>;
    aprs: ImmutableArray<IRevCreditIllustrationAprData>;
    transactions: ImmutableArray<IRevCreditIllustrationTransData>;
  };
}
