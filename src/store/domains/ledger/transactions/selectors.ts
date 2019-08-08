import { createSelector } from 'reselect';
import { StoreState } from 'store/StoreState';

export const selectDefaultLedgerTransaction = (state: StoreState) =>
  state.ledger.ledgerTransactions.transactions;

export const selectLedgerTransaction = createSelector(
    selectDefaultLedgerTransaction,
    items => items && items.asMutable().map(item => {
      return {
        accountId: item.account_id,
        transactionDatetime: item.transaction_datetime,
        transactionName: item.transaction_name,
        debitCreditIndicator: item.debit_credit_indicator,
        amount: item.amount,
        amountInOriginalCurrency: item.amount_in_original_currency,
        balanceSettledBefore: item.balance_settled_before,
        balanceSettledAfter: item.balance_settled_after,
        balanceAvailableBefore: item.balance_available_before,
        balanceAvailableAfter: item.balance_available_after,
        description: item.description,
        originalCurrency: item.original_currency,
        cardTransactionId: item.card_transaction_id,
        cardId: item.card_id,
        cardCurrency: item.card_currency,
        cardAmount: item.card_amount,
        cardConversionRate: item.card_conversion_rate,
        cardAcceptorName: item.card_acceptor_name,
        cardAcceptorLocation: item.card_acceptor_location,
      };
    })
  );
