import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerCardIdsPrepared, LedgerCardsFilterPrepared } from './types';

export const filterLedgerCards = (data: Partial<LedgerCardsFilterPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });

export const activateLedgerCard = (panAlias: string) =>
  apiClient.post(lenderCardsPathNames.ACTIVATE_CARD, {
    data: { pan_alias: panAlias },
  });

export const changeLedgerCardStatus = (data: LedgerCardIdsPrepared) =>
  apiClient.post(lenderCardsPathNames.CHANGE_STATUS, { data });
