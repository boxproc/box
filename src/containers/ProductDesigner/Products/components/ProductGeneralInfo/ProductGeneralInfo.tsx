import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Delimiter, InputField, SelectField, TextField } from 'components';

import {
  cardFormFactorOptions,
  productTypesOptions,
  schemeTypesOptions,
  statusTypesOptions,
} from 'consts';

import {
  HandleGetDictionaryCurrencies,
  HandleGetDictionaryStatementCycleTypes,
} from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isEditMode?: boolean;
  institutionsOptions: Array<SelectValues>;
  isReadOnly: boolean;
  statementCycleTypesOptions: Array<SelectValues>;
  getStatementCycleTypes: HandleGetDictionaryStatementCycleTypes;
  isStatementCycleTypesLoading: boolean;
  currencyCodesOptions: Array<SelectValues>;
  getCurrencyCodes: HandleGetDictionaryCurrencies;
  isCurrencyCodesLoading: boolean;
}

const ProductGeneralInfo: React.FC<ProductGeneralInfoProps> = ({
  currencyCodesOptions,
  isCurrencyCodesLoading,
  getCurrencyCodes,
  isEditMode = false,
  institutionsOptions,
  isReadOnly,
  statementCycleTypesOptions,
  getStatementCycleTypes,
  isStatementCycleTypesLoading,
}) => {
  React.useEffect(
    () => {
      Promise.all([
        getCurrencyCodes(),
        getStatementCycleTypes(),
      ]);
    },
    [getStatementCycleTypes, getCurrencyCodes]
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
            isDisabled={isEditMode || isReadOnly}
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
            isDisabled={isEditMode || isReadOnly}
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
            readOnly={isReadOnly}
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
            isDisabled={isReadOnly}
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
            readOnly={isReadOnly}
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
            isDisabled={isReadOnly}
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
            isDisabled={isReadOnly}
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
            options={currencyCodesOptions}
            isLoading={isCurrencyCodesLoading}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[2 / 15]} p="10px">
          <Field
            id="historyRetentionNumberOfDays"
            name="historyRetentionNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Retention # of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 5]} p="10px">
          <Field
            id="statementCycleTypeId"
            name="statementCycleTypeId"
            component={SelectField}
            label="Statement Cycle Type"
            placeholder="Select Type"
            options={statementCycleTypesOptions}
            isLoading={isStatementCycleTypesLoading}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="statementCycleParameter"
            name="statementCycleParameter"
            placeholder="Enter Parameter"
            component={InputField}
            label="Statement Cycle Parameter"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
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
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="lockedFlag"
            name="lockedFlag"
            component={CheckboxField}
            label="Locked"
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductGeneralInfo;
