import { LedgerAccountsState } from './accounts';
import { LedgerCustomersState } from './customers';

export interface LedgerState {
  ledgerAccounts: LedgerAccountsState;
  ledgerCustomers: LedgerCustomersState;
}
