import { LedgerCustomersState } from './customers';
import { LedgerTransactionsState } from './transactions';

export interface LedgerState {
  ledgerCustomers: LedgerCustomersState;
  ledgerTransactions: LedgerTransactionsState;
}
