import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Delimiter, Hr, InputField, NumberFormatField } from 'components';

import { dateFormatConst, formNamesConst, maskFormatConst } from 'consts';

interface StatementFormProps { }

type StatementFormAllProps = StatementFormProps & InjectedFormProps<{}, StatementFormProps>;

const StatementForm: React.FC<StatementFormAllProps> = () => {
  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="150px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="firstTransactionId"
              name="firstTransactionId"
              component={InputField}
              label="First Transaction ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="lastTransactionId"
              name="lastTransactionId"
              component={InputField}
              label="Last Transaction ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Delimiter />
          <Box width="200px" p="8px">
            <Field
              id="repaymentStatus"
              name="repaymentStatus"
              component={InputField}
              label="Repayment Status"
              readOnly={true}
            />
          </Box>
          <Box width="120px" p="8px">
            <Field
              id="statementDate"
              name="statementDate"
              component={InputField}
              label="Statement Date"
              placeholder={dateFormatConst.DATE}
              mask={maskFormatConst.DATE}
              readOnly={true}
            />
          </Box>
          <Hr />
          <Box width={[1 / 6]} p="8px">
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
          <Box width={[1 / 6]} p="8px">
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
          <Box width={[1 / 6]} p="8px">
            <Field
              id="repaymentMinimumAmountDue"
              name="repaymentMinimumAmountDue"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Minimum amount due repayment"
              readOnly={true}
            />
          </Box>
          <Box width="150px" p="8px">
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
  form: formNamesConst.STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
