import {
  LedgerCardIds,
  LedgerCardIdsPrepared,
  LedgerCardItem,
  LedgerCardItemPrepared,
  LedgerCardsFilterPrepared,
} from './types';

export const prepareValuesToRender = (values: Partial<LedgerCardItem>):
  LedgerCardItemPrepared => {
  if (!values) {
    return null;
  }

  return {
    id: values.id,
    accountId: values.account_id,
    panAlias: values.pan_alias,
    panMasked: values.pan_masked,
    expiryDate: values.expiry_date,
    status: values.card_status_id,
  };
};

export const preparedFilterToSend = (params: Partial<LedgerCardsFilterPrepared>) => {
  if (!params) {
    return null;
  }

  const { id, accountId, panAlias, customerId } = params;

  return {
    id: id ? id : null,
    account_id: accountId ? accountId : null,
    customer_id: customerId ? customerId : null,
    pan_alias: panAlias ? panAlias : null,
  };
};

export const prepareLedgerCartIds = (ids: LedgerCardIds): LedgerCardIdsPrepared => {
  if (!ids) {
    return null;
  }

  const { cardId, cardStatusId } = ids;

  return {
    card_id: cardId,
    card_status_id: cardStatusId,
  };
};
