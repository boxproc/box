import {
  InstitutionProducts,
  ProductAprItems,
  ProductDetailsResp,
  ProductRuleResp,
  ProductsDataResp,
} from './types';

import { ResponseStatusType } from 'types';

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
    },
    {
      id: 2,
      name: 'Product: debit',
    },
  ],
};

export const productAprs: ProductAprItems = {
  product_aprs: [
    {
      id: 1,
      product_id: 1,
      repayment_sequence: 1,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
    {
      id: 2,
      product_id: 1,
      repayment_sequence: 1,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
    {
      id: 3,
      product_id: 1,
      repayment_sequence: 1,
      description: 'Test description',
      calculation_method: 'A',
      rate: 0.00,
      grace_number_of_days: 1,
    },
  ],
};

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
