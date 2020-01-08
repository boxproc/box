import { actionTypesOptions } from 'consts';

import { ProductRulesItem, ProductRulesItemResp } from './types';

export const prepareProductRuleData = (rule: ProductRulesItemResp) => {
  if (!rule) {
    return null;
  }

  return {
    actionType: actionTypesOptions.find(el => el.value === rule.action_type),
    script: rule.script,
    productId: rule.product_id,
  };
};

export const prepareProductRuleDataToSend = (rule: Partial<ProductRulesItem>) => {
  if (!rule) {
    return null;
  }

  const { eventId, actionType, script } = rule;

  return {
    event_id: eventId && eventId.value,
    action_type: actionType && actionType.value,
    script: script ? script : null,
  };
};

export const prepareProductRuleIdsToSend = (data: Partial<ProductRulesItem>) => {
  if (!data || !data.eventId || !data.actionType) {
    return null;
  }

  const { eventId, actionType } = data;

  return {
    event_id: eventId && eventId.value,
    action_type: actionType && actionType.value,
  };
};
