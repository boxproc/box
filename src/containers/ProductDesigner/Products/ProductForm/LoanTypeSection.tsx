import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, SelectField } from 'components/Form';

import {
  loanTypesOptions,
} from 'consts';

const LoanTypeSection: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="loanType"
            name="loanType"
            isSearchable={true}
            component={SelectField}
            label="Loan Type"
            placeholder="Select Loan Type"
            options={loanTypesOptions}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="apr"
            name="apr"
            placeholder="Enter Apr"
            component={InputField}
            label="Apr"
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="feeLatePayment"
            name="feeLatePayment"
            placeholder="Enter Fee Late Payment"
            component={InputField}
            label="Fee Late Payment"
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="paymentGraceNumberOfDays"
            name="paymentGraceNumberOfDays"
            placeholder="Enter Payment Grace Number Of Days"
            component={InputField}
            label="Payment Grace Number Of Days"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoanTypeSection;
