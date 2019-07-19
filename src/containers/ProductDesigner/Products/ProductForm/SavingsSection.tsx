import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components/Form';

const SavingsSection: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 2]} p="10px">
          <Field
            id="savingsType"
            name="savingsType"
            placeholder="Enter Savings Type"
            component={InputField}
            label="Savings Type"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="apr"
            name="apr"
            placeholder="Enter Apr"
            component={InputField}
            label="Apr"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="minimumDepositAllowed"
            name="minimumDepositAllowed"
            placeholder="Enter Minimum Deposit Allowed"
            component={InputField}
            label="Minimum Deposit Allowed"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="maximumDepositAllowed"
            name="maximumDepositAllowed"
            placeholder="Enter Maximum Deposit Allowed"
            component={InputField}
            label="Maximum Deposit Allowed"
          />
        </Box>
        <Box width={[1 / 2]} p="10px">
          <Field
            id="maximumMonthlyDeposit"
            name="maximumMonthlyDeposit"
            placeholder="Enter Maximum Monthly Deposit"
            component={InputField}
            label="Maximum Monthly Deposit"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default SavingsSection;
