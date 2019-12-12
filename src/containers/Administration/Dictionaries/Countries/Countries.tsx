import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
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
    <PageTemplate
      title="Countries"
      data={dictionaryCountries}
      columns={tableColumns}
      isDownloadButton={true}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Countries);
