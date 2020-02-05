import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { NumberFormatField } from 'components';

const LedgerCurrentTransactionBalance: React.FC = () => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceSettledBefore"
            name="balanceSettledBefore"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Settled Before"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceSettledAfter"
            name="balanceSettledAfter"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Settled After"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceAvailableBefore"
            name="balanceAvailableBefore"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Available Before"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceAvailableAfter"
            name="balanceAvailableAfter"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Available After	"
            readOnly={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionBalance;
