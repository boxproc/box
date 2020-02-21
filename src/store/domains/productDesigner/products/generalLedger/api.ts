import { apiUrls } from 'consts';

import { apiClient } from 'services';

import { GeneralLedgerItem } from './types';

export const updateGeneralLedger = (data: Partial<GeneralLedgerItem>) =>
  apiClient.post(apiUrls.products.UPDATE_GENERAL_LEDGER, { data });
