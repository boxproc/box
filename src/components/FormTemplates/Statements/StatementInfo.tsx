import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField } from 'components';

import { dateFormat, maskFormat } from 'consts';

import { formErrorUtil } from 'utils';

interface StatementInfoProps {
  isDisabled?: boolean;
}

const StatementInfo: React.FC<StatementInfoProps> = ({ isDisabled }) => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width={[1 / 6]} p="10px">
          <Field
            id="id"
            name="id"
            component={InputField}
            label="ID"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="firstTransactionId"
            name="firstTransactionId"
            component={InputField}
            label="First Transaction ID"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 6]} p="10px">
          <Field
            id="lastTransactionId"
            name="lastTransactionId"
            component={InputField}
            label="Last Transaction ID"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="statementDate"
            name="statementDate"
            component={InputField}
            label="Statement Date"
            placeholder={dateFormat.DATE}
            maskPlaceholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            readOnly={isDisabled}
            validate={[formErrorUtil.isDate]}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceOpen"
            name="balanceOpen"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance open"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceClose"
            name="balanceClose"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Balance close"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="minimumAmountDueRepayment"
            name="minimumAmountDueRepayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum amount due repayment"
            readOnly={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="statementCycleName"
            name="statementCycleName"
            component={InputField}
            label="Statement Cycle"
            placeholder="Enter Statement Cycle"
            readOnly={isDisabled}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default StatementInfo;
