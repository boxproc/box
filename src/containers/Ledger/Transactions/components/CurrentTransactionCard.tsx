import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { InputField, NumberFormatField } from 'components';

const CurrentTransactionCard: React.FC = () => {
  return (
    <Box mx="-8px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardId"
            name="cardId"
            component={InputField}
            label="Card ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardTransactionId"
            name="cardTransactionId"
            component={InputField}
            label="Card Transaction ID"
            readOnly={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardCurrency"
            name="cardCurrency"
            component={InputField}
            label="Card Currency"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorName"
            name="cardAcceptorName"
            component={InputField}
            label="Card Acceptor Name"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorLocation"
            name="cardAcceptorLocation"
            component={InputField}
            label="Card Acceptor Location"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
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
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardCurrencyBilling"
            name="cardCurrencyBilling"
            component={InputField}
            label="Card Currency Billing"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAmountBilling"
            name="cardAmountBilling"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Card Amount Billing"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorTerminalId"
            name="cardAcceptorTerminalId"
            component={InputField}
            label="Card Acceptor Terminal ID"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorIdCode"
            name="cardAcceptorIdCode"
            component={InputField}
            label="Card Acceptor ID Code"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardStan"
            name="cardStan"
            component={InputField}
            label="Card Stan"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardMcc"
            name="cardMcc"
            component={InputField}
            label="Card Mcc"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcquirerId"
            name="cardAcquirerId"
            component={InputField}
            label="Card Acquirer ID"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcquirerCountryCode"
            name="cardAcquirerCountryCode"
            component={InputField}
            label="Card Acquirer Country Code"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardPosEntryMode"
            name="cardPosEntryMode"
            component={InputField}
            label="Card Pos Entry Mode"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardPosConditionData"
            name="cardPosConditionData"
            component={InputField}
            label="Card Pos Condition Data"
            readOnly={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardResponseCode"
            name="cardResponseCode"
            component={InputField}
            label="Card Response Code"
            readOnly={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CurrentTransactionCard;
