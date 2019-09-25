import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { AdminCurrenciesItemPrepared, HandleGetAdminCurrencies } from 'store/domains';

interface CurrenciesProps {
  getAdminCurrencies: HandleGetAdminCurrencies;
  adminCurrencies: Array<AdminCurrenciesItemPrepared>;
}

export const Currencies: React.FC<CurrenciesProps> = ({
  getAdminCurrencies,
  adminCurrencies,
}) => {
  React.useEffect(
    () => {
      getAdminCurrencies();
    },
    [getAdminCurrencies]
  );

  return (
    <TablePage
      title="Currencies"
      data={adminCurrencies}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Currencies);
