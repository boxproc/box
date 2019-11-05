import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerId } from '../customers';
import { LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });

export const activateLedgerCard = (cardId: number) =>
  apiClient.post(lenderCardsPathNames.ACTIVATE_CARD, {
    data: { card_id: cardId },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClient.post(lenderCardsPathNames.CHANGE_STATUS, { data });

export const filterLedgerCardsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post(lenderCardsPathNames.GET, { data });
