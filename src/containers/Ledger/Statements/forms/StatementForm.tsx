import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField } from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

interface StatementFormProps { }

type StatementFormAllProps = StatementFormProps & InjectedFormProps<{}, StatementFormProps>;

const StatementForm: React.FC<StatementFormAllProps> = () => {
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
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="firstTransactionId"
              name="firstTransactionId"
              component={InputField}
              label="First Transaction ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="lastTransactionId"
              name="lastTransactionId"
              component={InputField}
              label="Last Transaction ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="repaymentStatus"
              name="repaymentStatus"
              component={InputField}
              label="Repayment Status"
              readOnly={true}
            />
          </Box>
          <Box width="120px" p="10px">
            <Field
              id="statementDate"
              name="statementDate"
              component={InputField}
              label="Statement Date"
              placeholder={dateFormat.DATE}
              mask={maskFormat.DATE}
              readOnly={true}
            />
          </Box>
          <Hr />
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceOpen"
              name="balanceOpen"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance open"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="balanceClose"
              name="balanceClose"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance close"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="minimumAmountDueRepayment"
              name="minimumAmountDueRepayment"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Minimum amount due repayment"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 6]} p="10px">
            <Field
              id="previousStatementId"
              name="previousStatementId"
              component={InputField}
              label="Previous Statement ID"
              readOnly={true}
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
