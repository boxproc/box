import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, MaskField, SelectField } from 'components';
import { dateFormatConst, maskFormatConst } from 'consts';
import { HandleGetInstitutionProducts } from 'store';
import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IStatementsFilter {
  getInstitutionProducts: HandleGetInstitutionProducts;
  institutionProductsOptions: Array<ISelectValue>;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isDisabled: boolean;
  isLoadingInstProducts: boolean;
}

const StatementsFilter: React.FC<IStatementsFilter> = ({
  getInstitutionProducts,
  institutionProductsOptions,
  institutionsOptions,
  institutionValue,
  isDisabled,
  isLoadingInstProducts,
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
      <Box width="120px" p="8px">
        <Field
          id="statementsDateFrom"
          name="statementsDateFrom"
          component={MaskField}
          label="Date From"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width="120px" p="8px">
        <Field
          id="statementsDateTo"
          name="statementsDateTo"
          component={MaskField}
          label="Date To"
          placeholder={dateFormatConst.DATE}
          mask={maskFormatConst.DATE}
          disabled={isDisabled}
          isRequired={true}
          validate={[
            formErrorUtil.isRequired,
            formErrorUtil.isDate,
          ]}
        />
      </Box>
      <Box width={[1 / 4]} p="8px">
        <Field
          id="product"
          name="product"
          component={SelectField}
          label="Product"
          placeholder="Select Product"
          options={institutionProductsOptions}
          isMulti={true}
          isLoading={isLoadingInstProducts}
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

export default StatementsFilter;
