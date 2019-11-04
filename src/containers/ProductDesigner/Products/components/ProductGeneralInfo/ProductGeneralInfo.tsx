import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField, TextField } from 'components';

import { withLoadCurrencyCodes, WithLoadCurrencyCodesProps } from 'HOCs';

import {
  cardFormFactorOptions,
  productTypesOptions,
  schemeTypesOptions,
  statusTypesOptions,
} from 'consts';

import { HandleGetCyclesDescriptions } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isEditMode?: boolean;
  institutionsOptions: Array<SelectValues>;
  getCyclesDescriptions: HandleGetCyclesDescriptions;
  statementCyclesOptions: Array<SelectValues>;
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
  statementCyclesOptions,
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
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="10px">
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
        <Box width={[1 / 5]} p="10px">
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
        <Box width={[4 / 15]} p="10px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardFormFactor"
            name="cardFormFactor"
            component={SelectField}
            label="Card Form Factor"
            placeholder="Select Card"
            options={cardFormFactorOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[2 / 15]} p="10px">
          <Field
            id="numberOfDaysCardExpires"
            name="numberOfDaysCardExpires"
            placeholder="Enter # of Days"
            component={InputField}
            label="# of Days Card Expires"
            isNumber={true}
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
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
        <Box width={[1 / 5]} p="10px">
          <Field
            id="scheme"
            name="scheme"
            component={SelectField}
            label="Scheme"
            placeholder="Select Scheme"
            options={schemeTypesOptions}
          />
        </Box>
        <Box width={[4 / 15]} p="10px">
          <Field
            id="currencyCode"
            name="currencyCode"
            component={SelectField}
            label="Currency Code"
            placeholder="Select Currency Code"
            options={currencyCodes}
            isLoading={isCurrencyCodesLoading}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="defaultStatementCycle"
            name="defaultStatementCycle"
            component={SelectField}
            label="Default Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementCyclesOptions}
            validate={[formErrorUtil.required]}
            isLoading={isLoadingCycleDescriptions}
          />
        </Box>
        <Box width={[2 / 15]} p="10px">
          <Field
            id="historyRetentionNumberOfDay"
            name="historyRetentionNumberOfDay"
            placeholder="Enter # of Days"
            component={InputField}
            label="Retention # of Days"
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            isNumber={true}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Locked"
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            placeholder="Enter Description"
            component={TextField}
            label="Description"
            height={115}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default withLoadCurrencyCodes(ProductGeneralInfo);
