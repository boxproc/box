import { apiClientService } from 'services';
import { LedgerId } from '../customers';
import { ICardIdsToSend, ICardsFilterToSend } from './types';

/**
 * Filter cards API
 */
export const filterCards = (data: Partial<ICardsFilterToSend>) =>
  apiClientService.post('ui/ledger/cards/get', { data });

/**
 * Activate card API
 */
export const activateCard = (cardId: number) =>
  apiClientService.post('ui/ledger/cards/activate_card', {
    data: { card_id: cardId },
  });

/**
 * Change card status API
 */
export const changeCardStatus = (data: ICardIdsToSend) =>
  apiClientService.post('ui/ledger/cards/change_status', { data });

/**
 * Filter cards bi ID API
 */
export const filterCardsById = (data: LedgerId) =>
  apiClientService.post('ui/ledger/cards/get', { data });
