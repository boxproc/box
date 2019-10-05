import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });

export const activateLedgerCard = (cardId: number) =>
  apiClient.post(lenderCardsPathNames.ACTIVATE_CARD, {
    data: { card_id: cardId },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClient.post(lenderCardsPathNames.CHANGE_STATUS, { data });
