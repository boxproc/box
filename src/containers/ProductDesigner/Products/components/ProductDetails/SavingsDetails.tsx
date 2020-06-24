import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, NumberFormatField, SelectField } from 'components';

import { savingsTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface ISavingsDetails {
  isReadOnly: boolean;
}

const SavingsDetails: React.FC<ISavingsDetails> = ({ isReadOnly }) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="200px" p="8px">
          <Field
            id="savingsType"
            name="savingsType"
            component={SelectField}
            label="Savings Type"
            placeholder="Select Type"
            options={savingsTypesOptions}
            isDisabled={isReadOnly}
            validate={[formErrorUtil.isRequired]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="apr"
            name="apr"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Apr"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Delimiter />
        <Box width="150px" p="8px">
          <Field
            id="minimumDepositAllowed"
            name="minimumDepositAllowed"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Deposit Allowed"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="maximumDepositAllowed"
            name="maximumDepositAllowed"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Maximum Deposit Allowed"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="maximumMonthlyDeposit"
            name="maximumMonthlyDeposit"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Maximum Monthly Deposit"
            disabled={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SavingsDetails;
