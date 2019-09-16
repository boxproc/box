import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField } from 'components';

import { formNamesConst } from 'consts';

interface StatementFormProps {
  isDisabled?: boolean;
}

type StatementFormAllProps = StatementFormProps & InjectedFormProps<{}, StatementFormProps>;

const StatementForm: React.FC<StatementFormAllProps> = ({ isDisabled }) => {
  return (
    <form>
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
          <Box width={[1 / 6]} p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account id"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="accountAlias"
              name="accountAlias"
              component={InputField}
              label="Account alias"
              disabled={isDisabled}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="product"
              name="product"
              component={InputField}
              label="Product name"
              disabled={isDisabled}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              component={InputField}
              label="Institution"
              disabled={isDisabled}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              component={InputField}
              label="First name"
              disabled={isDisabled}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              component={InputField}
              label="Last name"
              disabled={isDisabled}
            />
          </Box>
          <Hr />
          <Box width="200px" p="10px">
            <Field
              id="dateFrom"
              name="dateFrom"
              component={InputField}
              label="Date from"
              disabled={isDisabled}
            />
          </Box>
          <Box width="200px" p="10px">
            <Field
              id="dateTo"
              name="dateTo"
              component={InputField}
              label="Date to"
              disabled={isDisabled}
            />
          </Box>
          <Hr />
          <Box width={[1 / 5]} p="10px">
            <Field
              id="balanceOpen"
              name="balanceOpen"
              component={InputField}
              label="Balance open"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="balanceClose"
              name="balanceClose"
              component={InputField}
              label="Balance close"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="minimumAmountDueRepayment"
              name="minimumAmountDueRepayment"
              component={InputField}
              label="Minimum amount due repayment"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="statementCycleId"
              name="statementCycleId"
              component={InputField}
              label="Statement cycle id"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 5]} p="10px">
            <Field
              id="cycleExecutionHistoryId"
              name="cycleExecutionHistoryId"
              component={InputField}
              label="Cycle execution history id"
              disabled={isDisabled}
              isNumber={true}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, StatementFormProps>({
  form: formNamesConst.LEDGER_STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
