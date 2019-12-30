import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, NumberFormatField } from 'components';

import { formErrorUtil } from 'utils';

interface RevolvingCreditDetailsProps {
  isReadOnly?: boolean;
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
            id="minimumPaymentAmount"
            name="minimumPaymentAmount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Payment Amount"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="minimumPaymentRate"
            name="minimumPaymentRate"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Payment Rate"
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="paymentGraceNumberOfDays"
            name="paymentGraceNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Payment Grace # Of Days"
            isNumber={true}
            readOnly={isReadOnly}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
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
