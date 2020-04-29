// import { apiClientService } from 'services';
import { currencyRatesMock } from './mock';
import { ICurrencyRatesFilterToSend } from './types';

import { throttleUtil } from 'utils';

/**
 * Filter currency rates API
 */
export const filterCurrencyRates = (data: Partial<ICurrencyRatesFilterToSend>) =>
  throttleUtil.getDataAfter(currencyRatesMock, 500);
  // apiClientService.post('ui/ledger/currency_rates/get', { data });
