import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, InputField, NumberFormatField, SelectField } from 'components';

import { loanTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

interface LoanDetailsProps {
  isReadOnly?: boolean;
}

const LoanDetails: React.FC<LoanDetailsProps> = ({ isReadOnly }) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="10px">
          <Field
            id="loanType"
            name="loanType"
            component={SelectField}
            label="Loan Type"
            placeholder="Select Loan Type"
            options={loanTypesOptions}
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
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="feeLatePayment"
            name="feeLatePayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Fee Late Payment"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width="160px" p="10px">
          <Field
            id="paymentGraceNumberOfDays"
            name="paymentGraceNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Payment Grace # of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LoanDetails;
