import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField, TextareaField } from 'components';

const CurrentTransactionGeneral: React.FC = () => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="8px">
          <Field
            id="id"
            name="id"
            component={InputField}
            label="ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="transactionTypeId"
            name="transactionTypeId"
            component={InputField}
            label="Transaction Type ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="parentTransactionId"
            name="parentTransactionId"
            component={InputField}
            label="Parent Transaction ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="status"
            name="status"
            component={InputField}
            label="Status"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="transactionDatetime"
            name="transactionDatetime"
            component={InputField}
            label="Transaction Datetime"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="debitCreditIndicator"
            name="debitCreditIndicator"
            component={InputField}
            label="Debit Credit Indicator"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="amount"
            name="amount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="amountInOriginalCurrency"
            name="amountInOriginalCurrency"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount in Original Currency"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="settledDatetime"
            name="settledDatetime"
            component={InputField}
            label="Settled Datetime"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="amountSettled"
            name="amountSettled"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount Settled"
            readOnly={true}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="sourceEndpointId"
            name="sourceEndpointId"
            component={InputField}
            label="Source Endpoint ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Hr />
        <Box width={[1 / 12]} p="8px">
          <Field
            id="aprRate"
            name="aprRate"
            component={InputField}
            label="APR Rate"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="aprCalculationMethod"
            name="aprCalculationMethod"
            component={InputField}
            label="APR Calculation Method"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="feeRate"
            name="feeRate"
            component={InputField}
            label="Fee Rate"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="feeApplicationCondition"
            name="feeApplicationCondition"
            component={InputField}
            label="Fee Application Condition"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="rewardRate"
            name="rewardRate"
            component={InputField}
            label="Reward Rate"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="rewardApplicationCondition"
            name="rewardApplicationCondition"
            component={InputField}
            label="Reward Application Condition"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="description"
            name="description"
            component={TextareaField}
            label="Description"
            readOnly={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CurrentTransactionGeneral;
