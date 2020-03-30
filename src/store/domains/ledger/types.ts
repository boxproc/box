import { IAccountsState } from './accounts';
import { ICardsState } from './cards';
import { LedgerCustomersState } from './customers';
import { LedgerLimitAdjustmentState } from './limitAdjustment';
import { LedgerManualTransactionState } from './manualTransaction';
import { LedgerSettleTransactionState } from './settleTransaction';
import { IStatementsState } from './statements';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  accounts: IAccountsState;
  customers: LedgerCustomersState;
  transactions: LedgerTransactionsState;
  statements: IStatementsState;
  cards: ICardsState;
  manualTransaction: LedgerManualTransactionState;
  limitAdjustment: LedgerLimitAdjustmentState;
  settleTransaction: LedgerSettleTransactionState;
}
