import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, NumberFormatField, OkCancelButtons } from 'components';
import { dateFormatConst, formNamesConst, maskFormatConst } from 'consts';
import { formErrorUtil } from 'utils';

interface IMinimumRepaymentForm {
  onCancel: () => void;
}

type TMinimumRepaymentForm = IMinimumRepaymentForm & InjectedFormProps<{}, IMinimumRepaymentForm>;

const MinimumRepaymentForm: React.FC<TMinimumRepaymentForm> = ({
  handleSubmit,
  pristine,
  onCancel,
}) => {
  const rangeValue = React.useCallback(
    (value: string | number) => {
      if (!value) {
        return undefined;
      }

      if (Number(value) < 10) {
        return 'Must be more than minimum amount';
      } else if (Number(value) > 100) {
        return 'Cannot exceed outstanding balance';
      } else {
        return undefined;
      }
    },
    []
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(() => console.log('---')),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width="195px" p="8px">
          <Field
            id="minimumRepayment"
            name="minimumRepayment"
            component={NumberFormatField}
            placeholder="0.00"
            fixedDecimalScale={true}
            decimalScale={2}
            label="Minimum amount due repayment"
            hint="Cannot exceed outstanding balance"
            validate={[
              formErrorUtil.isRequired,
              rangeValue,
            ]}
          />
        </Box>
        <Box width="110px" p="8px">
          <Field
            id="repaymentDate"
            name="repaymentDate"
            component={InputField}
            label="Repayment Date"
            placeholder={dateFormatConst.DATE}
            mask={maskFormatConst.DATE}
            disabled={true}
          />
        </Box>
      </Flex>
      <Hr />
      <OkCancelButtons
        okText="Change"
        disabledOk={pristine}
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
