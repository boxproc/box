import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, NumberFormatField, SelectField } from 'components';

import { savingsTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface SavingsDetailsProps {
  isReadOnly?: boolean;
}

const SavingsDetails: React.FC<SavingsDetailsProps> = ({ isReadOnly }) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="10px">
          <Field
            id="savingsType"
            name="savingsType"
            component={SelectField}
            label="Savings Type"
            placeholder="Select Savings Type"
            options={savingsTypesOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 5]} p="10px">
          <Field
            id="apr"
            name="apr"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Apr"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="minimumDepositAllowed"
            name="minimumDepositAllowed"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Deposit Allowed"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="maximumDepositAllowed"
            name="maximumDepositAllowed"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Maximum Deposit Allowed"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="maximumMonthlyDeposit"
            name="maximumMonthlyDeposit"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Maximum Monthly Deposit"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SavingsDetails;
