import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField } from 'components';
import { formNamesConst } from 'consts';

interface ResultManualTransactionFormProps { }

type ResultManualTransactionFormAllProps = ResultManualTransactionFormProps
  & InjectedFormProps<{}, ResultManualTransactionFormProps>;

const ResultManualTransactionForm: React.FC<ResultManualTransactionFormAllProps> = () => {
  return (
    <form>
      <Box mx="-8px">
        <Flex
          alignItems="flex-end"
          flexWrap="wrap"
        >
          <Box width={[1 / 4]} p="8px">
            <Field
              id="transactionId"
              name="transactionId"
              component={InputField}
              label="Transaction ID"
              readOnly={true}
              isNumber={true}
            />
          </Box>
          <Box width={[1 / 4]} p="8px">
            <Field
              id="status"
              name="status"
              component={InputField}
              label="Status"
              readOnly={true}
            />
          </Box>
          <Hr />
          <Box width={[1 / 4]} p="8px">
            <Field
              id="balanceSettledBefore"
              name="balanceSettledBefore"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Settled Before"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 4]} p="8px">
            <Field
              id="balanceSettledAfter"
              name="balanceSettledAfter"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Settled After"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 4]} p="8px">
            <Field
              id="balanceAvailableBefore"
              name="balanceAvailableBefore"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Available Before"
              readOnly={true}
            />
          </Box>
          <Box width={[1 / 4]} p="8px">
            <Field
              id="balanceAvailableAfter"
              name="balanceAvailableAfter"
              component={NumberFormatField}
              placeholder="0.00"
              fixedDecimalScale={true}
              decimalScale={2}
              label="Balance Available After"
              readOnly={true}
            />
          </Box>
        </Flex>
      </Box>
    </form>
  );
};

export default reduxForm<{}, ResultManualTransactionFormProps>({
  form: formNamesConst.RESULT_MANUAL_TRANSACTION,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(ResultManualTransactionForm);
