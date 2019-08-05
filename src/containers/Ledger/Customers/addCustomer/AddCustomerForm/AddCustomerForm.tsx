import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/customerComponents/CustomerInfo';

interface AddCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
}

type AddCustomerFormAllProps = AddCustomerFormProps &
  InjectedFormProps<{}, AddCustomerFormProps>;

const AddCustomerForm: React.FC<AddCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, AddCustomerFormProps>({
  form: formNames.ADD_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddCustomerForm));
