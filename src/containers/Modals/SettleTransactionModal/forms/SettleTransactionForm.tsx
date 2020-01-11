import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  ExternalSpinnerProps,
  Hr,
  MaskField,
  NumberFormatField,
  OkCancelButtons,
  withSpinner,
} from 'components';

import { dateFormat, formNamesConst, maskFormat } from 'consts';

import { HandleSettleTransaction } from 'store/domains';

import { formErrorUtil } from 'utils';

interface SettleTransactionFormProps extends ExternalSpinnerProps {
  isDisabled?: boolean;
  onCancel: () => void;
  settleTransaction: HandleSettleTransaction;
}

type SettleTransactionFormPropsAllProps = SettleTransactionFormProps
  & InjectedFormProps<{}, SettleTransactionFormProps>;

const SettleTransactionForm: React.FC<SettleTransactionFormPropsAllProps> = ({
  handleSubmit,
  isDisabled,
  pristine,
  onCancel,
  settleTransaction,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(settleTransaction),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-10px">
        <Box width="180px" p="10px">
          <Field
            id="amountSettled"
            name="amountSettled"
            label="Amount Settled"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            isNumber={true}
            disabled={isDisabled}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isNumber,
            ]}
          />
        </Box>
        <Box width="200px" p="10px" >
          <Field
            id="settledDatetime"
            name="settledDatetime"
            component={MaskField}
            label="Settled Datetime"
            placeholder={dateFormat.DATE_TIME}
            mask={maskFormat.DATE_TIME}
            disabled={isDisabled}
            validate={[
              formErrorUtil.required,
              formErrorUtil.isDateTime,
            ]}
          />
        </Box>
      </Flex>
      <Hr />
      <OkCancelButtons
        okText="Settle"
        disabledOk={isDisabled || pristine}
        rightPosition={true}
        onCancel={onCancel}
      />
    </form>
  );
};

export default reduxForm<{}, SettleTransactionFormProps>({
  form: formNamesConst.SETTLE_TRANSACTION_FORM,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner({
  isFixed: true,
})(SettleTransactionForm));
