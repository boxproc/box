import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Button, Delimiter, Hr, InputField, NumberFormatField } from 'components';
import {
  dateFormatConst,
  formNamesConst,
  maskFormatConst,
  repaymentStatusConst,
  repaymentStatusOptions,
} from 'consts';
import { IStatement } from 'store';

interface IStatementForm {
  changeMinimumAmount: () => void;
  initialValues: IStatement;
}

type TStatementForm = IStatementForm & InjectedFormProps<{}, IStatementForm>;

const StatementForm: React.FC<TStatementForm> = ({
  changeMinimumAmount,
  initialValues,
}) => {
  const isNewStatement = React.useMemo(
    () => initialValues.repaymentStatus === repaymentStatusOptions
      .find(el => el.value === repaymentStatusConst.NEW).label,
    [initialValues]
  );

  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="120px" p="8px">
            <Field
              id="id"
              name="id"
              component={InputField}
              label="ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width="120px" p="8px">
            <Field
              id="accountId"
              name="accountId"
              component={InputField}
              label="Account ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width="120px" p="8px">
            <Field
              id="firstTransactionId"
              name="firstTransactionId"
              component={InputField}
              label="First Transaction ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width="120px" p="8px">
            <Field
              id="lastTransactionId"
              name="lastTransactionId"
              component={InputField}
              label="Last Transaction ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Delimiter />
          <Box width="120px" p="8px">
            <Field
              id="statementDate"
              name="statementDate"
              component={InputField}
              label="Statement Date"
              placeholder={dateFormatConst.DATE}
              mask={maskFormatConst.DATE}
              disabled={true}
            />
          </Box>
          <Box width="240px" p="8px">
            <Field
              id="repaymentStatus"
              name="repaymentStatus"
              component={InputField}
              label="Repayment Status"
              disabled={true}
            />
          </Box>
          <Box width="120px" p="8px">
            <Field
              id="previousStatementId"
              name="previousStatementId"
              component={InputField}
              label="Previous Statement ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Hr />
          <Box width="160px" p="8px">
            <Field
              id="balanceOpen"
              name="balanceOpen"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance open"
              disabled={true}
            />
          </Box>
          <Box width="160px" p="8px">
            <Field
              id="balanceClose"
              name="balanceClose"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance close"
              disabled={true}
            />
          </Box>
          <Box width="160px" p="8px">
            <Field
              id="repaymentMinimumAmountDue"
              name="repaymentMinimumAmountDue"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Minimum amount due repayment"
              disabled={true}
            />
          </Box>
          {isNewStatement && (
            <Box p="8px">
              <Button
                text="Change minimum amount"
                type="reset"
                onClick={changeMinimumAmount}
              />
            </Box>
          )}
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, IStatementForm>({
  form: formNamesConst.STATEMENT,
  destroyOnUnmount: false,
  enableReinitialize: true,
})(StatementForm);
