import {
  ICurrencyRate,
  ICurrencyRateData,
  ICurrencyRatesFilter,
} from './types';

import { ISelectValue } from 'types';
import { stringsUtil } from 'utils';

export const prepareDataToRender = (data: Partial<ICurrencyRateData>): Partial<ICurrencyRate> => {
  if (!data) {
    return null;
  }

  const {
    id,
    institution_name,
    provider,
    from_currency,
    to_currency,
    spot_rate,
    provider_datetime,
    created_datetime,
  } = data;

  return {
    id,
    institutionName: institution_name,
    provider,
    fromCurrency: from_currency,
    toCurrency: to_currency,
    spotRate: stringsUtil.numberToFixed(spot_rate, 5),
    providerDatetime: provider_datetime,
    createdDatetime: created_datetime,
  };
};

export const prepareDetailsToRender = (
  data: Partial<ICurrencyRateData>,
  currenciesOptions: Array<ISelectValue>
) => {
  if (!data) {
    return null;
  }

  const {
    id,
    institution_id,
    institution_name,
    provider,
    from_currency_num_code,
    to_currency_num_code,
    spot_rate,
    buy_rate,
    sell_rate,
    provider_datetime,
    created_datetime,
  } = data;

  return {
    id,
    institutionId: {
      value: institution_id,
      label: institution_name,
    },
    provider: {
      value: provider,
      label: provider,
    },
    fromCurrency: currenciesOptions.find(el => el.value === from_currency_num_code),
    toCurrency: currenciesOptions.find(el => el.value === to_currency_num_code),
    spotRate: stringsUtil.numberToFixed(spot_rate, 5),
    buyRate: stringsUtil.numberToFixed(buy_rate, 5),
    sellRate: stringsUtil.numberToFixed(sell_rate, 5),
    providerDatetime: provider_datetime,
    createdDatetime: created_datetime,
  };
};

export const prepareFilterToSend = (data: Partial<ICurrencyRatesFilter>) => {
  if (!data) {
    return null;
  }

  const {
    institutionId,
    provider,
    providerDateFrom,
    providerDateTo,
    createdDateFrom,
    createdDateTo,
    fromCurrency,
    toCurrency,
  } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    provider: provider ? provider.value : null,
    provider_date_from: providerDateFrom,
    provider_date_to: providerDateTo,
    created_date_from: createdDateFrom,
    created_date_to: createdDateTo,
    from_currency: fromCurrency ? fromCurrency.value : null,
    to_currency: toCurrency ? toCurrency.value : null,
  };
};
