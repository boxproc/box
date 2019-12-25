import {
  LedgerStatementAprItemPrepared,
  LedgerStatementFeeItemPrepared,
  LedgerStatementRewardItemPrepared,
  LedgerStatementTransactionsItemPrepared,
} from 'store/domains';

export const emptyStatementTransactions: Array<LedgerStatementTransactionsItemPrepared> = [
  {
    id: null,
    transactionDatetime: null,
    amount: null,
    amountInOriginalCurrency: null,
    balanceAvailableBefore: null,
    balanceAvailableAfter: null,
    balanceSettledBefore: null,
    balanceSettledAfter: null,
    description: null,
    aprId: null,
    aprRate: null,
  },
];

export const emptyStatementAprs: Array<LedgerStatementAprItemPrepared> = [
  {
    statementId: null,
    productAprId: null,
    accruedInterest: null,
    description: null,
    rate: null,
  },
];

export const emptyStatementFees: Array<LedgerStatementFeeItemPrepared> = [
  {
    statementId: null,
    productFeeId: null,
    accruedFee: null,
    description: null,
    rate: null,
    amount: null,
    feeApplicationCondition: null,
  },
];

export const emptyStatementRewards: Array<LedgerStatementRewardItemPrepared> = [
  {
    statementId: null,
    productRewardId: null,
    accruedReward: null,
    description: null,
    rate: null,
    amount: null,
    rewardApplicationCondition: null,
  },
];
