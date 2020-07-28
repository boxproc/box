import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { NumberFormatField } from 'components';

const CurrentTransactionBalance: React.FC = () => {
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
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceAuthorisedBefore"
            name="balanceAuthorisedBefore"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Authorised Before"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 6]} p="8px">
          <Field
            id="balanceAuthorisedAfter"
            name="balanceAuthorisedAfter"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance Authorised After	"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CurrentTransactionBalance;
