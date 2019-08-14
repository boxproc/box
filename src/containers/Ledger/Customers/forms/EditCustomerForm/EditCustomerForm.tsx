import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/components/CustomerInfo';
import {
  HandleDeleteLedgerCustomer,
  HandleUpdateLedgerCustomer,
} from 'store/domains';

interface EditCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  updateLedgerCustomer: HandleUpdateLedgerCustomer;
  ledgerCustomerCurrentId: number;
}

type EditCustomerFormAllProps = EditCustomerFormProps &
  InjectedFormProps<{}, EditCustomerFormProps>;

const EditCustomerForm: React.FC<EditCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  deleteLedgerCustomer,
  updateLedgerCustomer,
  ledgerCustomerCurrentId,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => updateLedgerCustomer(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo
        isDisabledInstitution={true}
        isDisabledStatus={true}
      />
      <Hr />
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <Button
          text="delete"
          iconName="delete"
          type="reset"
          withConfirmation={true}
          confirmationText={`Delete customer?`}
          onClick={() => deleteLedgerCustomer(ledgerCustomerCurrentId)}
        />
        <OkCancelButtons
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
          rightPosition={true}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditCustomerFormProps>({
  form: formNames.EDIT_LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
