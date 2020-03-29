import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

interface IGeneralLedger {
  isReadOnly: boolean;
}

const GeneralLedger: React.FC<IGeneralLedger> = ({ isReadOnly }) => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 4]} p="8px">
          <Field
            id="glAccAssets"
            name="glAccAssets"
            component={InputField}
            label="Account Assets"
            placeholder="Enter Account Assets"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="glAccLiabilities"
            name="glAccLiabilities"
            component={InputField}
            label="Account Liabilities"
            placeholder="Enter Account Liabilities"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="glAccProfit"
            name="glAccProfit"
            component={InputField}
            label="Account Profit"
            placeholder="Enter Account Profit"
            readOnly={isReadOnly}
          />
        </Box>
        <Box width={[1 / 4]} p="8px">
          <Field
            id="glAccLoss"
            name="glAccLoss"
            component={InputField}
            label="Account Loss"
            placeholder="Enter Account Loss"
            readOnly={isReadOnly}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default GeneralLedger;
