import { lenderCardsURLs } from 'consts';

import { apiClient } from 'services';

import { LedgerId } from '../customers';
import { LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterPrepared>) =>
  apiClient.post(lenderCardsURLs.GET, { data });

export const activateLedgerCard = (cardId: number) =>
  apiClient.post(lenderCardsURLs.ACTIVATE_CARD, {
    data: { card_id: cardId },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClient.post(lenderCardsURLs.CHANGE_STATUS, { data });

export const filterLedgerCardsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderCardsURLs.GET, { data });
