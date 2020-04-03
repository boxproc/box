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
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="transactionTypeId"
            name="transactionTypeId"
            component={InputField}
            label="Transaction Type ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="parentTransactionId"
            name="parentTransactionId"
            component={InputField}
            label="Parent Transaction ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="status"
            name="status"
            component={InputField}
            label="Status"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="transactionDatetime"
            name="transactionDatetime"
            component={InputField}
            label="Transaction Datetime"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="debitCreditIndicator"
            name="debitCreditIndicator"
            component={InputField}
            label="Debit Credit Indicator"
            disabled={true}
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
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="settledDatetime"
            name="settledDatetime"
            component={InputField}
            label="Settled Datetime"
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width="150px" p="8px">
          <Field
            id="sourceEndpointId"
            name="sourceEndpointId"
            component={InputField}
            label="Source Endpoint ID"
            disabled={true}
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
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="aprCalculationMethod"
            name="aprCalculationMethod"
            component={InputField}
            label="APR Calculation Method"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="feeRate"
            name="feeRate"
            component={InputField}
            label="Fee Rate"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="feeApplicationCondition"
            name="feeApplicationCondition"
            component={InputField}
            label="Fee Application Condition"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 12]} p="8px">
          <Field
            id="rewardRate"
            name="rewardRate"
            component={InputField}
            label="Reward Rate"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[3 / 12]} p="8px">
          <Field
            id="rewardApplicationCondition"
            name="rewardApplicationCondition"
            component={InputField}
            label="Reward Application Condition"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 2]} p="8px">
          <Field
            id="description"
            name="description"
            component={TextareaField}
            label="Description"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CurrentTransactionGeneral;
