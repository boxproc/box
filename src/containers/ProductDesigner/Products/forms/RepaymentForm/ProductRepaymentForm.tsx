import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { cycleTypesConst, formNamesConst } from 'consts';
import { THandleUpdateProductRepayment } from 'store';
import { formErrorUtil } from 'utils';

interface IProductRepaymentForm extends ISpinner {
  isReadOnly: boolean;
  onCancel?: () => void;
  statementCycleTypeId?: number | string;
  updateProductRepayment: THandleUpdateProductRepayment;
}

const rangeValueMonthly = formErrorUtil.rangeValue(1, 27, 'for monthly type');
const rangeValueBiMonthly = formErrorUtil.rangeValue(1, 58, 'for bi-monthly type');
const rangeValueWeekly = formErrorUtil.rangeValue(1, 6, 'for weekly type');
const rangeValueBiWeekly = formErrorUtil.rangeValue(1, 13, 'for bi-weekly type');
const rangeValueFixedNumOfDays = formErrorUtil.rangeValue(1, 249, 'for fixed number of days');

type TProductRepaymentForm = IProductRepaymentForm & InjectedFormProps<{}, IProductRepaymentForm>;

const ProductRepaymentForm: React.FC<TProductRepaymentForm> = ({
  dirty,
  handleSubmit,
  isReadOnly,
  onCancel,
  pristine,
  statementCycleTypeId,
  updateProductRepayment,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductRepayment),
    [handleSubmit]
  );

  const statementCycleParameterValidation = React.useMemo(
    () => {
      if (statementCycleTypeId === cycleTypesConst.MONTHLY) {
        return rangeValueMonthly;
      } else if (statementCycleTypeId === cycleTypesConst.BI_MONTHLY) {
        return rangeValueBiMonthly;
      } else if (statementCycleTypeId === cycleTypesConst.WEEKLY) {
        return rangeValueWeekly;
      } else if (statementCycleTypeId === cycleTypesConst.BI_WEEKLY) {
        return rangeValueBiWeekly;
      } else if (statementCycleTypeId === cycleTypesConst.FIXED_NUMBER_OF_DAYS) {
        return rangeValueFixedNumOfDays;
      } else {
        return formErrorUtil.isInteger;
      }
    },
    [statementCycleTypeId]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Flex alignItems="flex-end" mx="-8px">
        <Box width="195px" p="8px">
          <Field
            id="numberOfDaysToMakeRepayment"
            name="numberOfDaysToMakeRepayment"
            placeholder="Enter #"
            component={InputField}
            label="Number of Days to Make Repayment"
            isNumber={true}
            disabled={isReadOnly}
            hint="Number of days since the end of cycle allowed to take repayment."
            hintPosition="right"
            validate={[
              formErrorUtil.isRequired,
              statementCycleParameterValidation,
            ]}
          />
        </Box>
        <Box width="195px" p="8px">
          <Field
            id="directDebitSubmissionNrDays"
            name="directDebitSubmissionNrDays"
            placeholder="Enter #"
            component={InputField}
            label="Direct Debit Submission Window Number of Days"
            isNumber={true}
            disabled={isReadOnly}
            hint="The number of days prior to the expected repayment date that a Direct
             Debit payment instruction must be submitted. The actual collection date may differ,
             this is dependant on the Direct Debit Provider."
            hintPosition="right"
            validate={[
              formErrorUtil.isRequired,
              formErrorUtil.isInteger,
            ]}
          />
        </Box>
      </Flex>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        withCancelConfirmation={dirty}
        onCancel={onCancel}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form>
  );
};

export default reduxForm<{}, IProductRepaymentForm>({
  form: formNamesConst.PRODUCT_REPAYMENT,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(ProductRepaymentForm));
