import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, OkCancelButtons } from 'components/Buttons';
import { ExternalSpinnerProps, withSpinner } from 'components/Spinner';
import { Hr } from 'components/Text';

import { formNames } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/customerComponents/CustomerInfo';
import {
  HandleAddLedgerCustomer,
  HandleDeleteLedgerCustomer,
  HandleUpdateLedgerCustomer,
} from 'store/domains';

interface CustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  isDisabledInstitution?: boolean;
  isDisabledStatus?: boolean;
  addLedgerCustomer: HandleAddLedgerCustomer;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  updateLedgerCustomer: HandleUpdateLedgerCustomer;
  mode: 'add' | 'edit';
  ledgerCustomerCurrentId: number;
}

type CustomerFormAllProps = CustomerFormProps &
  InjectedFormProps<{}, CustomerFormProps>;

const CustomerForm: React.FC<CustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  isDisabledInstitution,
  isDisabledStatus,
  addLedgerCustomer,
  deleteLedgerCustomer,
  updateLedgerCustomer,
  mode,
  ledgerCustomerCurrentId,
}) => {
  const handleAction = mode === 'add' ? addLedgerCustomer : updateLedgerCustomer;

  const handleSubmitForm = React.useCallback(
    handleSubmit(data => handleAction(data)),
    [handleSubmit]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo
        isDisabledInstitution={isDisabledInstitution}
        isDisabledStatus={isDisabledStatus}
      />
      <Hr />
      <Flex
        alignItems="flex-end"
        justifyContent="space-between"
      >
        <OkCancelButtons
          okText="Save"
          cancelText="Cancel"
          onCancel={onCancel}
        />
        {mode === 'edit' && (
          <Button
            text="delete"
            iconName="delete"
            type="reset"
            withConfirmation={true}
            confirmationText={`Delete customer?`}
            onClick={() => deleteLedgerCustomer(ledgerCustomerCurrentId)}
          />
        )}
      </Flex>
    </form >
  );
};

export default reduxForm<{}, CustomerFormProps>({
  form: formNames.LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(CustomerForm));
