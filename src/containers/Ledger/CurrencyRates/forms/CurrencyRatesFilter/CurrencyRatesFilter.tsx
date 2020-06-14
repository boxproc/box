import React from 'react';
import { Field } from 'redux-form';

import { Box } from '@rebass/grid';

import { MaskField, SelectField } from 'components';
import { currencyRatesProvidersOptions, dateFormatConst, maskFormatConst } from 'consts';

import { THandleGetDictionaryCurrencies } from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface ICurrencyRatesFilter {
  currenciesOptions: Array<ISelectValue>;
  getCurrencies: THandleGetDictionaryCurrencies;
  institutionsOptions: Array<ISelectValue>;
  isDisabled: boolean;
  isLoadingCurrencies: boolean;
}

const CurrencyRatesFilter: React.FC<ICurrencyRatesFilter> = ({
  currenciesOptions,
  getCurrencies,
  institutionsOptions,
  isDisabled,
  isLoadingCurrencies,
}) => {
  React.useEffect(
    () => {
      getCurrencies();
    },
    [getCurrencies]
  );

  return (
    <React.Fragment>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          isRequired={true}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="rateProvider"
          name="rateProvider"
          component={SelectField}
          label="Provider"
          placeholder="Select Provider"
          options={currencyRatesProvidersOptions}
          isClearable={false}
          isDisabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="fromCurrency"
          name="fromCurrency"
          component={SelectField}
          label="From Currency"
          placeholder="Select From Currency"
          options={currenciesOptions}
          isDisabled={isDisabled}
          isRequired={true}
          isLoading={isLoadingCurrencies}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="toCurrency"
          name="toCurrency"
          component={SelectField}
          label="To Currency"
          placeholder="Select To Currency"
          options={[
            { value: '', label: 'Select all' },
            ...currenciesOptions,
          ]}
          isDisabled={isDisabled}
          isRequired={true}
          isLoading={isLoadingCurrencies}
          validate={[formErrorUtil.isRequired]}
        />
      </Box>
      <Box width="160px" p="8px">
        <Field
          id="providerDatetimeFrom"
          name="providerDatetimeFrom"
          component={MaskField}
          label="Provider Datetime From"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="160px" p="8px">
        <Field
          id="providerDatetimeTo"
          name="providerDatetimeTo"
          component={MaskField}
          label="Provider Datetime To"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="160px" p="8px">
        <Field
          id="createdDatetimeFrom"
          name="createdDatetimeFrom"
          component={MaskField}
          label="Created Datetime From"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
      <Box width="160px" p="8px">
        <Field
          id="createdDatetimeTo"
          name="createdDatetimeTo"
          component={MaskField}
          label="Created Datetime To"
          placeholder={dateFormatConst.DATE_TIME}
          mask={maskFormatConst.DATE_TIME}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDateTime,
          ]}
        />
      </Box>
    </React.Fragment>
  );
};

export default CurrencyRatesFilter;
