import { LedgerAccountItems } from './types';

import { ResponseStatusType } from 'types';

export const LedgerAccountsItems: LedgerAccountItems = {
  response_status: {
    status_code: 0,
  },
  accounts: [
    {
      id: 1,
      account_alias: '0001',
      account_alias_additional: 'X456FF',
      customer_id: 1,
      customer_first_name: 'John',
      customer_last_name: 'Doe',
      institution_id: 1,
      status: 'A',
      product_id: 1,
      product_name: 'Test product name',
      balance_settled: 1.01,
      balance_available: 1.01,
      amount_due_repayment: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.01,
      accrued_interest: 1.01,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      statement_cycle_id: 1,
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: 1.01,
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
    },
    {
      id: 2,
      account_alias: '0002',
      account_alias_additional: 'X456FC',
      customer_id: 1,
      customer_first_name: 'Jane',
      customer_last_name: 'Doe',
      institution_id: 1,
      status: 'A',
      product_id: 2,
      product_name: 'Test product name',
      balance_settled: 1.01,
      balance_available: 1.01,
      amount_due_repayment: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.01,
      accrued_interest: 1.01,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      statement_cycle_id: 1,
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: 1.01,
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
    },
  ],
};

export const LedgerAccountsFilteredItems: LedgerAccountItems = {
  response_status: {
    status_code: 0,
  },
  accounts: [
    {
      id: 1,
      account_alias: '0001',
      account_alias_additional: 'X456FF',
      customer_id: 1,
      customer_first_name: 'John Filtered',
      customer_last_name: 'Doe',
      institution_id: 1,
      status: 'A',
      product_id: 1,
      product_name: 'Test product name',
      balance_settled: 1.01,
      balance_available: 1.01,
      amount_due_repayment: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.01,
      accrued_interest: 1.01,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      statement_cycle_id: 1,
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: 1.01,
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
    },
    {
      id: 1,
      account_alias: '0001',
      account_alias_additional: 'X456FF',
      customer_id: 1,
      customer_first_name: 'John',
      customer_last_name: 'Doe',
      institution_id: 1,
      status: 'A',
      product_id: 1,
      product_name: 'Test product name',
      balance_settled: 1.01,
      balance_available: 1.01,
      amount_due_repayment: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.01,
      accrued_interest: 1.01,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      statement_cycle_id: 1,
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: 1.01,
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
    },
  ],
};

export const SuccessResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
