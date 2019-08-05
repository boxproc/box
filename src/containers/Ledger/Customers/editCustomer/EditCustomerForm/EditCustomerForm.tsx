import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/customerComponents/CustomerInfo';

interface EditCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
}

type EditCustomerFormAllProps = EditCustomerFormProps &
  InjectedFormProps<{}, EditCustomerFormProps>;

const EditCustomerForm: React.FC<EditCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => console.log(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo
        isDisabledInstitution={true}
        isDisabledStatus={true}
      />
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, EditCustomerFormProps>({
  form: formNames.ADD_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
