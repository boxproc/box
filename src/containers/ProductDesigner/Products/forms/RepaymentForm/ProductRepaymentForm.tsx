import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { Hr, InputField, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst } from 'consts';
import { THandleUpdateProductRepayment } from 'store';
import { formErrorUtil } from 'utils';

interface IProductRepaymentForm extends ISpinner {
  onCancel?: () => void;
  isReadOnly: boolean;
  updateProductRepayment: THandleUpdateProductRepayment;
}

type TProductRepaymentForm = IProductRepaymentForm & InjectedFormProps<{}, IProductRepaymentForm>;

const ProductRepaymentForm: React.FC<TProductRepaymentForm> = ({
  handleSubmit,
  onCancel,
  dirty,
  pristine,
  isReadOnly,
  updateProductRepayment,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(updateProductRepayment),
    [handleSubmit]
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
              formErrorUtil.isInteger,
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
