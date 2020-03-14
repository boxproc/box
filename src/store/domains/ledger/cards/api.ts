import { apiClientService } from 'services';

import { LedgerId } from '../customers';
import { LedgerCardIdsPrepared, LedgerCardsFilter } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilter>) =>
  apiClientService.post('ui/ledger/cards/get', { data });

export const activateLedgerCard = (cardId: number) =>
  apiClientService.post('ui/ledger/cards/activate_card', {
    data: { card_id: cardId },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClientService.post('ui/ledger/cards/change_status', { data });

export const filterLedgerCardsById = (data: LedgerId) =>
  // throttleUtil.getDataAfter(ledgerCustomersFilteredItems, 500);
  apiClientService.post('ui/ledger/cards/get', { data });
