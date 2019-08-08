import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType } from 'types';

export interface LedgerTransactionId {
  id: number;
}

export interface LedgerTransactionPlainInfo extends LedgerTransactionId {
  amount: number;
  description: string;
}

export interface LedgerTransactionItem extends LedgerTransactionPlainInfo {
  account_id: number;
  transaction_datetime: string;
  transaction_type_id: number;
  debit_credit_indicator: string;
  amount_in_original_currency: number;
  balance_settled_before: number;
  balance_settled_after: number;
  balance_available_before: number;
  balance_available_after: number;
  original_currency: string;
  card_transaction_id: string;
  card_id: number;
  card_currency: string;
  card_amount: number;
  card_conversion_rate: number;
  card_acceptor_name: string;
  card_acceptor_location: string;
}

export interface LedgerTransactionItems extends ResponseStatusType {
  transactions: Array<LedgerTransactionItem>;
}

export interface LedgerTransactionItemPrepared extends LedgerTransactionPlainInfo {
  accountId: number;
  transactionDatetime: string;
  transactionTypeId: number;
  debitCreditIndicator: string;
  amountInOriginalCurrency: number;
  balanceSettledBefore: number;
  balanceSettledAfter: number;
  balanceAvailableBefore: number;
  balanceAvailableAfter: number;
  originalCurrency: string;
  cardTransactionId: string;
  cardId: number;
  cardCurrency: string;
  cardAmount: number;
  cardConversionRate: number;
  cardAcceptorName: string;
  cardAcceptorLocation: string;
}

export interface LedgerTransactionsState {
  transactions: ImmutableArray<LedgerTransactionItem>;
  currentTransactionId: number;
}
