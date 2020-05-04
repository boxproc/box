import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';

import { modalNamesConst, currencyRatesProvidersOptions } from 'consts';

import { ICurrencyRate, THandleFilterCurrencyRates } from 'store';
import { tableColumns } from './components';
import { CurrencyRatesFilter } from './forms';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface ICurrencyRates {
  currencyRatesData: ImmutableArray<Partial<ICurrencyRate>>;
  filterCurrencyRates: THandleFilterCurrencyRates;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
}

const CurrencyRates: React.FC<ICurrencyRates> = ({
  currencyRatesData,
  filterCurrencyRates,
  institutionsOptions,
  isLoading,
}) => {
  const [providerDatetimeFrom, setProviderDatetimeFrom] = React.useState(null);
  const [providerDatetimeTo, setProviderDatetimeTo] = React.useState(null);
  const [createdDatetimeFrom, setCreatedDatetimeFrom] = React.useState(null);
  const [createdDatetimeTo, setCreatedDatetimeTo] = React.useState(null);

  React.useEffect(
    () => {
      setProviderDatetimeFrom(dateUtil.yesterdayDateTime());
      setProviderDatetimeTo(dateUtil.todayDateTime());
      setCreatedDatetimeFrom(dateUtil.yesterdayDateTime());
      setCreatedDatetimeTo(dateUtil.todayDateTime());
    },
    []
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        rateProvider: currencyRatesProvidersOptions.find(el => el.value === 'custom'),
        providerDatetimeFrom,
        providerDatetimeTo,
        createdDatetimeFrom,
        createdDatetimeTo,
      };
    },
    [
      institutionsOptions,
      providerDatetimeFrom,
      providerDatetimeTo,
      createdDatetimeFrom,
      createdDatetimeTo,
    ]
  );

  return (
    <PageTemplate
      title="Currency Rates"
      data={currencyRatesData}
      columns={tableColumns}
      newModalName={modalNamesConst.ADD_CURRENCY_RATE}
      viewingModalName={modalNamesConst.EDIT_CURRENCY_RATE}
      filterAction={filterCurrencyRates}
      isDownloadButton={true}
      isLoading={isLoading}
      initialFilterValues={initialFilterValues}
      FilterForm={
        <CurrencyRatesFilter
          isDisabled={isLoading}
          institutionsOptions={institutionsOptions}
        />
      }
    />
  );
};

export default CurrencyRates;
