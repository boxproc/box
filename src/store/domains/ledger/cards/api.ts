import { lenderCardsPathNames } from 'consts';

import { apiClient } from 'services';

import { LedgerCardsFilterParamsPrepared } from './types';

export const getLedgerCards = () =>
  apiClient.post(lenderCardsPathNames.GET);

export const filterLedgerCards = (data: Partial<LedgerCardsFilterParamsPrepared>) =>
  apiClient.post(lenderCardsPathNames.GET, { data });
