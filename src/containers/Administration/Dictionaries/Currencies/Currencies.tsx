import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryCurrenciesItemPrepared,
  HandleGetDictionaryCurrencies,
} from 'store';

interface CurrenciesProps {
  getDictionaryCurrencies: HandleGetDictionaryCurrencies;
  dictionaryCurrencies: ImmutableArray<DictionaryCurrenciesItemPrepared>;
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
