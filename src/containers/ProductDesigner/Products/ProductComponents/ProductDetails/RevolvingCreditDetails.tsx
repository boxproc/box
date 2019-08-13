import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { CheckboxField, InputField } from 'components/Form';

import { formErrorUtil } from 'utils';

const RevolvingCreditDetails: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="aprDefault"
            name="aprDefault"
            placeholder="Enter Apr Default"
            component={InputField}
            label="Apr Default"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="aprCash"
            name="aprCash"
            placeholder="Enter Apr Cash"
            component={InputField}
            label="Apr Cash"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="aprSales"
            name="aprSales"
            placeholder="Enter Apr Sales"
            component={InputField}
            label="Apr Sales"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="aprBalanceTransfer"
            name="aprBalanceTransfer"
            placeholder="Enter Apr Balance Transfer"
            component={InputField}
            label="Apr Balance Transfer"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="aprFee"
            name="aprFee"
            placeholder="Enter Apr Fee"
            component={InputField}
            label="Apr Fee"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
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
        <Box width={[1 / 4]} p="10px">
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
        <Box width={[1 / 4]} p="10px">
          <Field
            id="feeUnpaid"
            name="feeUnpaid"
            placeholder="Enter Fee Unpaid"
            component={InputField}
            label="Fee Unpaid"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="feeOverLimit"
            name="feeOverLimit"
            placeholder="Enter Fee Over Limit"
            component={InputField}
            label="Fee Over Limit"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="minimumPaymentPercent"
            name="minimumPaymentPercent"
            placeholder="Enter Minimum Payment Percent"
            component={InputField}
            label="Minimum Payment Percent"
            validate={[formErrorUtil.required, formErrorUtil.isNumber]}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
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
        <Box width={[1 / 4]} p="10px">
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
        <Box width={[1]} p="10px">
          <Field
            id="limitSharingAllowedFlag"
            name="limitSharingAllowedFlag"
            component={CheckboxField}
            label="Limit Sharing Allowed"
            disabled={false}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default RevolvingCreditDetails;
