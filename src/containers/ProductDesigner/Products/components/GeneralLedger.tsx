import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

interface GeneralLedgerProps { }

const GeneralLedger: React.FC<GeneralLedgerProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="10px">
          <Field
            id="glAccAssets"
            name="glAccAssets"
            component={InputField}
            label="Account Assets"
            placeholder="Enter Account Assets"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="glAccLiabilities"
            name="glAccLiabilities"
            component={InputField}
            label="Account Liabilities"
            placeholder="Enter Account Liabilities"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="glAccProfit"
            name="glAccProfit"
            component={InputField}
            label="Account Profit"
            placeholder="Enter Account Profit"
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="glAccLoss"
            name="glAccLoss"
            component={InputField}
            label="Account Loss"
            placeholder="Enter Account Loss"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralLedger;
