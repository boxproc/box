import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, MaskField, SelectField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { HandleGetInstitutionProducts } from 'store/domains';

import { SelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface StatementsFilterProps {
  institutionsOptions: Array<SelectValue>;
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionValue: SelectValue;
  institutionProductsOptions: Array<SelectValue>;
  isLoadingInstitutionProducts: boolean;
  isDisabled: boolean;
}

const StatementsFilter: React.FC<StatementsFilterProps> = ({
  institutionsOptions,
  institutionValue,
  getInstitutionProducts,
  institutionProductsOptions,
  isLoadingInstitutionProducts,
  isDisabled,
}) => {
  const currentInstitutionId = React.useMemo(
    () => institutionValue && institutionValue.value,
    [institutionValue]
  );

  React.useEffect(
    () => {
      if (currentInstitutionId) {
        getInstitutionProducts(currentInstitutionId);
      }
    },
    [getInstitutionProducts, currentInstitutionId]
  );

  return (
    <Flex
      alignItems="flex-start"
      flexWrap="wrap"
    >
      <Box width={[1 / 4]} p="10px">
        <Field
          id="institutionId"
          name="institutionId"
          component={SelectField}
          label="Institution"
          placeholder="Select Institution"
          options={institutionsOptions}
          isClearable={false}
          isDisabled={isDisabled}
          validate={[formErrorUtil.required]}
        />
      </Box>
      <Box width="150px" p="10px">
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
      <Box width={[1 / 4]} p="10px">
        <Field
          id="accountAlias"
          name="accountAlias"
          component={InputField}
          label="Account Alias"
          placeholder="Enter Account Alias"
          disabled={isDisabled}
        />
      </Box>
      <Box width="120px" p="10px">
        <Field
          id="statementsDateFrom"
          name="statementsDateFrom"
          component={MaskField}
          label="Date From"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width="120px" p="10px">
        <Field
          id="statementsDateTo"
          name="statementsDateTo"
          component={MaskField}
          label="Date To"
          placeholder={dateFormat.DATE}
          mask={maskFormat.DATE}
          disabled={isDisabled}
          validate={[
            formErrorUtil.required,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
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
          isDisabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
        <Field
          id="firstName"
          name="firstName"
          component={InputField}
          label="First Name"
          placeholder="Enter First Name"
          disabled={isDisabled}
        />
      </Box>
      <Box width={[1 / 4]} p="10px">
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

export default StatementsFilter;
