import React from 'react';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryCurrenciesItemPrepared,
  HandleGetDictionaryCurrencies,
} from 'store/domains';

interface CurrenciesProps {
  getDictionaryCurrencies: HandleGetDictionaryCurrencies;
  dictionaryCurrencies: Array<DictionaryCurrenciesItemPrepared>;
  isLoading: boolean;
}

export const Currencies: React.FC<CurrenciesProps> = ({
  getDictionaryCurrencies,
  dictionaryCurrencies,
  isLoading,
}) => {
  React.useEffect(
    () => {
      getDictionaryCurrencies();
    },
    [getDictionaryCurrencies]
  );

  return (
    <PageTemplate
      title="Currencies"
      data={dictionaryCurrencies}
      columns={tableColumns}
      isSearchable={true}
      isDownloadButton={true}
      isLoading={isLoading}
    />
  );
};

export default Currencies;
