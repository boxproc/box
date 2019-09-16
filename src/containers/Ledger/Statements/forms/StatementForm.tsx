import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField } from 'components';

import { formNamesConst } from 'consts';

interface StatementFormProps { }

type StatementFormAllProps = StatementFormProps & InjectedFormProps<{}, StatementFormProps>;

const StatementForm: React.FC<StatementFormAllProps> = () => {
  return (
    <Box mx="-10px">
      <Flex
        alignItems="flex-end"
        flexWrap="wrap"
      >
        <Box width="150px" p="10px">
          <Field
            id="id"
            name="id"
            component={InputField}
            label="ID"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width="150px" p="10px">
          <Field
            id="accountId"
            name="accountId"
            component={InputField}
            label="Account id"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="accountAlias"
            name="accountAlias"
            component={InputField}
            label="Account alias"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="institution"
            name="institution"
            component={InputField}
            label="Institution"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="product"
            name="product"
            component={InputField}
            label="Product name"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="firstName"
            name="firstName"
            component={InputField}
            label="First name"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="lastName"
            name="lastName"
            component={InputField}
            label="Last name"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Hr />
        <Box width="200px" p="10px">
          <Field
            id="dateFrom"
            name="dateFrom"
            component={InputField}
            label="Date from"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width="200px" p="10px">
          <Field
            id="dateTo"
            name="dateTo"
            component={InputField}
            label="Date to"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Hr />
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceOpen"
            name="balanceOpen"
            component={InputField}
            label="Balance open"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="balanceClose"
            name="balanceClose"
            component={InputField}
            label="Balance close"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="minimumAmountDueRepayment"
            name="minimumAmountDueRepayment"
            component={InputField}
            label="Minimum amount due repayment"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="statementCycleId"
            name="statementCycleId"
            component={InputField}
            label="Statement cycle id"
            disabled={true}
            isNumber={true}
          />
        </Box>
        <Box width={[1 / 3]} p="10px">
          <Field
            id="cycleExecutionHistoryId"
            name="cycleExecutionHistoryId"
            component={InputField}
            label="Cycle execution history id"
            disabled={true}
            isNumber={true}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default reduxForm({
  form: formNamesConst.LEDGER_STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
