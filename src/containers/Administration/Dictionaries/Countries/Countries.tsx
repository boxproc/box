import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryCountriesItemPrepared,
  HandleGetDictionaryCountries,
} from 'store/domains';

interface CountriesProps {
  getDictionaryCountries: HandleGetDictionaryCountries;
  dictionaryCountries: Array<DictionaryCountriesItemPrepared>;
  isLoading: boolean;
}

export const Countries: React.FC<CountriesProps> = ({
  getDictionaryCountries,
  dictionaryCountries,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getDictionaryCountries();
    },
    [getDictionaryCountries]
  );

  return (
    <PageTemplate
      title="Countries"
      data={dictionaryCountries}
      columns={tableColumns}
      isSearchable={true}
      isDownloadButton={true}
      isLoading={isLoading}
    />
  );
};

export default Countries;
