// import { successResponseMock } from 'consts';
import { apiClientService } from 'services';
// import { currencyRatesMock } from './mock';
import { ICurrencyRateData, ICurrencyRatesFilterToSend } from './types';

// import { throttleUtil } from 'utils';

/**
 * Filter currency rates API
 */
export const filterCurrencyRates = (data: Partial<ICurrencyRatesFilterToSend>) =>
  // throttleUtil.getDataAfter(currencyRatesMock, 500);
apiClientService.post('ui/ledger/currency_rates/get', { data });

/**
 * Add currency rate API
 */
export const addCurrencyRate = (data: Partial<ICurrencyRateData>) =>
  // throttleUtil.getDataAfter(successResponseMock, 500);
  apiClientService.post('ui/ledger/currency_rates', { data });
