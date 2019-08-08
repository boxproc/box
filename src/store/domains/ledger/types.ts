import { LedgerAccountsState } from './accounts';
import { LedgerCustomersState } from './customers';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  ledgerAccounts: LedgerAccountsState;
  ledgerCustomers: LedgerCustomersState;
  ledgerTransactions: LedgerTransactionsState;
}
