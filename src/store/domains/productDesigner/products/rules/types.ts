import { ISelectValue } from 'types';

export interface IProductRuleData {
  event_id: string | number;
  action_type: string | number;
  script: string;
  product_id: number;
}

export interface IProductRuleResp {
  product_rule: IProductRuleData;
}

export interface IProductRule {
  eventId: ISelectValue;
  actionType: ISelectValue;
  script: string;
  productId: number;
}

export interface IProductRuleReqToSend {
  product_id: number;
  event_id?: number | string;
  action_type?: number | string;
}

export interface IProductRulesState {
  currentProductRule: IProductRuleData;
}
