import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter } from 'components/Delimiter';
import { InputField, SelectField } from 'components/Form';

import { loanTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

const LoanDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="230px" p="10px">
          <Field
            id="loanType"
            name="loanType"
            component={SelectField}
            label="Loan Type"
            placeholder="Select Loan Type"
            options={loanTypesOptions}
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
        <Box width="180px" p="10px">
          <Field
            id="feeLatePayment"
            name="feeLatePayment"
            placeholder="Enter Fee Late Payment"
            component={InputField}
            label="Fee Late Payment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="paymentGraceNumberOfDays"
            name="paymentGraceNumberOfDays"
            placeholder="Enter #"
            component={InputField}
            label="Payment Grace # Of Days"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoanDetails;
