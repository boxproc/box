import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Delimiter, InputField, SelectField, TextField } from 'components';

import {
  cardFormFactorOptions,
  cycleTypesIds,
  productTypesOptions,
  schemeTypesOptions,
  statusOptions,
} from 'consts';

import {
  HandleGetDictionaryCurrencies,
  HandleGetDictionaryStatementCycleTypes,
} from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isEditMode?: boolean;
  institutionsOptions: Array<SelectValue>;
  isReadOnly: boolean;
  statementCycleTypesOptions: Array<SelectValue>;
  getStatementCycleTypes: HandleGetDictionaryStatementCycleTypes;
  isStatementCycleTypesLoading: boolean;
  currencyCodesOptions: Array<SelectValue>;
  getCurrencyCodes: HandleGetDictionaryCurrencies;
  isCurrencyCodesLoading: boolean;
  statementCycleTypeValue: SelectValue;
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
  statementCycleTypeValue,
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

  const statementCycleParameterLabel = React.useMemo(
    () => {
      const defaultLabel = 'Statement Cycle Parameter';

      if (!statementCycleTypeValue) {
        return defaultLabel;
      }

      if (statementCycleTypeValue.value === cycleTypesIds.MONTHLY
        || statementCycleTypeValue.value === cycleTypesIds.BI_MONTHLY
        || statementCycleTypeValue.value === cycleTypesIds.WEEKLY
        || statementCycleTypeValue.value === cycleTypesIds.BI_WEEKLY) {
        return 'Repayment day';
      } else if (statementCycleTypeValue.value === cycleTypesIds.FIXED_NUMBER_OF_DAYS) {
        return 'Number of days';
      } else {
        return defaultLabel;
      }
    },
    [statementCycleTypeValue]
  );

  const statementCycleParameterValidation = React.useMemo(
    () => {
      if (!statementCycleTypeValue) {
        return formErrorUtil.isInteger;
      }

      if (statementCycleTypeValue.value === cycleTypesIds.MONTHLY
        || statementCycleTypeValue.value === cycleTypesIds.BI_MONTHLY) {
        return formErrorUtil.rangeValueMin1Max28;
      } else if (statementCycleTypeValue.value === cycleTypesIds.WEEKLY
        || statementCycleTypeValue.value === cycleTypesIds.BI_WEEKLY) {
        return formErrorUtil.rangeValueMin1Max28;
      } else if (statementCycleTypeValue.value === cycleTypesIds.FIXED_NUMBER_OF_DAYS) {
        return formErrorUtil.rangeValueMin1Max250;
      } else {
        return formErrorUtil.isInteger;
      }
    },
    [statementCycleTypeValue]
  );

  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[4 / 15]} p="8px">
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
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[2 / 15]} p="8px">
          <Field
            id="numberOfDaysCardExpires"
            name="numberOfDaysCardExpires"
            placeholder="Enter # of Days"
            component={InputField}
            label="# of Days Card Expires"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            label="Status"
            placeholder="Select Status"
            options={statusOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[4 / 15]} p="8px">
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
        <Box width={[2 / 15]} p="8px">
          <Field
            id="historyRetentionNumberOfDays"
            name="historyRetentionNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Retention # of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[2 / 15]} p="8px">
          <Field
            id="statementCycleParameter"
            name="statementCycleParameter"
            placeholder="Enter Parameter"
            component={InputField}
            label={statementCycleParameterLabel}
            isNumber={true}
            readOnly={isReadOnly}
            disabled={!statementCycleTypeValue}
            validate={[
              formErrorUtil.required,
              statementCycleParameterValidation,
            ]}
            hint={!statementCycleTypeValue && 'Select Statement Cycle Type'}
          />
        </Box>
        <Box width={[1]} p="8px">
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
        <Box width={[1]} p="8px">
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
