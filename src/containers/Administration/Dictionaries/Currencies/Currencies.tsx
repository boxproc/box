import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { tableColumns } from './tableColumns';

import PageTemplate from 'containers/PageTemplate';

import { IDictionaryCurrencyPrepared, THandleGetDictionaryCurrencies } from 'store';

interface CurrenciesProps {
  currenciesData: ImmutableArray<IDictionaryCurrencyPrepared>;
  getCurrenciesData: THandleGetDictionaryCurrencies;
  isLoading: boolean;
}

export const Currencies: React.FC<CurrenciesProps> = ({
  currenciesData,
  getCurrenciesData,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getCurrenciesData();
    },
    [getCurrenciesData]
  );

  return (
    <PageTemplate
      columns={tableColumns}
      data={currenciesData}
      isDownloadButton={true}
      isLoading={isLoading}
      isSearchable={true}
      title="Currencies"
    />
  );
};

export default Currencies;
