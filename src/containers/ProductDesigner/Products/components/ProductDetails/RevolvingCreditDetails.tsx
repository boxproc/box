import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

interface IRevolvingCreditDetails {
  isReadOnly: boolean;
}

const RevolvingCreditDetails: React.FC<IRevolvingCreditDetails> = ({ isReadOnly }) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="8px">
          <Field
            id="minimumRepaymentAmount"
            name="minimumRepaymentAmount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Repayment Amount"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="minimumRepaymentRate"
            name="minimumRepaymentRate"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Repayment Rate"
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="repaymentGraceNumberOfDays"
            name="repaymentGraceNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Repayment Grace # Of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
        <Box width={[2 / 5]} p="8px" pb="10px">
          <Field
            id="limitSharingAllowedFlag"
            name="limitSharingAllowedFlag"
            component={CheckboxField}
            label="Limit Sharing Allowed"
            disabled={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RevolvingCreditDetails;
