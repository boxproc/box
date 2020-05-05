import { IAccountsState } from './accounts';
import { ICardsState } from './cards';
import { ICurrencyRatesState } from './currencyRates';
import { ICustomersState } from './customers';
import { IStatementsState } from './statements';
import { ITransactionsState } from './transactions';

export interface ILedgerState {
  accounts: IAccountsState;
  customers: ICustomersState;
  transactions: ITransactionsState;
  statements: IStatementsState;
  cards: ICardsState;
  currencyRates: ICurrencyRatesState;
}
