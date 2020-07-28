import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField } from 'components';
import { formNamesConst } from 'consts';

interface IResultManualTransactionForm { }

type TResultManualTransactionForm = IResultManualTransactionForm
  & InjectedFormProps<{}, IResultManualTransactionForm>;

const ResultManualTransactionForm: React.FC<TResultManualTransactionForm> = () => {
  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width="120px" p="8px">
            <Field
              id="transactionId"
              name="transactionId"
              component={InputField}
              label="Transaction ID"
              disabled={true}
              isNumber={true}
            />
          </Box>
          <Box width="180px" p="8px">
            <Field
              id="status"
              name="status"
              component={InputField}
              label="Status"
              disabled={true}
            />
          </Box>
          <Hr />
          <Box width="150px" p="8px">
            <Field
              id="balanceSettledBefore"
              name="balanceSettledBefore"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Settled Before"
              disabled={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="balanceSettledAfter"
              name="balanceSettledAfter"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Settled After"
              disabled={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="balanceAuthorisedBefore"
              name="balanceAuthorisedBefore"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Authorised Before"
              disabled={true}
            />
          </Box>
          <Box width="150px" p="8px">
            <Field
              id="balanceAuthorisedAfter"
              name="balanceAuthorisedAfter"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Authorised After"
              disabled={true}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, IResultManualTransactionForm>({
  form: formNamesConst.RESULT_MANUAL_TRANSACTION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ResultManualTransactionForm);
