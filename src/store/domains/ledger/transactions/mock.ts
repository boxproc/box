import { LedgerTransactionItems } from './types';

import { ResponseStatusType } from 'types';

export const ledgerTransactionsItems: LedgerTransactionItems = {
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
      description: 'description',
      card_acceptor_location: 'Narnia',
      balance_settled_before: 10.2,
      card_id: 1,
      account_id: 1,
      card_currency: 'A',
      transaction_datetime: '2019-07-29T14:55:12Z[UTC]',
      balance_available_before: 10.2,
      card_conversion_rate: 1.002,
      card_acceptor_name: 'Smith',
      debit_credit_indicator: 'C',
      card_transaction_id: 'A',
      card_amount: 1000000.2,
      id: 2,
      balance_settled_after: 10.2,
    },
    {
      balance_available_after: 10.2,
      original_currency: 'GBP',
      transaction_type_id: 1,
      amount: 10.2,
      amount_in_original_currency: 10.2,
      description: 'description',
      card_acceptor_location: 'Narnia',
      balance_settled_before: 10.2,
      card_id: 1,
      account_id: 1,
      card_currency: 'A',
      transaction_datetime: '2019-07-29T14:55:12Z[UTC]',
      balance_available_before: 10.2,
      card_conversion_rate: 1.002,
      card_acceptor_name: 'Smith',
      debit_credit_indicator: 'C',
      card_transaction_id: 'A',
      card_amount: 1000000.2,
      id: 3,
      balance_settled_after: 10.2,
    },
  ],
};

export const LedgerTransactionsFilteredItems: LedgerTransactionItems = {
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
      transaction_datetime: '2019-07-29T14:55:12Z[UTC]',
      balance_available_before: 10.2,
      card_conversion_rate: 1.002,
      card_acceptor_name: 'Smith',
      debit_credit_indicator: 'C',
      card_transaction_id: 'A',
      card_amount: 1000000.2,
      id: 2,
      balance_settled_after: 10.2,
    },
  ],
};

export const SuccessResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
