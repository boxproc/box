import React from 'react';

import { withSpinner } from 'components';

import PageTemplate from 'containers/PageTemplate';
import { tableColumns } from './components';

import {
  DictionaryCurrenciesItemPrepared,
  HandleGetDictionaryCurrencies,
} from 'store/domains';

interface CurrenciesProps {
  getDictionaryCurrencies: HandleGetDictionaryCurrencies;
  dictionaryCurrencies: Array<DictionaryCurrenciesItemPrepared>;
}

export const Currencies: React.FC<CurrenciesProps> = ({
  getDictionaryCurrencies,
  dictionaryCurrencies,
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
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Currencies);
