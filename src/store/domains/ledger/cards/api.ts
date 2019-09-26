import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerCardsFilterPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });

export const activateLedgerCard = (panAlias: string) =>
  apiClient.post(lenderCardsPathNames.ACTIVATE_CARD, {
    data: { pan_alias: panAlias },
  });
