import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField, OkCancelButtons } from 'components';
import { dateFormatConst, formNamesConst, maskFormatConst } from 'consts';
import { THandleChangeMinimumRepayment } from 'store';
import { formErrorUtil } from 'utils';

interface IMinimumRepaymentForm {
  changeMinimumRepayment: THandleChangeMinimumRepayment;
  isLoading: boolean;
  onCancel: () => void;
  outstandingBalance: number;
  validateAmount: (value: string | number) => void;
}

type TMinimumRepaymentForm = IMinimumRepaymentForm & InjectedFormProps<{}, IMinimumRepaymentForm>;

const MinimumRepaymentForm: React.FC<TMinimumRepaymentForm> = ({
  changeMinimumRepayment,
  handleSubmit,
  isLoading,
  onCancel,
  outstandingBalance,
  pristine,
  validateAmount,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(changeMinimumRepayment),
    [handleSubmit, changeMinimumRepayment]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width="185px" p="8px">
          <Field
            id="minimumRepayment"
            name="minimumRepayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum amount due repayment"
            hint={`Cannot exceed outstanding balance: ${outstandingBalance}`}
            disabled={isLoading}
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isPositive,
              validateAmount,
            ]}
          />
        </Box>
        <Box width="120px" p="8px">
          <Field
            id="repaymentDueDate"
            name="repaymentDueDate"
            component={InputField}
            label="Repayment Due Date"
            placeholder={dateFormatConst.DATE}
            mask={maskFormatConst.DATE}
            disabled={true}
            validate={[
              formErrorUtil.isRequired,
            ]}
          />
        </Box>
      </Flex>
      <Hr />
      <OkCancelButtons
        okText="Change"
        disabledOk={pristine || isLoading}
        disabledCancel={isLoading}
        onCancel={onCancel}
      />
    </form>
  );
};

export default reduxForm<{}, IMinimumRepaymentForm>({
  form: formNamesConst.MINIMUM_REPAYMENT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(MinimumRepaymentForm);
