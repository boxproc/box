import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, Delimiter, InputField, SelectField, TextareaField } from 'components';

import {
  cardFormFactorOptions,
  cycleTypesConst,
  productTypesOptions,
  schemeTypesOptions,
  statusOptions,
} from 'consts';

import {
  THandleGetConvertibleInstCurrencies,
  THandleGetDictionaryCurrencies,
  THandleGetDictionaryStatementCycleTypes,
} from 'store';

import { ISelectValue } from 'types';
import { formErrorUtil } from 'utils';

interface IProductGeneralInfo {
  currenciesOptions: Array<ISelectValue>;
  enabledForCustomerLimitValue: boolean;
  getConvertibleInstCurrencies: THandleGetConvertibleInstCurrencies;
  getDictionaryCurrencies: THandleGetDictionaryCurrencies;
  getStatementCycleTypes: THandleGetDictionaryStatementCycleTypes;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isCurrenciesLoading: boolean;
  isEditMode?: boolean;
  isReadOnly?: boolean;
  isStatementCycleTypesLoading: boolean;
  statementCycleTypesOptions: Array<ISelectValue>;
  statementCycleTypeValue: ISelectValue;
}

const ProductGeneralInfo: React.FC<IProductGeneralInfo> = ({
  currenciesOptions,
  enabledForCustomerLimitValue,
  getConvertibleInstCurrencies,
  getDictionaryCurrencies,
  getStatementCycleTypes,
  institutionsOptions,
  institutionValue,
  isCurrenciesLoading,
  isEditMode = false,
  isReadOnly,
  isStatementCycleTypesLoading,
  statementCycleTypesOptions,
  statementCycleTypeValue,
}) => {
  const institutionId = React.useMemo(
    () => institutionValue && Number(institutionValue.value),
    [institutionValue]
  );

  React.useEffect(
    () => {
      getStatementCycleTypes();
    },
    [getStatementCycleTypes]
  );

  React.useEffect(
    () => {
      if (!enabledForCustomerLimitValue) {
        getDictionaryCurrencies();
      } else if (enabledForCustomerLimitValue && institutionId) {
        getConvertibleInstCurrencies(institutionId);
      }
    },
    [
      enabledForCustomerLimitValue,
      getDictionaryCurrencies,
      getConvertibleInstCurrencies,
      institutionId,
    ]
  );

  const statementCycleParameterLabel = React.useMemo(
    () => {
      const defaultLabel = 'Statement Cycle Parameter';

      if (!statementCycleTypeValue) {
        return defaultLabel;
      }

      if (statementCycleTypeValue.value === cycleTypesConst.MONTHLY
        || statementCycleTypeValue.value === cycleTypesConst.BI_MONTHLY
        || statementCycleTypeValue.value === cycleTypesConst.WEEKLY
        || statementCycleTypeValue.value === cycleTypesConst.BI_WEEKLY) {
        return 'Repayment day';
      } else if (statementCycleTypeValue.value === cycleTypesConst.FIXED_NUMBER_OF_DAYS) {
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

      if (statementCycleTypeValue.value === cycleTypesConst.MONTHLY
        || statementCycleTypeValue.value === cycleTypesConst.BI_MONTHLY) {
        return formErrorUtil.rangeValueMin1Max28;
      } else if (statementCycleTypeValue.value === cycleTypesConst.WEEKLY
        || statementCycleTypeValue.value === cycleTypesConst.BI_WEEKLY) {
        return formErrorUtil.rangeValueMin1Max7;
      } else if (statementCycleTypeValue.value === cycleTypesConst.FIXED_NUMBER_OF_DAYS) {
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
        {isEditMode && (
          <Box width="130px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              disabled={true}
              isNumber={true}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
        )}
        <Box width="200px" p="8px">
          <Field
            id="productType"
            name="productType"
            component={SelectField}
            label="Product Type"
            placeholder="Select Product Type"
            options={productTypesOptions}
            isDisabled={isEditMode || isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="240px" p="8px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isEditMode || isReadOnly}
            isClearable={false}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="240px" p="8px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isAlphaNumeric,
            ]}
          />
        </Box>
        <Flex alignItems="flex-start">
          <Flex
            alignItems="flex-end"
            flexWrap="wrap"
            width="330px"
          >
            <Box width="200px" p="8px">
              <Field
                id="cardFormFactor"
                name="cardFormFactor"
                component={SelectField}
                label="Card Form Factor"
                placeholder="Select Card"
                options={cardFormFactorOptions}
                isDisabled={isReadOnly}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width="130px" p="8px">
              <Field
                id="numberOfDaysCardExpires"
                name="numberOfDaysCardExpires"
                placeholder="Enter #"
                component={InputField}
                label="# of Days Card Expires"
                isNumber={true}
                disabled={isReadOnly}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isInteger,
                ]}
              />
            </Box>
            <Delimiter />
            <Box width="200px" p="8px">
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
            <Box width="130px" p="8px">
              <Field
                id="historyRetentionNumberOfDays"
                name="historyRetentionNumberOfDays"
                placeholder="Enter # of Days"
                component={InputField}
                label="Retention # of Days"
                isNumber={true}
                disabled={isReadOnly}
                validate={[
                  formErrorUtil.isRequired,
                  formErrorUtil.isInteger,
                ]}
              />
            </Box>
            <Delimiter />
            <Box width="200px" p="8px" pt="25px">
              <Field
                id="statementCycleTypeId"
                name="statementCycleTypeId"
                component={SelectField}
                label="Statement Cycle Type"
                placeholder="Select Type"
                options={statementCycleTypesOptions}
                isLoading={isStatementCycleTypesLoading}
                isDisabled={isReadOnly}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
            <Box width="130px" p="8px">
              <Field
                id="statementCycleParameter"
                name="statementCycleParameter"
                placeholder="Enter day"
                component={InputField}
                label={statementCycleParameterLabel}
                isNumber={true}
                disabled={!statementCycleTypeValue || isReadOnly}
                hint={!statementCycleTypeValue && 'Select Statement Cycle Type'}
                validate={[
                  formErrorUtil.isRequired,
                  statementCycleParameterValidation,
                ]}
              />
            </Box>
          </Flex>
          <Box width="500px" pt="15px">
            <Flex alignItems="flex-end">
              <Box width="350px" p="8px">
                <Field
                  id="currencyCode"
                  name="currencyCode"
                  component={SelectField}
                  label="Currency Code"
                  placeholder="Select Currency Code"
                  options={currenciesOptions}
                  isLoading={isCurrenciesLoading}
                  isDisabled={isReadOnly}
                  validate={[formErrorUtil.isRequired]}
                />
              </Box>
              <Box width="150px" p="8px">
                <Field
                  id="status"
                  name="status"
                  component={SelectField}
                  label="Status"
                  placeholder="Select Status"
                  options={statusOptions}
                  isDisabled={isReadOnly}
                  validate={[formErrorUtil.isRequired]}
                />
              </Box>
            </Flex>
            <Box width={[1]} p="8px">
              <Field
                id="description"
                name="description"
                placeholder="Enter Description"
                component={TextareaField}
                label="Description"
                height={50}
                disabled={isReadOnly}
              />
            </Box>
            <Box width={[1]} p="8px 8px 0">
              <Field
                id="enabledForCustomerLimit"
                name="enabledForCustomerLimit"
                component={CheckboxField}
                label="Enabled for Customer Limit"
                disabled={isReadOnly}
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
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default ProductGeneralInfo;
