import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, NumberFormatField, TextField } from 'components';

const LedgerCurrentTransactionGeneral: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="150px" p="10px">
          <Field
            id="id"
            name="id"
            component={InputField}
            label="ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="transactionTypeId"
            name="transactionTypeId"
            component={InputField}
            label="Transaction Type ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="transactionDatetime"
            name="transactionDatetime"
            component={InputField}
            label="Transaction Datetime"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="aprRate"
            name="aprRate"
            component={InputField}
            label="APR Rate"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="aprCalculationMethod"
            name="aprCalculationMethod"
            component={InputField}
            label="APR Calculation Method"
            readOnly={true}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            component={TextField}
            label="Description"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="debitCreditIndicator"
            name="debitCreditIndicator"
            component={InputField}
            label="Debit Credit Indicator"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="amount"
            name="amount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="amountInOriginalCurrency"
            name="amountInOriginalCurrency"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Amount in Original Currency"
            readOnly={true}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionGeneral;
