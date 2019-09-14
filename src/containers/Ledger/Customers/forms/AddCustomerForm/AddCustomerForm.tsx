import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNames } from 'consts';

import { CustomerInfo } from 'containers/Ledger/Customers/components';
import {
  HandleAddLedgerCustomer,
} from 'store/domains';

interface AddCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  addLedgerCustomer: HandleAddLedgerCustomer;
  isDirty: boolean;
}

type AddCustomerFormAllProps = AddCustomerFormProps &
  InjectedFormProps<{}, AddCustomerFormProps>;

const AddCustomerForm: React.FC<AddCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  addLedgerCustomer,
  isDirty,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => addLedgerCustomer(data)),
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
        rightPosition={true}
        withCancelConfirmation={isDirty}
        disabledOk={!isDirty}
      />
    </form >
  );
};

export default reduxForm<{}, AddCustomerFormProps>({
  form: formNames.ADD_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddCustomerForm));
