import React from 'react';
import { Field } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, SelectField } from 'components';

import { dateFormat, maskFormat, statementCyclesOptions } from 'consts';

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
            disabled={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width="200px" p="10px">
          <Field
            id="dateFrom"
            name="dateFrom"
            component={InputField}
            label="Date From"
            placeholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            maskChar={null}
            disabled={isDisabled}
          />
        </Box>
        <Box width="200px" p="10px">
          <Field
            id="dateTo"
            name="dateTo"
            component={InputField}
            label="Date To"
            placeholder={dateFormat.DATE}
            mask={maskFormat.DATE}
            maskChar={null}
            disabled={isDisabled}
          />
        </Box>
        <Hr />
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceOpen"
            name="balanceOpen"
            component={InputField}
            label="Balance open"
            disabled={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="balanceClose"
            name="balanceClose"
            component={InputField}
            label="Balance close"
            disabled={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="minimumAmountDueRepayment"
            name="minimumAmountDueRepayment"
            component={InputField}
            label="Minimum amount due repayment"
            disabled={isDisabled}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 4]} p="10px">
          <Field
            id="statementCycleId"
            name="statementCycleId"
            component={SelectField}
            label="Statement Cycle"
            placeholder="Select Statement Cycle"
            options={statementCyclesOptions}
            isDisabled={isDisabled}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default StatementInfo;
