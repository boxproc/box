import { LedgerStatementItems } from './types';

export const ledgerStatementsItems: LedgerStatementItems = {
  response_status: {
    status_code: 0,
  },
  statements: [
    {
      id: 1,
      account_id: 1,
      date_from: '16/09/2019 11:03:37',
      date_to: '16/09/2019 11:03:37',
      balance_open: 1,
      balance_close: 1,
      minimum_amount_due_repayment: 1,
      statement_cycle_id: 1,
      cycle_execution_history_id: 1,
      account_alias: '0001',
      institution_id: 1,
      product_name: 'Test product name',
      first_name: 'John',
      last_name: 'Jones',
      statement_cycle_description: '',
    },
    {
      id: 2,
      account_id: 1,
      date_from: '16/09/2019 11:03:37',
      date_to: '16/09/2019 11:03:37',
      balance_open: 2,
      balance_close: 2,
      minimum_amount_due_repayment: 2,
      statement_cycle_id: 2,
      cycle_execution_history_id: 2,
      account_alias: '0001',
      institution_id: 1,
      product_name: 'Test product name',
      first_name: 'John',
      last_name: 'Jones',
      statement_cycle_description: '',
    },
  ],
};
