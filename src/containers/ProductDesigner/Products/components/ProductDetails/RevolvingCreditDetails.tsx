import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

interface RevolvingCreditDetailsProps {
  isReadOnly: boolean;
}

const RevolvingCreditDetails: React.FC<RevolvingCreditDetailsProps> = ({ isReadOnly }) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="10px">
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
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
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
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="repaymentGraceNumberOfDays"
            name="repaymentGraceNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Repayment Grace # Of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width={[2 / 5]} p="10px" pb="15px">
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
