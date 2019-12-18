import { LedgerTransactionItems } from './types';

import { ResponseStatusType } from 'types';

export const ledgerTransactionsFilteredItems: LedgerTransactionItems = {
  transactions: [
    {
      account_id: 1,
      amount: 10.2,
      amount_in_original_currency: 10.2,
      balance_available_after: 10.2,
      balance_available_before: 10.2,
      balance_settled_after: 10.2,
      balance_settled_before: 10.2,
      card_acceptor_location: null,
      card_acceptor_name: 'Smith',
      card_amount: 1000000.2,
      card_conversion_rate: null,
      card_currency: 'A',
      card_id: 1,
      card_transaction_id: 'A',
      debit_credit_indicator: 'C',
      description: 'description filtered',
      id: 2,
      original_currency: 'GBP',
      transaction_datetime: '11/08/2019 00:04:46',
      transaction_type_id: 1,
      status: '00',
      transaction_type_description: 'Debit description',
      product_apr_id: 1,
      product_fee_id: null,
      product_reward_id: null,
      apr_rate: 19.99,
      fee_rate: null,
      fee_application_condition: null,
      apr_calculation_method: 'A',
      reward_application_condition: null,
      reward_rate: null,
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
