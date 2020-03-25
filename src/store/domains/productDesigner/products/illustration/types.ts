import { ImmutableArray } from 'seamless-immutable';

import { ISelectValue } from 'types';

export interface IllustrationProductLoanResp {
  statement_id: number;
  statement_date: string;
  installment_balance: number;
  fee: number;
  apr: number;
  amount: number;
  repayment_minimum_amount_due: number;
  start_date: string;
  end_date: string;
}

export interface IllustrationProductLoan {
  statementId: number;
  statementDate: string;
  installmentBalance: string;
  fee: string;
  apr: string;
  amount: string;
  repaymentMinimumAmountDue: string;
  startDate: string;
  endDate: string;
}

export interface IllustrationProductStatementsRevolvingCreditResp {
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

export interface IllustrationProductStatementsRevolvingCredit {
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

export interface IllustrationProductAprRevolvingCreditResp {
  description: string;
  curr_accrued_interest: number;
  rate: number;
}

export interface IllustrationProductAprRevolvingCredit {
  description: string;
  currAccruedInterest: string;
  rate: string;
}

export interface IllustrationProductTransactionsRevolvingCredit {
  transactionDatetime: string;
  debitCreditIndicator: string;
  amount: string;
  balanceSettledBefore: string;
  balanceSettledAfter: string;
  balanceAvailableBefore: string;
  balanceAvailableAfter: string;
  description: string;
  status: string;
  aprRate: string;
  transactionType: string;
}

export interface IllustrationProductTransactionsRevolvingCreditResp {
  transaction_datetime: string;
  debit_credit_indicator: string;
  amount: number;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_available_before: number;
  balance_available_after: number;
  description: string;
  status: string;
  apr_rate: number;
  transaction_type: string;
}

export interface ProductLoanIllustrationDataResp {
  product_information: Array<IllustrationProductLoanResp>;
}

export interface ProductRevolvingCreditStatementsIllustrationDataResp {
  statements: Array<IllustrationProductStatementsRevolvingCreditResp>;
}

export interface ProductRevolvingCreditTransactionsIllustrationDataResp {
  transactions: Array<IllustrationProductTransactionsRevolvingCreditResp>;
}

export interface ProductRevolvingCreditAprIllustrationDataResp {
  aprs: Array<IllustrationProductAprRevolvingCreditResp>;
}

export interface ProductRevolvingCreditIllustrationAllDataResp {
  revolving_credit_information: ProductRevolvingCreditIllustrationDataResp;
}

export interface ProductRevolvingCreditIllustrationDataResp {
  statements: Array<IllustrationProductStatementsRevolvingCreditResp>;
  aprs: Array<IllustrationProductAprRevolvingCreditResp>;
  transactions: Array<IllustrationProductTransactionsRevolvingCreditResp>;
}

export interface LoanProductIllustratePrepared {
  product_id: number;
  amount: number;
  start_date: string;
  nr_loan_cycles: number;
  nr_interest_free: number;
}

export interface RevolvingCreditProductIllustratePrepared {
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

export interface LoanProductIllustrate {
  productId: number;
  amount: number;
  startDate: string;
  defNumOfInstallments: number;
  defNumOfIntrstFreeInstlmts: number;
}

export interface RevolvingCreditProductIllustrate {
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

export interface ProductIllustrationState {
  productLoanIllustration: ImmutableArray<IllustrationProductLoanResp>;
  productRevolvingCreditIllustration: {
    statements: ImmutableArray<IllustrationProductStatementsRevolvingCreditResp>;
    aprs: ImmutableArray<IllustrationProductAprRevolvingCreditResp>;
    transactions: ImmutableArray<IllustrationProductTransactionsRevolvingCreditResp>;
  };
}
