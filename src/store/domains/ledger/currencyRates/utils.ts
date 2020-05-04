import {
  ICurrencyRate,
  ICurrencyRateData,
  ICurrencyRateEditable,
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
    institution_id,
    institution_name,
    rate_provider,
    from_currency,
    to_currency,
    spot_rate,
    provider_datetime,
    created_datetime,
  } = data;

  return {
    id,
    institutionName: institution_name,
    institutionId: institution_id,
    rateProvider: rate_provider,
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
    rate_provider,
    spot_rate,
    buy_rate,
    sell_rate,
    provider_datetime,
    created_datetime,
    from_currency,
    to_currency,
  } = data;

  return {
    id,
    institutionId: {
      value: institution_id,
      label: institution_name,
    },
    rateProvider: {
      value: rate_provider,
      label: rate_provider,
    },
    fromCurrency: currenciesOptions.find(el => el.value === from_currency),
    toCurrency: currenciesOptions.find(el => el.value === to_currency),
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
    rateProvider,
    providerDatetimeFrom,
    providerDatetimeTo,
    createdDatetimeFrom,
    createdDatetimeTo,
    fromCurrency,
    toCurrency,
  } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    rate_provider: rateProvider ? rateProvider.value : null,
    provider_date_from: providerDatetimeFrom,
    provider_date_to: providerDatetimeTo,
    created_date_from: createdDatetimeFrom,
    created_date_to: createdDatetimeTo,
    from_currency: fromCurrency ? fromCurrency.value : null,
    to_currency: (toCurrency && toCurrency.value) ? toCurrency.value : null,
  };
};

export const prepareDataToSend = (data: Partial<ICurrencyRateEditable>) => {
  if (!data) {
    return null;
  }

  const {
    spotRate,
    buyRate,
    sellRate,
    institutionId,
    rateProvider,
    fromCurrency,
    toCurrency,
  } = data;

  return {
    spot_rate: stringsUtil.toNumber(spotRate),
    buy_rate: stringsUtil.toNumber(buyRate),
    sell_rate: stringsUtil.toNumber(sellRate),
    institution_id: institutionId && institutionId.value,
    rate_provider: rateProvider && rateProvider.value,
    from_currency: fromCurrency && fromCurrency.value,
    to_currency: toCurrency && toCurrency.value,
  };
};
