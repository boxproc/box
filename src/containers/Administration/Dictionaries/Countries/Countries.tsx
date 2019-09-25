import React from 'react';

import { TablePage, withSpinner } from 'components';

import { tableColumns } from './components';

import { AdminCountriesItemPrepared, HandleGetAdminCountries } from 'store/domains';

interface CountriesProps {
  getAdminCountries: HandleGetAdminCountries;
  adminCountries: Array<AdminCountriesItemPrepared>;
}

export const Countries: React.FC<CountriesProps> = ({
  getAdminCountries,
  adminCountries,
}) => {
  React.useEffect(
    () => {
      getAdminCountries();
    },
    [getAdminCountries]
  );

  return (
    <TablePage
      title="Countries"
      data={adminCountries}
      columns={tableColumns}
    />
  );
};

export default withSpinner({
  isFixed: true,
})(Countries);
