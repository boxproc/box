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

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isEditMode?: boolean;
  institutionsOptions: Array<SelectValues>;
  isReadOnly: boolean;
}

type ProductGeneralInfoAllProps = ProductGeneralInfoProps & WithLoadCurrencyCodesProps;

const ProductGeneralInfo: React.FC<ProductGeneralInfoAllProps> = ({
  currencyCodes,
  isCurrencyCodesLoading,
  isEditMode = false,
  institutionsOptions,
  isReadOnly,
}) => {

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
            options={currencyCodes}
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

export default withLoadCurrencyCodes(ProductGeneralInfo);
