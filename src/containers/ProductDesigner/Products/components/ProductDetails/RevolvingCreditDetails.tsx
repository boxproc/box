import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField, SelectField } from 'components';

import { aprTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

const RevolvingCreditDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="10px">
          <Field
            id="aprDefault"
            name="aprDefault"
            placeholder="Enter APR Default"
            component={InputField}
            label="APR Default"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="feeExceedLimit"
            name="feeExceedLimit"
            placeholder="Enter Fee Exceed Limit"
            component={InputField}
            label="Fee Exceed Limit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
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
        <Box width={[1 / 5]} p="10px">
          <Field
            id="feeOverpayment"
            name="feeOverpayment"
            placeholder="Enter Fee Overpayment"
            component={InputField}
            label="Fee Overpayment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="minimumPaymentAmount"
            name="minimumPaymentAmount"
            placeholder="Enter Minimum Payment Amount"
            component={InputField}
            label="Minimum Payment Amount"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="minimumPaymentRate"
            name="minimumPaymentRate"
            placeholder="Enter Minimum Payment Rate"
            component={InputField}
            label="Minimum Payment Rate"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
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
        <Box width={[1 / 5]} p="10px">
          <Field
            id="rateExceedLimit"
            name="rateExceedLimit"
            placeholder="Enter Rate Exceed Limit"
            component={InputField}
            label="Rate Exceed Limit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="rateLatePayment"
            name="rateLatePayment"
            placeholder="Enter Rate Late Payment"
            component={InputField}
            label="Rate Late Payment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="rateOverpayment"
            name="rateOverpayment"
            placeholder="Enter Rate Overpayment"
            component={InputField}
            label="Rate Overpayment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[2 / 5]} p="10px">
          <Field
            id="aprDefaultCalculationMethod"
            name="aprDefaultCalculationMethod"
            placeholder="Select APR Default Calculation Method"
            component={SelectField}
            options={aprTypesOptions}
            label="APR Default Calculation Method"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="limitSharingAllowedFlag"
            name="limitSharingAllowedFlag"
            component={CheckboxField}
            label="Limit Sharing Allowed"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RevolvingCreditDetails;
