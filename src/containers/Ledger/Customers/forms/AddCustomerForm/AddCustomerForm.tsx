import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import { CustomerInfo } from 'containers/Ledger/Customers/components';
import {
  HandleAddLedgerCustomer,
} from 'store/domains';

interface AddCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  addLedgerCustomer: HandleAddLedgerCustomer;
}

type AddCustomerFormAllProps = AddCustomerFormProps &
  InjectedFormProps<{}, AddCustomerFormProps>;

const AddCustomerForm: React.FC<AddCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  addLedgerCustomer,
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
      />
    </form >
  );
};

export default reduxForm<{}, AddCustomerFormProps>({
  form: formNames.ADD_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddCustomerForm));
