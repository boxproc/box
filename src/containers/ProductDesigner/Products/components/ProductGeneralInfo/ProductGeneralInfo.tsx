import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField, TextField } from 'components';

import { withLoadCurrencyCodes, WithLoadCurrencyCodesProps } from 'HOCs';

import { productTypesOptions, schemeTypesOptions, statusTypesOptions } from 'consts';

import { HandleGetCyclesDescriptions } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isEditMode?: boolean;
  institutionsOptions: Array<SelectValues>;
  getCyclesDescriptions: HandleGetCyclesDescriptions;
  cycleStatementsOptions: Array<SelectValues>;
  currentInstitution: SelectValues;
  isLoadingCycleDescriptions: boolean;
}

type ProductGeneralInfoAllProps = ProductGeneralInfoProps & WithLoadCurrencyCodesProps;

const ProductGeneralInfo: React.FC<ProductGeneralInfoAllProps> = ({
  currencyCodes,
  isCurrencyCodesLoading,
  isEditMode = false,
  institutionsOptions,
  getCyclesDescriptions,
  cycleStatementsOptions,
  currentInstitution,
  isLoadingCycleDescriptions,
}) => {
  React.useEffect(
    () => {
      getCyclesDescriptions({
        institutionId: currentInstitution && currentInstitution.value,
      });
    },
    [getCyclesDescriptions, currentInstitution]
  );

  return (
    <Box mx="-10px">
      <Flex
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="productType"
            name="productType"
            component={SelectField}
            label="Product Type"
            placeholder="Select Product Type"
            options={productTypesOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode}
            isClearable={false}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            placeholder="Enter Description"
            component={TextField}
            label="Description"
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusTypesOptions}
            isDisabled={isEditMode}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="scheme"
            name="scheme"
            component={SelectField}
            label="Scheme"
            placeholder="Select Scheme"
            options={schemeTypesOptions}
            isDisabled={false}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="currencyCode"
            name="currencyCode"
            component={SelectField}
            label="Currency Code"
            placeholder="Select Currency Code"
            options={currencyCodes}
            isDisabled={false}
            isLoading={isCurrencyCodesLoading}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="defaultStatementCycle"
            name="defaultStatementCycle"
            component={SelectField}
            label="Default Statement Cycle"
            placeholder="Select Statement Cycle"
            options={cycleStatementsOptions}
            validate={[formErrorUtil.required]}
            isLoading={isLoadingCycleDescriptions}
          />
        </Box>
        <Box width="125px" p="10px">
          <Field
            id="historyRetentionNumberOfDay"
            name="historyRetentionNumberOfDay"
            placeholder="Enter #"
            component={InputField}
            label="Retention # of Days"
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            isNumber={true}
          />
        </Box>
        <Box width="125px" p="10px" mt="20px">
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Locked"
            disabled={false}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default withLoadCurrencyCodes(ProductGeneralInfo);
