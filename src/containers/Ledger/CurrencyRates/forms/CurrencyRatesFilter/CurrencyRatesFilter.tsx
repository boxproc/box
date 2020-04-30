import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import styled from 'theme';

import { Delimiter, MaskField, SelectField } from 'components';
import { currencyRatesProvidersOptions, dateFormatConst, maskFormatConst } from 'consts';

import { THandleGetDictionaryCurrencies } from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

const CurrencyWrapper = styled(Box)`
  min-width: 235px
  max-width: 480px;
`;

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
          isDisabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 8]} p="8px">
        <Field
          id="providerDateFrom"
          name="providerDateFrom"
          component={MaskField}
          label="Provider Date From"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width={[1 / 8]} p="8px">
        <Field
          id="providerDateTo"
          name="providerDateTo"
          component={MaskField}
          label="Provider Date To"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width={[1 / 8]} p="8px">
        <Field
          id="createdDateFrom"
          name="createdDateFrom"
          component={MaskField}
          label="Created Date From"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width={[1 / 8]} p="8px">
        <Field
          id="createdDateTo"
          name="createdDateTo"
          component={MaskField}
          label="Created Date To"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Delimiter />
      <Flex width={[1]} alignItems="flex-start">
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
        <CurrencyWrapper p="8px">
          <Field
            id="toCurrency"
            name="toCurrency"
            component={SelectField}
            label="To Currency"
            placeholder="Select To Currency"
            options={[
              { value: '', label: 'Select All' },
              ...currenciesOptions,
            ]}
            isDisabled={isDisabled}
            isRequired={true}
            isLoading={isLoadingCurrencies}
            validate={[formErrorUtil.isRequired]}
          />
        </CurrencyWrapper>
      </Flex>
    </React.Fragment>
  );
};

export default CurrencyRatesFilter;
