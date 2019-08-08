import { ImmutableArray } from 'seamless-immutable';
import { ResponseStatusType } from 'types';

export interface LedgerTransactionId {
    id: number;
}

export interface LedgerTransactionItem extends LedgerTransactionId {
    account_id: number;
    transaction_datetime: string;
    transaction_name: number;
    debit_credit_indicator: string;
    amount: number;
    amount_in_original_currency: number;
    balance_settled_before: number;
    balance_settled_after: number;
    balance_available_before: number;
    balance_available_after: number;
    description: string;
    original_currency: string;
    card_transaction_id: number;
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

export interface LedgerTransactionItemPrepared extends LedgerTransactionId {
    accountId: number;
    transactionDatetime: string;
    transactionName: number;
    debitCreditIndicator: string;
    amount: number;
    amountInOriginalCurrency: number;
    balanceSettledBefore: number;
    balanceSettledAfter: number;
    balanceAvailableBefore: number;
    balanceAvailableAfter: number;
    description: string;
    originalCurrency: string;
    cardTransactionId: number;
    cardId: number;
    cardCurrency: string;
    cardAmount: number;
    cardConversionRate: number;
    cardAcceptorName: string;
    cardAcceptorLocation: string;
}

export interface LedgerTransactionsState {
    transactions: ImmutableArray<LedgerTransactionItem>;
}
