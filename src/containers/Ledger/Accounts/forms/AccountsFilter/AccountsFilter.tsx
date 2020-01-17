import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField } from 'components';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface AccountsFilterProps {
  institutionsOptions: Array<SelectValue>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValue;
  accountAliasValue: string;
  institutionProductsOptions: Array<SelectValue>;
  isLoadingInstitutionProducts: boolean;
}

const AccountsFilter: React.FC<AccountsFilterProps> = ({
  institutionsOptions,
  institutionValue,
  accountAliasValue,
  getInstitutionProducts,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
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

  return (
    <Flex alignItems="flex-start" flexWrap="wrap">
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="150px" p="10px">
        <Field
          id="id"
          name="id"
          component={InputField}
          label="Account"
          placeholder="Enter Account ID"
          isNumber={true}
          validate={[formErrorUtil.isInteger]}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="accountAlias"
          name="accountAlias"
          component={InputField}
          label="Account Alias"
          placeholder="Enter Account Alias"
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="accountAliasAdditional"
          name="accountAliasAdditional"
          component={InputField}
          label="Account Alias Additional"
          placeholder={accountAliasValue && 'Enter Account Alias Additional'}
          disabled={!accountAliasValue}
          hint={!accountAliasValue && 'Fill account alias'}
        />
      </Box>
      <Delimiter />
      <Box width={[1 / 4]} p="10px">
        <Field
          id="product"
          name="product"
          component={SelectField}
          label="Product"
          placeholder="Select Product"
          options={institutionProductsOptions}
          isMulti={true}
          isLoading={isLoadingInstitutionProducts}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="firstName"
          name="firstName"
          component={InputField}
          label="First Name"
          placeholder="Enter First Name"
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="lastName"
          name="lastName"
          component={InputField}
          label="Last Name"
          placeholder="Enter Last Name"
        />
      </Box>
    </Flex>
  );
};

export default AccountsFilter;
