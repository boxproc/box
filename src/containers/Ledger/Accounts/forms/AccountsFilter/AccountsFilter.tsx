import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField } from 'components';

import { formNamesConst } from 'consts';

import { HandleGetInstitutionProducts } from 'store';

import { ISelectValue, TChangeFieldValue } from 'types';
import { formErrorUtil } from 'utils';

interface IAccountsFilter {
  accountAliasValue: string;
  filterChange: TChangeFieldValue;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionProductsOptions: Array<ISelectValue>;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isDisabled: boolean;
  isLoadingInstitutionProducts: boolean;
}

const AccountsFilter: React.FC<IAccountsFilter> = ({
  institutionsOptions,
  institutionValue,
  accountAliasValue,
  getInstitutionProducts,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
  isDisabled,
  filterChange,
}) => {
  const currentInstitutionId = institutionValue && institutionValue.value;

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  React.useEffect(
    () => {
      if (!accountAliasValue) {
        filterChange(formNamesConst.FILTER, 'accountAliasAdditional', null);
      }
    },
    [accountAliasValue, filterChange]
  );

  const accountAliasAdditionalPlaceholder = React.useMemo(
    () => accountAliasValue && 'Enter Account Alias Additional',
    [accountAliasValue]
  );

  return (
    <Flex alignItems="flex-start" flexWrap="wrap">
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
      <Box width="130px" p="8px">
        <Field
          id="accountId"
          name="accountId"
          component={InputField}
          label="Account ID"
          placeholder="Enter ID"
          isNumber={true}
          disabled={isDisabled}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="accountAlias"
          name="accountAlias"
          component={InputField}
          label="Account Alias"
          placeholder="Enter Account Alias"
          disabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="accountAliasAdditional"
          name="accountAliasAdditional"
          component={InputField}
          label="Account Alias Additional"
          placeholder={accountAliasAdditionalPlaceholder}
          disabled={!accountAliasValue || isDisabled}
          hint={!accountAliasValue && 'Fill account alias'}
        />
      </Box>
      <Delimiter />
      <Box width={[1 / 4]} p="8px">
        <Field
          id="product"
          name="product"
          component={SelectField}
          label="Product"
          placeholder="Select Product"
          options={institutionProductsOptions}
          isMulti={true}
          isLoading={isLoadingInstitutionProducts}
          isDisabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="firstName"
          name="firstName"
          component={InputField}
          label="First Name"
          placeholder="Enter First Name"
          disabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="lastName"
          name="lastName"
          component={InputField}
          label="Last Name"
          placeholder="Enter Last Name"
          disabled={isDisabled}
        />
      </Box>
    </Flex>
  );
};

export default AccountsFilter;
