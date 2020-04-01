import { IProductRuleResp } from './types';

export const productRulesMock: IProductRuleResp = {
  product_rule: {
    event_id: 3,
    action_type: 'X',
    script:
      `function test(a, b) {
    return a + b;
}`,
    product_id: 1,
  },
};
