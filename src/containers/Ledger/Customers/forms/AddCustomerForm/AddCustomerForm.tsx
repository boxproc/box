import React from 'react';

import { InjectedFormProps, reduxForm } from 'redux-form';

import { ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst } from 'consts';

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
  dirty,
  pristine,
  invalid,
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
        withCancelConfirmation={dirty}
        disabledOk={pristine || invalid}
      />
    </form >
  );
};

export default reduxForm<{}, AddCustomerFormProps>({
  form: formNamesConst.ADD_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(AddCustomerForm));
