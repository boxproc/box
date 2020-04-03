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
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardTransactionId"
            name="cardTransactionId"
            component={InputField}
            label="Card Transaction ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardCurrency"
            name="cardCurrency"
            component={InputField}
            label="Card Currency"
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorName"
            name="cardAcceptorName"
            component={InputField}
            label="Card Acceptor Name"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorLocation"
            name="cardAcceptorLocation"
            component={InputField}
            label="Card Acceptor Location"
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardCurrencyBilling"
            name="cardCurrencyBilling"
            component={InputField}
            label="Card Currency Billing"
            disabled={true}
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
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorTerminalId"
            name="cardAcceptorTerminalId"
            component={InputField}
            label="Card Acceptor Terminal ID"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcceptorIdCode"
            name="cardAcceptorIdCode"
            component={InputField}
            label="Card Acceptor ID Code"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardStan"
            name="cardStan"
            component={InputField}
            label="Card Stan"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardMcc"
            name="cardMcc"
            component={InputField}
            label="Card Mcc"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcquirerId"
            name="cardAcquirerId"
            component={InputField}
            label="Card Acquirer ID"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardAcquirerCountryCode"
            name="cardAcquirerCountryCode"
            component={InputField}
            label="Card Acquirer Country Code"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardPosEntryMode"
            name="cardPosEntryMode"
            component={InputField}
            label="Card Pos Entry Mode"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardPosConditionData"
            name="cardPosConditionData"
            component={InputField}
            label="Card Pos Condition Data"
            disabled={true}
          />
        </Box>
        <Box width={[1 / 5]} p="8px">
          <Field
            id="cardResponseCode"
            name="cardResponseCode"
            component={InputField}
            label="Card Response Code"
            disabled={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default CurrentTransactionCard;
