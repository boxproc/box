import React from 'react';

import { TablePage, withSpinner } from 'components';

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
    <TablePage
      title="Currencies"
      data={dictionaryCurrencies}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Currencies);
