import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/components/CustomerInfo';
import {
  HandleDeleteLedgerCustomer,
  HandleUpdateLedgerCustomer,
} from 'store/domains';

interface EditCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  updateLedgerCustomer: HandleUpdateLedgerCustomer;
  ledgerCurrentCustomerName: string;
}

type EditCustomerFormAllProps = EditCustomerFormProps &
  InjectedFormProps<{}, EditCustomerFormProps>;

const EditCustomerForm: React.FC<EditCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteLedgerCustomer,
  updateLedgerCustomer,
  dirty,
  pristine,
  submitting,
  ledgerCurrentCustomerName,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateLedgerCustomer(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo isEditMode={true} />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent="space-between"
      >
        <Button
          text="delete"
          iconName={iconNamesConst.DELETE}
          type="reset"
          withConfirmation={true}
          confirmationText={`Delete customer "${ledgerCurrentCustomerName}"?`}
          onClick={deleteLedgerCustomer}
        />
        <OkCancelButtons
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
          rightPosition={true}
          withCancelConfirmation={dirty}
          disabledOk={pristine || submitting}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditCustomerFormProps>({
  form: formNamesConst.EDIT_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
