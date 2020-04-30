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
    institution_name,
    rate_provider,
    source_currency,
    target_currency,
    spot_rate,
    provider_datetime,
    created_datetime,
  } = data;

  return {
    id,
    institutionName: institution_name,
    rateProvider: rate_provider,
    fromCurrency: source_currency,
    toCurrency: target_currency,
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
    source_currency_num_code,
    target_currency_num_code,
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
    rateProvider: {
      value: rate_provider,
      label: rate_provider,
    },
    fromCurrency: currenciesOptions.find(el => el.value === source_currency_num_code),
    toCurrency: currenciesOptions.find(el => el.value === target_currency_num_code),
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
    providerDateFrom,
    providerDateTo,
    createdDateFrom,
    createdDateTo,
    fromCurrency,
    toCurrency,
  } = data;

  return {
    institution_id: institutionId ? institutionId.value : null,
    rate_provider: rateProvider ? rateProvider.value : null,
    provider_date_from: providerDateFrom,
    provider_date_to: providerDateTo,
    created_date_from: createdDateFrom,
    created_date_to: createdDateTo,
    source_currency: fromCurrency ? fromCurrency.value : null,
    target_currency: toCurrency ? toCurrency.value : null,
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
    source_currency: fromCurrency && fromCurrency.value,
    target_currency: toCurrency && toCurrency.value,
  };
};
