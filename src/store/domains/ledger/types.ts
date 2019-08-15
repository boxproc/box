import { LedgerAccountsState } from './accounts';
import { LedgerCardsState } from './cards';
import { LedgerCustomersState } from './customers';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  accounts: LedgerAccountsState;
  customers: LedgerCustomersState;
  transactions: LedgerTransactionsState;
  cards: LedgerCardsState;
}
