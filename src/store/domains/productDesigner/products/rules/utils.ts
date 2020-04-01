import { actionTypesOptions } from 'consts';

import { IProductRule, IProductRuleData } from './types';

export const prepareRuleToRender = (rule: IProductRuleData) => {
  if (!rule) {
    return null;
  }

  return {
    actionType: actionTypesOptions.find(el => el.value === rule.action_type),
    script: rule.script,
    productId: rule.product_id,
  };
};

export const prepareRuleToSend = (rule: Partial<IProductRule>) => {
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

export const prepareRuleIdsToSend = (data: Partial<IProductRule>) => {
  if (!data || !data.eventId || !data.actionType) {
    return null;
  }

  const { eventId, actionType } = data;

  return {
    event_id: eventId && eventId.value,
    action_type: actionType && actionType.value,
  };
};
