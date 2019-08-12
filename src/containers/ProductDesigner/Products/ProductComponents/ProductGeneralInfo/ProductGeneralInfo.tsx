import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components/Form';
import {
  withLoadCurrencyCodes,
  WithLoadCurrencyCodesProps,
} from 'components/withLoadCurrencyCodes';

import {
  productTypesOptions,
  schemeTypesOptions,
  statementCyclesOptions,
  statusTypesOptions,
} from 'consts';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface ProductGeneralInfoProps {
  isDisabledProductTypes?: boolean;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  institutionsOptions: Array<SelectValues>;
}

type ProductGeneralInfoAllProps = ProductGeneralInfoProps & WithLoadCurrencyCodesProps;

const ProductGeneralInfo: React.FC<ProductGeneralInfoAllProps> = ({
  currencyCodes,
  isCurrencyCodesLoading,
  isDisabledProductTypes,
  isDisabledInstitutions,
  isDisabledStatus,
  institutionsOptions,
}) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="productType"
            name="productType"
            component={SelectField}
            label="Product Type"
            placeholder="Select Product Type"
            options={productTypesOptions}
            isDisabled={isDisabledProductTypes}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="description"
            name="description"
            placeholder="Enter Description"
            component={InputField}
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
            isDisabled={isDisabledStatus}
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
            id="historyRetentionNumberOfDay"
            name="historyRetentionNumberOfDay"
            placeholder="Enter History Retention Number of Days"
            component={InputField}
            label="History Retention Number of Days"
            validate={[formErrorUtil.required, formErrorUtil.isInteger]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
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
        <Box width={[1 / 2]} p="10px">
          <Field
            id="defaultStatementCycleId"
            name="defaultStatementCycleId"
            component={SelectField}
            label="Default Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementCyclesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box p="10px" width="100%">
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
