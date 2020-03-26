import { LedgerAccountsState } from './accounts';
import { LedgerCardsState } from './cards';
import { LedgerCustomersState } from './customers';
import { LedgerLimitAdjustmentState } from './limitAdjustment';
import { LedgerManualTransactionState } from './manualTransaction';
import { LedgerSettleTransactionState } from './settleTransaction';
import { IStatementsState } from './statements';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  accounts: LedgerAccountsState;
  customers: LedgerCustomersState;
  transactions: LedgerTransactionsState;
  statements: IStatementsState;
  cards: LedgerCardsState;
  manualTransaction: LedgerManualTransactionState;
  limitAdjustment: LedgerLimitAdjustmentState;
  settleTransaction: LedgerSettleTransactionState;
}
