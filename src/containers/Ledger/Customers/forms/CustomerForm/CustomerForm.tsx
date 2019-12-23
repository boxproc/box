import React from 'react';

import { Flex } from '@rebass/grid';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Button, ExternalSpinnerProps, Hr, OkCancelButtons, withSpinner } from 'components';

import { formNamesConst, iconNamesConst, identificationTypesCodes } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/components/CustomerInfo';
import {
  HandleAddLedgerCustomer,
  HandleDeleteLedgerCustomer,
  HandleGetDictionaryCountries,
  HandleUpdateLedgerCustomer,
} from 'store/domains';

import { SelectValues } from 'types';

interface EditCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  addLedgerCustomer: HandleAddLedgerCustomer;
  deleteLedgerCustomer: HandleDeleteLedgerCustomer;
  updateLedgerCustomer: HandleUpdateLedgerCustomer;
  ledgerCurrentCustomerName: string;
  identificationTypeValue: SelectValues;
  isEditMode?: boolean;
  loadCountryCodes: HandleGetDictionaryCountries;
  countryCodes: Array<SelectValues>;
}

type EditCustomerFormAllProps = EditCustomerFormProps &
  InjectedFormProps<{}, EditCustomerFormProps>;

const EditCustomerForm: React.FC<EditCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  addLedgerCustomer,
  deleteLedgerCustomer,
  updateLedgerCustomer,
  dirty,
  pristine,
  ledgerCurrentCustomerName,
  isEditMode,
  identificationTypeValue,
  loadCountryCodes,
  countryCodes,
}) => {
  React.useEffect(
    () => {
      if (!countryCodes.length) {
        loadCountryCodes();
      }
    },
    [loadCountryCodes, countryCodes]
  );

  const submitAction = React.useMemo(
    () => isEditMode ? updateLedgerCustomer : addLedgerCustomer,
    [isEditMode, updateLedgerCustomer, addLedgerCustomer]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitAction),
    [handleSubmit, submitAction]
  );

  const isIdentification = React.useMemo(
    () => identificationTypeValue
      && identificationTypeValue.value !== identificationTypesCodes.NO_IDENTIFICATION,
    [identificationTypeValue]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <CustomerInfo
        countryCodes={countryCodes}
        isEditMode={isEditMode}
        isIdentification={isIdentification}
      />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent={isEditMode ? 'space-between' : 'flex-end'}
      >
        {isEditMode && (
          <Button
            text="delete"
            iconName={iconNamesConst.DELETE}
            type="reset"
            withConfirmation={true}
            confirmationText={`Delete customer "${ledgerCurrentCustomerName}"?`}
            onClick={deleteLedgerCustomer}
          />
        )}
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditCustomerFormProps>({
  form: formNamesConst.LEDGER_CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
