import {
  InstitutionProducts,
  ProductDetailsResp,
  ProductRuleResp,
  ProductsDataResp,
} from './types';

import { ResponseStatusType } from 'types';

export const productItemsData: ProductsDataResp = {
  response_status: {
    status_code: 0,
  },
  products: [
    {
      currency_code: 'AFN',
      default_statement_cycle_id: 1,
      description: 'Test revolving credit product',
      history_retention_number_of_day: 90,
      id: 1,
      institution_id: 1,
      locked_flag: 'N',
      name: 'Product: revolving credit',
      product_type: 'C',
      scheme: 'V',
      status: 'A',
    },
    {
      currency_code: 'AFN',
      default_statement_cycle_id: 1,
      description: 'Test debit product',
      history_retention_number_of_day: 90,
      id: 2,
      institution_id: 2,
      locked_flag: 'N',
      name: 'Product: debit',
      product_type: 'D',
      scheme: 'M',
      status: 'D',
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
    },
  ],
};

export const productItemsFilteredData: ProductsDataResp = {
  response_status: {
    status_code: 0,
  },
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
    },
  ],
};

export const productDetailsData: ProductDetailsResp = {
  response_status: {
    status_code: 0,
  },
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
  response_status: {
    status_code: 0,
  },
  product_rule: {
    // tslint:disable-next-line: max-line-length
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    event_id: 3,
    action_type: 'V',
    script:
      `class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}`,
    product_id: 1,
  },
};

export const institutionProducts: InstitutionProducts = {
  response_status: {
    status_code: 0,
  },
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
