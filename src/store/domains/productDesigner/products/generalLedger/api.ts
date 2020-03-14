import { apiClientService } from 'services';

import { GeneralLedgerItem } from './types';

export const updateGeneralLedger = (data: Partial<GeneralLedgerItem>) =>
  apiClientService.post('ui/product_designer/products/update_general_ledger', { data });
