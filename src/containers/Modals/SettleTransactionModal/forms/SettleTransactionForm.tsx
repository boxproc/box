import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  ISpinner,
  NumberFormatField,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { formNamesConst } from 'consts';

import { THandleSettleTransaction } from 'store';

import { formErrorUtil } from 'utils';

interface ISettleTransactionForm extends ISpinner {
  isDisabled?: boolean;
  onCancel: () => void;
  settleTransaction: THandleSettleTransaction;
}

type TSettleTransactionForm = ISettleTransactionForm
  & InjectedFormProps<{}, ISettleTransactionForm>;

const SettleTransactionForm: React.FC<TSettleTransactionForm> = ({
  handleSubmit,
  isDisabled,
  pristine,
  onCancel,
  settleTransaction,
  dirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(settleTransaction),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width="120px" p="8px">
          <Field
            id="amountSettled"
            name="amountSettled"
            label="Amount Settled"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            disabled={isDisabled}
            autoFocus={true}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isNumber,
              formErrorUtil.isPositive,
            ]}
          />
        </Box>
        <Box p="8px" >
          <OkCancelButtons
            okText="Settle"
            disabledOk={isDisabled || pristine}
            onCancel={onCancel}
            withCancelConfirmation={dirty}
          />
        </Box>
      </Flex>
    </form>
  );
};

export default reduxForm<{}, ISettleTransactionForm>({
  form: formNamesConst.SETTLE_TRANSACTION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(SettleTransactionForm));
