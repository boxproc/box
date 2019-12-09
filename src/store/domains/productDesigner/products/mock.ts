import {
  InstitutionProducts,
  ProductAprItems,
  ProductDataResp,
  ProductDetailsResp,
  ProductRuleResp,
  ProductsDataResp,
} from './types';

import { ResponseStatusType } from 'types';

export const productData: ProductDataResp = {
  product: {
    currency_code: 'AFN',
    default_statement_cycle_id: 1,
    description: 'Test revolving credit product from mocks',
    history_retention_number_of_day: 90,
    id: 1,
    institution_id: 1,
    locked_flag: 'N',
    name: 'Revolving credit filtered',
    product_type: 'C',
    scheme: 'V',
    status: 'A',
    statement_cycle_description: '',
    overrides_product_id: 0,
    card_transactions_endpoint_id: null,
    card_management_interface_id: null,
    provider_3d_secure_interface_id: null,
    direct_debit_interface_id: null,
    card_repayment_interface_id: null,
    card_form_factor: 'P',
    number_of_days_card_expires: 365,
    gl_acc_assets: 'ACC-004-01',
    gl_acc_liabilities: 'ACC-004-02',
    gl_acc_profit: 'ACC-004-03',
    gl_acc_loss: 'ACC-004-04',
  },
};

export const productItemsFilteredData: ProductsDataResp = {
  products: [
    {
      currency_code: 'AFN',
      default_statement_cycle_id: 1,
      description: 'Test revolving credit product',
      history_retention_number_of_day: 90,
      id: 1,
      institution_id: 1,
      locked_flag: 'N',
      name: 'Product: revolving credit filtered',
      product_type: 'C',
      scheme: 'V',
      status: 'A',
      statement_cycle_description: '',
      card_transactions_endpoint_id: null,
      card_management_interface_id: null,
      provider_3d_secure_interface_id: null,
      direct_debit_interface_id: null,
      card_repayment_interface_id: null,
      card_form_factor: 'P',
      number_of_days_card_expires: 365,
      gl_acc_assets: 'ACC-004-01',
      gl_acc_liabilities: 'ACC-004-02',
      gl_acc_profit: 'ACC-004-03',
      gl_acc_loss: 'ACC-004-04',
    },
    {
      currency_code: 'AFN',
      default_statement_cycle_id: 1,
      description: 'Test loan product',
      history_retention_number_of_day: 90,
      id: 3,
      institution_id: 1,
      locked_flag: 'Y',
      name: 'Product: loan',
      product_type: 'L',
      scheme: 'X',
      status: 'I',
      statement_cycle_description: '',
      card_transactions_endpoint_id: null,
      card_management_interface_id: null,
      provider_3d_secure_interface_id: null,
      direct_debit_interface_id: null,
      card_repayment_interface_id: null,
      card_form_factor: 'P',
      number_of_days_card_expires: 365,
      gl_acc_assets: 'ACC-004-01',
      gl_acc_liabilities: 'ACC-004-02',
      gl_acc_profit: 'ACC-004-03',
      gl_acc_loss: 'ACC-004-04',
    },
  ],
};

export const productDetailsData: ProductDetailsResp = {
  product: {
    apr_default: 29.99,
    apr_default_calculation_method: 'A',
    fee_exceed_limit: 25,
    fee_late_payment: 25,
    fee_overpayment: 25,
    limit_sharing_allowed_flag: 'N',
    minimum_payment_amount: 15,
    minimum_payment_rate: 5,
    payment_grace_number_of_days: 30,
    product_id: 1,
    rate_exceed_limit: 5,
    rate_late_payment: 3,
    rate_overpayment: 10,
  },
};

export const productRulesData: ProductRuleResp = {
  product_rule: {
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    event_id: 3,
    action_type: 'X',
    script:
      `function test(a, b) {
    return a + b;
}`,
    product_id: 1,
  },
};

export const institutionProducts: InstitutionProducts = {
  institution_products: [
    {
      id: 1,
      name: 'Test revolving credit product',
      default_statement_cycle_id: 1,
      product_type: 'C',
    },
    {
      id: 2,
      name: 'Product: debit',
      default_statement_cycle_id: 2,
      product_type: 'D',
    },
  ],
};

export const productAprs: ProductAprItems = {
  product_aprs: [
    {
      product_id: 1,
      product_apr_id: 1,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
    {
      product_id: 1,
      product_apr_id: 2,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
    {
      product_id: 1,
      product_apr_id: 3,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: '00',
  },
};
