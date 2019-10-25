import {
  InstitutionProducts,
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
    product_id: 1,
    apr_default: 1,
    apr_cash: 1,
    apr_sales: 1,
    apr_balance_transfer: 1,
    apr_fee: 1,
    fee_late_payment: 1,
    fee_exceed_limit: 1,
    fee_unpaid: 1,
    fee_over_limit: 1,
    minimum_payment_percent: 1,
    minimum_payment_amount: 1,
    payment_grace_number_of_days: 1,
    limit_sharing_allowed_flag: 'Y',
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

export const successResponseStatus: ResponseStatusType = {
  response_status: {
    status_code: 0,
  },
};
