import { LedgerTransactionItems } from './types';

import { ResponseStatusType } from 'types';

export const ledgerTransactionsFilteredItems: LedgerTransactionItems = {
  response_status: {
    status_code: 0,
  },
  transactions: [
    {
      balance_available_after: 10.2,
      original_currency: 'GBP',
      transaction_type_id: 1,
      amount: 10.2,
      amount_in_original_currency: 10.2,
      description: 'description filtered',
      card_acceptor_location: 'Narnia',
      balance_settled_before: 10.2,
      card_id: 1,
      account_id: 1,
      card_currency: 'A',
      transaction_datetime: '11/08/2019 00:04:46',
      balance_available_before: 10.2,
      card_conversion_rate: 1.002,
      card_acceptor_name: 'Smith',
      debit_credit_indicator: 'C',
      card_transaction_id: 'A',
      card_amount: 1000000.2,
      id: 2,
      balance_settled_after: 10.2,
      transaction_type_description: 'Debit description',
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
