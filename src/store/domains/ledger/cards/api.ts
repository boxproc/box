import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerCardsFilterParamsPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterParamsPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });

export const activateLedgerCard = (panAlias: string) =>
  apiClient.post(lenderCardsPathNames.ACTIVATE_CARD, {
    data: { pan_alias: panAlias },
  });
