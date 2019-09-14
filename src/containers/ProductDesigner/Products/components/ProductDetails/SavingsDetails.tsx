import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, SelectField } from 'components';

import { savingsTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

const SavingsDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="180px" p="10px">
          <Field
            id="savingsType"
            name="savingsType"
            component={SelectField}
            label="Savings Type"
            placeholder="Select Savings Type"
            options={savingsTypesOptions}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="apr"
            name="apr"
            placeholder="Enter Apr"
            component={InputField}
            label="Apr"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Delimiter />
        <Box width="230px" p="10px">
          <Field
            id="minimumDepositAllowed"
            name="minimumDepositAllowed"
            placeholder="Enter Minimum Deposit Allowed"
            component={InputField}
            label="Minimum Deposit Allowed"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width="230px" p="10px">
          <Field
            id="maximumDepositAllowed"
            name="maximumDepositAllowed"
            placeholder="Enter Maximum Deposit Allowed"
            component={InputField}
            label="Maximum Deposit Allowed"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width="230px" p="10px">
          <Field
            id="maximumMonthlyDeposit"
            name="maximumMonthlyDeposit"
            placeholder="Enter Maximum Monthly Deposit"
            component={InputField}
            label="Maximum Monthly Deposit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SavingsDetails;
