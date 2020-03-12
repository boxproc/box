import { apiClient } from 'services';

import { LedgerId } from '../customers';
import { LedgerCardIdsPrepared, LedgerCardsFilter } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilter>) =>
  apiClient.post('ui/ledger/cards/get', { data });

export const activateLedgerCard = (cardId: number) =>
  apiClient.post('ui/ledger/cards/activate_card', {
    data: { card_id: cardId },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClient.post('ui/ledger/cards/change_status', { data });

export const filterLedgerCardsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClient.post('ui/ledger/cards/get', { data });
