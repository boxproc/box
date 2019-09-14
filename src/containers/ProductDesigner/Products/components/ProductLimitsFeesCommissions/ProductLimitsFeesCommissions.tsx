import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

import { formErrorUtil } from 'utils';

const ProductLimitsFeesCommissions: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="underLimitFee"
            name="underLimitFee"
            component={InputField}
            label="Under Limit Fee %"
            placeholder="Enter Under Limit Fee %"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="overLimitFee"
            name="overLimitFee"
            component={InputField}
            label="Over Limit Fee %"
            placeholder="Enter Over Limit Fee %"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="overpaymentLimit"
            name="overpaymentLimit"
            component={InputField}
            label="Overpayment % Limit"
            placeholder="Enter Overpayment % Limit"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="additionalStatementCommission"
            name="additionalStatementCommission"
            component={InputField}
            label="Additional Statement Commission"
            placeholder="Enter Additional Statement Commission"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cyclePurchaseTransactionsNumberThreshold"
            name="cyclePurchaseTransactionsNumberThreshold"
            component={InputField}
            label="Cycle Purchase Transactions # Threshold"
            placeholder="Enter Cycle Purchase Transactions # Threshold"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cyclePurchaseThreshold"
            name="cyclePurchaseThreshold"
            component={InputField}
            label="Cycle Purchase Threshold"
            placeholder="Enter Cycle Purchase Threshold"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="CycleCashTransactionsNumberThreshold"
            name="CycleCashTransactionsNumberThreshold"
            component={InputField}
            label="Cycle Cash Transactions # Threshold"
            placeholder="Enter Cycle Cash Transactions # Threshold "
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cycleCashThreshold"
            name="cycleCashThreshold"
            component={InputField}
            label="Cycle Cash Threshold"
            placeholder="Enter Cycle Cash Threshold"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cycleOtherTransactionsNumberThreshold"
            name="cycleOtherTransactionsNumberThreshold"
            component={InputField}
            label="Cycle 'Other' Transactions # Threshold"
            placeholder="Enter Cycle 'Other' Transactions # Threshold"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cycleOtherThreshold"
            name="cycleOtherThreshold"
            component={InputField}
            label="Cycle 'Other' Threshold"
            placeholder="Enter Cycle 'Other' Threshold"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="loanConversionFee"
            name="loanConversionFee"
            component={InputField}
            label="Loan Conversion Fee %"
            placeholder="Loan Conversion Fee %"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="loanConversionCommission"
            name="loanConversionCommission"
            component={InputField}
            label="Loan Conversion Commission"
            placeholder="Loan Conversion Commission"
            isDisabled={false}
            isNumber={true}
            validate={[formErrorUtil.required]}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ProductLimitsFeesCommissions;
