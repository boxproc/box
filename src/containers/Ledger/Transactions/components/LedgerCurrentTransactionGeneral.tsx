import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter } from 'components/Delimiter';
import { InputField, TextField } from 'components/Form';

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
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Delimiter />
        <Box width="200px" p="10px">
          <Field
            id="transactionDatetime"
            name="transactionDatetime"
            component={InputField}
            label="Transaction Datetime"
            disabled={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="transactionTypeId"
            name="transactionTypeId"
            component={InputField}
            label="Transaction Type ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1]} p="10px">
          <Field
            id="description"
            name="description"
            component={TextField}
            label="Description"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="debitCreditIndicator"
            name="debitCreditIndicator"
            component={InputField}
            label="Debit Credit Indicator"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="amount"
            name="amount"
            component={InputField}
            label="Amount"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="amountInOriginalCurrency"
            name="amountInOriginalCurrency"
            component={InputField}
            label="Amount in Original Currency"
            disabled={true}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionGeneral;
