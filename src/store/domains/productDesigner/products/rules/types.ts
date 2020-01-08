import { SelectValues } from 'types';

export interface ProductRulesItemResp {
  event_id: string | number;
  action_type: string | number;
  script: string;
  product_id: number;
}

export interface ProductRuleResp {
  product_rule: ProductRulesItemResp;
}

export interface ProductRulesItem {
  eventId: SelectValues;
  actionType: SelectValues;
  script: string;
  productId: number;
}

export interface ProductRuleRequest {
  productId: number;
  eventId?: number | string;
  actionType?: number | string;
}

export interface ProductRuleRequestPrepared {
  product_id: number;
  event_id?: number | string;
  action_type?: number | string;
}

export interface ProductRulesState {
  currentProductRule: ProductRulesItemResp;
}
