import { IAccountsState } from './accounts';
import { ICardsState } from './cards';
import { ICustomersState } from './customers';
import { ILimitAdjustmentState } from './limitAdjustment';
import { IManualTransactionState } from './manualTransaction';
import { ISettleTransactionState } from './settleTransaction';
import { IStatementsState } from './statements';
import { ITransactionsState } from './transactions';

export interface ILedgerState {
  accounts: IAccountsState;
  customers: ICustomersState;
  transactions: ITransactionsState;
  statements: IStatementsState;
  cards: ICardsState;
  manualTransaction: IManualTransactionState;
  limitAdjustment: ILimitAdjustmentState;
  settleTransaction: ISettleTransactionState;
}
