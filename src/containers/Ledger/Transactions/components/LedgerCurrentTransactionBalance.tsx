import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

const LedgerCurrentTransactionBalance: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceSettledBefore"
            name="balanceSettledBefore"
            component={InputField}
            label="Balance Settled Before"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceSettledAfter"
            name="balanceSettledAfter"
            component={InputField}
            label="Balance Settled After"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceAvailableBefore"
            name="balanceAvailableBefore"
            component={InputField}
            label="Balance Available Before"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceAvailableAfter"
            name="balanceAvailableAfter"
            component={InputField}
            label="Balance Available After	"
            disabled={true}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionBalance;
