import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { tableColumns } from './tableColumns';

import PageTemplate from 'containers/PageTemplate';

import { IDictionaryCountryPrepared, THandleGetDictionaryCountries } from 'store';

interface ICountries {
  countriesData: ImmutableArray<IDictionaryCountryPrepared>;
  getCountriesData: THandleGetDictionaryCountries;
  isLoading: boolean;
}

export const Countries: React.FC<ICountries> = ({
  countriesData,
  getCountriesData,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getCountriesData();
    },
    [getCountriesData]
  );

  return (
    <PageTemplate
      columns={tableColumns}
      data={countriesData}
      isDownloadButton={true}
      isLoading={isLoading}
      isSearchable={true}
      title="Countries"
    />
  );
};

export default Countries;
