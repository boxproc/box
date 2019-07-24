import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components/Form';

import {
  productTypesOptions,
  schemeTypesOptions,
  statementTypesOptions,
  statusTypesOptions,
} from 'consts';

import { SelectValues } from 'types';

interface GeneralSectionProps {
  isDisabledProductTypes?: boolean;
  isDisabledInstitutions?: boolean;
  isDisabledStatus?: boolean;
  institutionsOptions: Array<SelectValues>;
  currencyCodes: Array<SelectValues>;
  isCurrencyCodesLoading: boolean;
}

const GeneralSection: React.FC<GeneralSectionProps> = ({
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
            isSearchable={true}
            component={SelectField}
            label="Product Type"
            placeholder="Select Product Type"
            options={productTypesOptions}
            isDisabled={isDisabledProductTypes}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="institutionId"
            name="institutionId"
            isSearchable={true}
            component={SelectField}
            label="Institution"
            placeholder="Select Institution"
            options={institutionsOptions}
            isDisabled={isDisabledInstitutions}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="name"
            name="name"
            placeholder="Enter Name"
            component={InputField}
            label="Name"
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
        <Box width={[1 / 2]} p="10px">
          <Field
            id="status"
            name="status"
            component={SelectField}
            isSearchable={true}
            label="Status"
            placeholder="Select Status"
            options={statusTypesOptions}
            isDisabled={isDisabledStatus}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="scheme"
            name="scheme"
            isSearchable={true}
            component={SelectField}
            label="Scheme"
            placeholder="Select Scheme"
            options={schemeTypesOptions}
            isDisabled={false}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="currencyCode"
            name="currencyCode"
            isSearchable={true}
            component={SelectField}
            label="Currency Code"
            placeholder="Select Currency Code"
            options={currencyCodes}
            isDisabled={false}
            isLoading={isCurrencyCodesLoading}
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="historyRetentionNumberOfDay"
            name="historyRetentionNumberOfDay"
            placeholder="Enter History Retention Number of Day"
            component={InputField}
            label="History Retention Number of Day"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="defaultStatementCycleId"
            name="defaultStatementCycleId"
            isSearchable={true}
            component={SelectField}
            label="Default Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementTypesOptions}
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

export default GeneralSection;
