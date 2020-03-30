import { IAccountsState } from './accounts';
import { ICardsState } from './cards';
import { ICustomersState } from './customers';
import { LedgerLimitAdjustmentState } from './limitAdjustment';
import { LedgerManualTransactionState } from './manualTransaction';
import { LedgerSettleTransactionState } from './settleTransaction';
import { IStatementsState } from './statements';
import { ITransactionsState } from './transactions';

export interface LedgerState {
  accounts: IAccountsState;
  customers: ICustomersState;
  transactions: ITransactionsState;
  statements: IStatementsState;
  cards: ICardsState;
  manualTransaction: LedgerManualTransactionState;
  limitAdjustment: LedgerLimitAdjustmentState;
  settleTransaction: LedgerSettleTransactionState;
}
