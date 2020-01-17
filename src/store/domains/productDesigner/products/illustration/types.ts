import { ImmutableArray } from 'seamless-immutable';

import { SelectValue } from 'types';

export interface IllustrationProductLoanResp {
  statement_id: number;
  statement_date: string;
  installment_balance: number;
  fee: number;
  apr: number;
  amount: number;
  minimum_amount_due_repayment: number;
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
  minimumAmountDueRepayment: string;
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
  minimum_amount_due_repayment: number;
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
  minimumAmountDueRepayment: string;
  startDate: number | string;
  endDate: number | string;
}

export interface IllustrationProductAprRevolvingCreditResp {
  description: string;
  accrued_interest: number;
  rate: number;
}
export interface IllustrationProductFeeRevolvingCredit {
  description: string;
  accruedFee: string;
}

export interface IllustrationProductAprRevolvingCredit {
  description: string;
  accruedInterest: string;
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

export interface IllustrationProductRewardsRevolvingCreditResp {
  description: string;
  accruedReward: string;
}

export interface IllustrationProductFeeRevolvingCreditResp {
  description: string;
  accrued_fee: number;
}

export interface IllustrationProductRewardRevolvingCreditResp {
  description: string;
  accrued_reward: number;
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

export interface ProductRevolvingCreditFeeIllustrationDataResp {
  fees: Array<IllustrationProductFeeRevolvingCreditResp>;
}

export interface ProductRevolvingCreditRewardIllustrationDataResp {
  rewards: Array<IllustrationProductRewardRevolvingCreditResp>;
}

export interface ProductRevolvingCreditIllustrationAllDataResp {
  revolving_credit_information: ProductRevolvingCreditIllustrationDataResp;
}

export interface ProductRevolvingCreditIllustrationDataResp {
  statements: Array<IllustrationProductStatementsRevolvingCreditResp>;
  aprs: Array<IllustrationProductAprRevolvingCreditResp>;
  fees: Array<IllustrationProductFeeRevolvingCreditResp>;
  rewards: Array<IllustrationProductRewardRevolvingCreditResp>;
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
  transactionType1: SelectValue;
  transactionType2: SelectValue;
  transactionType3: SelectValue;
  transactionAmount1: number;
  transactionAmount2: number;
  transactionAmount3: number;
}

export interface ProductIllustrationState {
  productIllustration: ImmutableArray<IllustrationProductLoanResp>;
  productRevolvingCreditIllustration: {
    statements: ImmutableArray<IllustrationProductStatementsRevolvingCreditResp>;
    aprs: ImmutableArray<IllustrationProductAprRevolvingCreditResp>;
    fees: ImmutableArray<IllustrationProductFeeRevolvingCreditResp>;
    rewards: ImmutableArray<IllustrationProductRewardRevolvingCreditResp>;
    transactions: ImmutableArray<IllustrationProductTransactionsRevolvingCreditResp>;
  };
}
