import React from 'react';
import { ImmutableArray } from 'seamless-immutable';

import { Paragraph } from 'components';
import PageTemplate from 'containers/PageTemplate';

import { modalNamesConst } from 'consts';

import { ICurrencyRate, THandleFilterCurrencyRates } from 'store';
import { tableColumns } from './components';
import { CurrencyRatesFilter } from './forms';

import { ISelectValue } from 'types';
import { dateUtil } from 'utils';

interface ICurrencyRates {
  currencyRatesData: ImmutableArray<Partial<ICurrencyRate>>;
  filterCurrencyRates: THandleFilterCurrencyRates;
  institutionsOptions: Array<ISelectValue>;
  isLoading: boolean;
}

const CurrencyRates: React.FC<ICurrencyRates> = ({
  currencyRatesData,
  filterCurrencyRates,
  institutionsOptions,
  isLoading,
}) => {
  const [providerDateFrom, setProviderDateFrom] = React.useState(null);
  const [providerDateTo, setProviderDateTo] = React.useState(null);
  const [createdDateFrom, setCreatedDateFrom] = React.useState(null);
  const [createdDateTo, setCreatedDateTo] = React.useState(null);

  React.useEffect(
    () => {
      setProviderDateFrom(dateUtil.yesterdayDate());
      setProviderDateTo(dateUtil.todayDate());
      setCreatedDateFrom(dateUtil.yesterdayDate());
      setCreatedDateTo(dateUtil.todayDate());
    },
    []
  );

  const initialFilterValues = React.useMemo(
    () => {
      return {
        institutionId: institutionsOptions[0],
        providerDateFrom,
        providerDateTo,
        createdDateFrom,
        createdDateTo,
      };
    },
    [
      institutionsOptions,
      providerDateFrom,
      providerDateTo,
      createdDateFrom,
      createdDateTo,
    ]
  );

  return (
    <React.Fragment>
      <Paragraph>Works on mocks</Paragraph>
      <PageTemplate
        title="Currency Rates"
        data={currencyRatesData}
        columns={tableColumns}
        newModalName={modalNamesConst.ADD_CURRENCY_RATE}
        viewingModalName={modalNamesConst.EDIT_CURRENCY_RATE}
        filterAction={filterCurrencyRates}
        isDownloadButton={true}
        isLoading={isLoading}
        initialFilterValues={initialFilterValues}
        FilterForm={
          <CurrencyRatesFilter
            isDisabled={isLoading}
            institutionsOptions={institutionsOptions}
          />
        }
      />
    </React.Fragment>
  );
};

export default CurrencyRates;
