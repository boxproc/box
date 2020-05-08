import {
  IInstProductsData,
  IProductDataResp,
  IProductDetailsDataResp,
  IProductsDataResp,
} from './types';

export const productsMock: IProductDataResp = {
  product: {
    currency_code: 'AFN',
    description: 'Test revolving credit product from mocks',
    history_retention_number_of_day: 90,
    id: 1,
    institution_id: 1,
    locked_flag: 'N',
    name: 'Revolving credit',
    product_type: 'C',
    scheme: 'V',
    status: 'A',
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
    statement_cycle_type_id: 1,
    statement_cycle_type_name: 'Test cycle',
    statement_cycle_parameter: 1,
  },
};

export const productsFilteredMock: IProductsDataResp = {
  products: [
    {
      currency_code: 'AFN',
      description: 'Test revolving credit product',
      history_retention_number_of_day: 90,
      id: 1,
      institution_id: 1,
      locked_flag: 'N',
      name: 'Product: revolving credit',
      product_type: 'C',
      scheme: 'V',
      status: 'A',
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
      statement_cycle_type_id: 1,
      statement_cycle_type_name: 'Test cycle',
      statement_cycle_parameter: 1,
    },
    {
      currency_code: 'AFN',
      description: 'Test loan product',
      history_retention_number_of_day: 90,
      id: 3,
      institution_id: 1,
      locked_flag: 'Y',
      name: 'Product: loan',
      product_type: 'L',
      scheme: 'X',
      status: 'I',
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
      statement_cycle_type_id: 1,
      statement_cycle_type_name: 'Test cycle',
      statement_cycle_parameter: 1,
    },
  ],
};

export const productDetailsMock: IProductDetailsDataResp = {
  product: {
    product_id: 1,
    limit_sharing_allowed_flag: 'N',
    minimum_repayment_amount: 15,
    minimum_repayment_rate: 5,
    repayment_grace_number_of_days: 30,
  },
};

export const institutionProductsMock: IInstProductsData = {
  institution_products: [
    {
      id: 1,
      name: 'Test revolving credit product',
      product_type: 'C',
      def_num_interest_only_instlmts: 1,
      def_num_of_installments: 1,
    },
    {
      id: 2,
      name: 'Product: debit',
      product_type: 'D',
      def_num_interest_only_instlmts: 1,
      def_num_of_installments: 1,
    },
  ],
};
