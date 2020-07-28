import { IAccountsData } from './types';
import { IManualTransactionResultResponse } from './typesManualTr';

export const accountsMock: IAccountsData = {
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
      product_override_id: 0,
      date_of_product_override: null,
      product_name: 'Test product name',
      product_type: 'L',
      num_of_installments: 1,
      num_of_interest_free_instllmnts: 1,
      num_deferred_instlmts: 1,
      start_loan_date: '2019-07-29',
      balance_settled: 1.01,
      balance_authorised: 1.01,
      repayment_amount_due: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.01,
      accrued_interest: 1.01,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: 1.01,
      aux_counter_1_description: 'aux counter 1 description',
      aux_counter_1_enabled: 'Y',
      aux_counter_2_description: 'aux counter 2 description',
      aux_counter_2_enabled: 'N',
      aux_counter_3_description: 'aux counter 3 description',
      aux_counter_3_enabled: 'N',
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      total_overdue_amount: 10,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
      currency_code: 'AED',
      currency_numeric_code: 784,
      statement_cycle_parameter: 1,
      status_name: 'Active',
      repayment_type: 'M',
      repayment_method: 'D',
      direct_debit_mandate_id: 2,
    },
    {
      id: 2,
      account_alias: '0001',
      account_alias_additional: 'X456FF',
      customer_id: 1,
      customer_first_name: 'John',
      customer_last_name: 'Doe',
      institution_id: 1,
      status: 'A',
      product_id: 2,
      product_override_id: 1,
      date_of_product_override: '2019-08-29',
      product_name: 'Test product name',
      product_type: 'C',
      num_of_installments: 1,
      num_of_interest_free_instllmnts: 1,
      num_deferred_instlmts: 1,
      start_loan_date: '2019-07-29',
      balance_settled: 1.01,
      balance_authorised: 1.01,
      repayment_amount_due: 1.01,
      balance_limit: 1.01,
      balance_limit_shared: 1.02,
      accrued_interest: 1.02,
      date_created: '2019-07-29',
      date_closed: '2019-07-29',
      last_cycle_date: '2019-07-29',
      aux_counter_1: 1.01,
      aux_counter_2: 1.01,
      aux_counter_3: null,
      aux_counter_1_description: 'aux counter 1 description',
      aux_counter_1_enabled: 'Y',
      aux_counter_2_description: 'aux counter 2 description',
      aux_counter_2_enabled: 'N',
      aux_counter_3_description: null,
      aux_counter_3_enabled: null,
      amount_overdue: 1.01,
      amount_overdue_1_cycle: 1.01,
      amount_overdue_2_cycles: 1.01,
      amount_overdue_3_cycles: 1.01,
      amount_overdue_4_cycles: 1.01,
      amount_overdue_5_cycles: 1.01,
      amount_overdue_6_cycles: 1.01,
      amount_overdue_7_cycles: 1.01,
      total_overdue_amount: 10,
      number_of_times_overdue_total: 1,
      number_of_times_overdue_1_cycle: 1,
      number_of_times_overdue_2_cycle: 1,
      number_of_times_overdue_3_cycle: 1,
      number_of_times_overdue_4_cycle: 1,
      number_of_times_overdue_5_cycle: 1,
      number_of_times_overdue_6_cycle: 1,
      number_of_times_overdue_7_cycle: 1,
      currency_code: 'AFN',
      currency_numeric_code: 971,
      statement_cycle_parameter: 1,
      status_name: 'Active',
      repayment_type: 'O',
      repayment_method: 'C',
      direct_debit_mandate_id: 1,
    },
  ],
};

export const manualTransactionMock: IManualTransactionResultResponse = {
  transaction_result: [
    {
      transaction_id: 1,
      status: '00',
      balance_settled_before: 10.19,
      balance_settled_after: 110.19,
      balance_authorised_before: 10.19,
      balance_authorised_after: 110.19,
    },
  ],
};
