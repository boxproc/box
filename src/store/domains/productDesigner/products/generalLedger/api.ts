import { productsPathNames } from 'consts';

import { apiClient } from 'services';

import { GeneralLedgerItem } from './types';

export const updateGeneralLedger = (data: Partial<GeneralLedgerItem>) =>
  apiClient.post(productsPathNames.UPDATE_GENERAL_LEDGER, { data });
