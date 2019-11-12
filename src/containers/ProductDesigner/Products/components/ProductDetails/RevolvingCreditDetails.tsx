import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  CheckboxField,
  Delimiter,
  Hr,
  InputField,
  NumberFormatField,
  SelectField,
} from 'components';

import { aprTypesOptions } from 'consts';

import { formErrorUtil } from 'utils';

const RevolvingCreditDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="10px">
          <Field
            id="aprDefault"
            name="aprDefault"
            component={NumberFormatField}
            label="APR Default"
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="aprDefaultCalculationMethod"
            name="aprDefaultCalculationMethod"
            placeholder="Select Method"
            component={SelectField}
            options={aprTypesOptions}
            label="APR Default Calculation Method"
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="feeExceedLimit"
            name="feeExceedLimit"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Fee Exceed Limit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="rateExceedLimit"
            name="rateExceedLimit"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Rate Exceed Limit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="feeLatePayment"
            name="feeLatePayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Fee Late Payment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="rateLatePayment"
            name="rateLatePayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Rate Late Payment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Delimiter />
        <Box width={[1 / 6]} p="10px">
          <Field
            id="feeOverpayment"
            name="feeOverpayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Fee Overpayment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="rateOverpayment"
            name="rateOverpayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Rate Overpayment"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="minimumPaymentAmount"
            name="minimumPaymentAmount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum Payment Amount"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
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
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Hr />
        <Box width={[1 / 5]} p="10px">
          <Field
            id="paymentGraceNumberOfDays"
            name="paymentGraceNumberOfDays"
            placeholder="Enter # of Days"
            component={InputField}
            label="Payment Grace # Of Days"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[2 / 5]} p="10px" pb="15px">
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
