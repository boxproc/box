import {
  IAccountStatementsData,
  IStatementAprsData,
  IStatementsData,
  IStatementTransactionsData,
} from './types';

/** Statements mock */
export const statementsMock: IStatementsData = {
  statements: [
    {
      account_alias_additional: 'test',
      account_alias: '0001',
      account_id: 1,
      address_country_code: 'test',
      address_line1: 'test',
      address_line2: 'test',
      address_line3: 'test',
      address_line4: 'test',
      address_post_code: 'test',
      address_town: 'test',
      balance_close: 1,
      balance_open: 1,
      first_name: 'John',
      first_transaction_id: 2,
      id: 1,
      institution_id: 1,
      last_name: 'Jones',
      last_transaction_id: 23,
      previous_statement_id: 1,
      product_name: 'Test product name',
      repayment_minimum_amount_due: 1,
      repayment_status: 'R',
      statement_date: '07/10/2019',
    },
    {
      account_alias_additional: 'test',
      account_alias: '0001',
      account_id: 1,
      address_country_code: 'test',
      address_line1: 'test',
      address_line2: 'test',
      address_line3: 'test',
      address_line4: 'test',
      address_post_code: 'test',
      address_town: 'test',
      balance_close: 2,
      balance_open: 2,
      first_name: 'John',
      first_transaction_id: 2,
      id: 2,
      institution_id: 1,
      last_name: 'Jones',
      last_transaction_id: 23,
      previous_statement_id: 1,
      product_name: 'Test product name',
      repayment_minimum_amount_due: 2,
      repayment_status: 'R',
      statement_date: '07/10/2019',
    },
  ],
};

/** Account statements mock */
export const accountStatementsMock: IAccountStatementsData = {
  statements: [
    {
      account_id: 1,
      accrued_interest_total: 1.00,
      balance_close: 1,
      balance_open: 1,
      first_transaction_id: 2,
      id: 1,
      last_transaction_id: 23,
      repayment_minimum_amount_due: 1,
      repayment_status: 'R',
      repayment_type: null,
      start_date: '07/10/2019',
      statement_date: '07/10/2019',
    },
    {
      account_id: 1,
      accrued_interest_total: 1.00,
      balance_close: 1,
      balance_open: 1,
      first_transaction_id: 2,
      id: 2,
      last_transaction_id: 23,
      repayment_minimum_amount_due: 1,
      repayment_status: 'O',
      repayment_type: null,
      start_date: '07/10/2019',
      statement_date: '07/10/2019',
    },
  ],
};

/** Statement transactions mock */
export const statementTransMock: IStatementTransactionsData = {
  pending_transactions: [
    {
      amount_in_original_currency: 2,
      amount: 2,
      apr_id: 1,
      apr_rate: 2.5,
      balance_available_after: 13,
      balance_available_before: 11,
      balance_settled_after: 12,
      balance_settled_before: 11,
      description: 'Test transaction',
      grace_period: 0,
      id: 2,
      original_currency: 'USD',
      status_name: 'Pending',
      status: 'P',
      transaction_datetime: '22/03/2020 15:19:53',
    },
  ],
  transactions: [
    {
      amount_in_original_currency: 2,
      amount: 2,
      apr_id: 1,
      apr_rate: 2.5,
      balance_available_after: 13,
      balance_available_before: 11,
      balance_settled_after: 12,
      balance_settled_before: 11,
      description: 'Test transaction',
      grace_period: 0,
      id: 2,
      original_currency: 'USD',
      status_name: 'Settled',
      status: 'S',
      transaction_datetime: '22/03/2020 15:19:53',
    },
  ],
};

/** Statement APRs mock */
export const statementAprsMock: IStatementAprsData = {
  statement_aprs: [
    {
      accrued_interest: 1,
      description: 'Description',
      product_apr_id: 1,
      rate: 1,
      statement_id: 1,
    },
  ],
};
