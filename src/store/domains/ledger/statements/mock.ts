import {
  LedgerAccountStatementItems,
  LedgerStatementAprItems,
  LedgerStatementFeeItems,
  LedgerStatementItems,
  LedgerStatementRewardItems,
} from './types';

export const ledgerStatementsItems: LedgerStatementItems = {
  statements: [
    {
      id: 1,
      account_id: 1,
      first_transaction_id: 2,
      last_transaction_id: 23,
      statement_date: '07/10/2019',
      balance_open: 1,
      balance_close: 1,
      minimum_amount_due_repayment: 1,
      statement_cycle_id: 1,
      repayment_status: 'R',
      date_of_last_update: '07/10/2019',
      account_alias: '0001',
      institution_id: 1,
      product_name: 'Test product name',
      first_name: 'John',
      last_name: 'Jones',
      statement_cycle_description: 'Test',
    },
    {
      id: 2,
      account_id: 1,
      first_transaction_id: 2,
      last_transaction_id: 23,
      statement_date: '07/10/2019',
      balance_open: 2,
      balance_close: 2,
      minimum_amount_due_repayment: 2,
      statement_cycle_id: 2,
      repayment_status: 'R',
      date_of_last_update: '07/10/2019',
      account_alias: '0001',
      institution_id: 1,
      product_name: 'Test product name',
      first_name: 'John',
      last_name: 'Jones',
      statement_cycle_description: 'Test',
    },
  ],
};

export const ledgerAccountStatementsItems: LedgerAccountStatementItems = {
  statements: [
    {
      id: 1,
      account_id: 1,
      first_transaction_id: 2,
      last_transaction_id: 23,
      statement_date: '07/10/2019',
      balance_open: 1,
      balance_close: 1,
      minimum_amount_due_repayment: 1,
      repayment_status: 'R',
      date_of_last_update: '07/10/2019',
      accrued_interest_total: 1.00,
      accrued_fee_total: 1.00,
      accrued_reward_total: 1.00,
    },
    {
      id: 2,
      account_id: 1,
      first_transaction_id: 2,
      last_transaction_id: 23,
      statement_date: '07/10/2019',
      balance_open: 1,
      balance_close: 1,
      minimum_amount_due_repayment: 1,
      repayment_status: 'O',
      date_of_last_update: '07/10/2019',
      accrued_interest_total: 1.00,
      accrued_fee_total: 1.00,
      accrued_reward_total: 1.00,
    },
  ],
};

export const ledgerAccountStatementAprItems: LedgerStatementAprItems = {
  statement_aprs: [
    {
      statement_id: 1,
      product_apr_id: 1,
      accrued_interest: 1,
      description: 'Description',
      rate: 1,
    },
  ],
};

export const ledgerAccountStatementFeeItems: LedgerStatementFeeItems = {
  statement_fees: [
    {
      statement_id: 1,
      product_fee_id: 1,
      accrued_fee: 1,
      description: 'Description',
      rate: 1,
      amount: 1,
      fee_application_condition: 'R',
    },
  ],
};

export const ledgerAccountStatementRewardItems: LedgerStatementRewardItems = {
  statement_rewards: [
    {
      statement_id: 1,
      product_reward_id: 1,
      accrued_reward: 1,
      description: 'Description',
      rate: 1,
      amount: 1,
      reward_application_condition: 'A',
    },
  ],
};
