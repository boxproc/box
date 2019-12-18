import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, NumberFormatField } from 'components';

const LedgerCurrentTransactionCard: React.FC = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardId"
            name="cardId"
            component={InputField}
            label="Card ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardTransactionId"
            name="cardTransactionId"
            component={InputField}
            label="Card Transaction ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardCurrency"
            name="cardCurrency"
            component={InputField}
            label="Card Currency"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardAmount"
            name="cardAmount"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Card Amount"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardAcceptorName"
            name="cardAcceptorName"
            component={InputField}
            label="Card Acceptor Name"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardAcceptorLocation"
            name="cardAcceptorLocation"
            component={InputField}
            label="Card Acceptor Location"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="10px">
          <Field
            id="cardConversionRate"
            name="cardConversionRate"
            component={NumberFormatField}
            placeholder="0.000"
            fixedDecimalScale={true}
            decimalScale={3}
            label="Card Conversion Rate"
            readOnly={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default LedgerCurrentTransactionCard;
