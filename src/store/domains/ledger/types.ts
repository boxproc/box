import { LedgerAccountsState } from './accounts';
import { LedgerCardsState } from './cards';
import { LedgerCustomersState } from './customers';
import { LedgerLimitAdjustmentState } from './limitAdjustment';
import { LedgerManualTransactionState } from './manualTransaction';
import { LedgerStatementsState } from './statements';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  accounts: LedgerAccountsState;
  customers: LedgerCustomersState;
  transactions: LedgerTransactionsState;
  statements: LedgerStatementsState;
  cards: LedgerCardsState;
  manualTransaction: LedgerManualTransactionState;
  limitAdjustment: LedgerLimitAdjustmentState;
}
