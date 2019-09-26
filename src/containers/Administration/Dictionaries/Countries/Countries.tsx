import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import {
  DictionaryCountriesItemPrepared,
  HandleGetDictionaryCountries,
} from 'store/domains';

interface CountriesProps {
  getDictionaryCountries: HandleGetDictionaryCountries;
  dictionaryCountries: Array<DictionaryCountriesItemPrepared>;
}

export const Countries: React.FC<CountriesProps> = ({
  getDictionaryCountries,
  dictionaryCountries,
}) => {
  React.useEffect(
    () => {
      getDictionaryCountries();
    },
    [getDictionaryCountries]
  );

  return (
    <TablePage
      title="Countries"
      data={dictionaryCountries}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Countries);
