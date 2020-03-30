import {
  ICard,
  ICardData,
  ICardIds,
  ICardIdsToSend,
  ICardsFilter,
} from './types';

export const prepareDataToRender = (data: Partial<ICardData>): ICard => {
  if (!data) {
    return null;
  }

  return {
    id: data.id,
    accountId: data.account_id,
    customerId: data.customer_id,
    panAlias: data.pan_alias,
    panMasked: data.pan_masked,
    expiryDate: data.expiry_date,
    status: data.card_status_name,
  };
};

export const prepareFilterToSend = (data: Partial<ICardsFilter>) => {
  if (!data) {
    return null;
  }

  const { cardId, accountId, panAlias, customerId, institutionId } = data;

  return {
    id: cardId ? cardId : null,
    account_id: accountId ? accountId : null,
    customer_id: customerId ? customerId : null,
    pan_alias: panAlias ? panAlias : null,
    institution_id: institutionId ? institutionId.value : null,
  };
};

export const prepareCardIds = (ids: ICardIds): ICardIdsToSend => {
  if (!ids) {
    return null;
  }

  const { cardId, cardStatusId } = ids;

  return {
    card_id: cardId,
    card_status_id: cardStatusId,
  };
};
