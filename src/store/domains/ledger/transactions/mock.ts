import { LedgerTransactionItems } from './types';

import { IResponseStatus } from 'types';

export const ledgerTransactionsFilteredItems: LedgerTransactionItems = {
  transactions: [
    {
      id: 2,
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
      original_currency: 'GBP',
      transaction_datetime: '11/08/2019 00:04:46',
      transaction_type_id: 1,
      status: 'S',
      settled_datetime: '11/08/2019 00:04:46',
      amount_settled: 0,
      source_endpoint_id: 1,
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
      card_currency_billing: 'test',
      card_amount_billing: null,
      card_acceptor_terminal_id: null,
      card_acceptor_id_code: null,
      card_stan: null,
      card_mcc: null,
      card_acquirer_id: null,
      card_acquirer_country_code: null,
      card_pos_entry_mode: null,
      card_pos_condition_data: null,
      card_response_code: null,
      parent_transaction_id: null,
    },
  ],
};

export const successResponseStatus: IResponseStatus = {
  response_status: {
    status_code: '00',
  },
};
