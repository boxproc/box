import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField } from 'components';

const LedgerCurrentTransactionCard: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardId"
            name="cardId"
            component={InputField}
            label="Card ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardTransactionId"
            name="cardTransactionId"
            component={InputField}
            label="Card Transaction ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardCurrency"
            name="cardCurrency"
            component={InputField}
            label="Card Currency"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardAmount"
            name="cardAmount"
            component={InputField}
            label="Card Amount"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardConversionRate"
            name="cardConversionRate"
            component={InputField}
            label="Card Conversion Rate"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardAcceptorName"
            name="cardAcceptorName"
            component={InputField}
            label="Card Acceptor Name"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cardAcceptorLocation"
            name="cardAcceptorLocation"
            component={InputField}
            label="Card Acceptor Location"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionCard;
