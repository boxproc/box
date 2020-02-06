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

import { SelectValue } from 'types';

interface EditCustomerFormProps extends ExternalSpinnerProps {
  onCancel: () => void;
  addCustomer: HandleAddLedgerCustomer;
  deleteCustomer: HandleDeleteLedgerCustomer;
  updateCustomer: HandleUpdateLedgerCustomer;
  currentCustomerName: string;
  identificationTypeValue: SelectValue;
  isEditMode?: boolean;
  loadCountryCodes: HandleGetDictionaryCountries;
  countryCodes: Array<SelectValue>;
  isReadOnly: boolean;
  currentId: number;
}

type EditCustomerFormAllProps = EditCustomerFormProps &
  InjectedFormProps<{}, EditCustomerFormProps>;

const EditCustomerForm: React.FC<EditCustomerFormAllProps> = ({
  onCancel,
  handleSubmit,
  addCustomer,
  deleteCustomer,
  updateCustomer,
  dirty,
  pristine,
  currentCustomerName,
  isEditMode,
  identificationTypeValue,
  loadCountryCodes,
  countryCodes,
  isReadOnly,
  currentId,
}) => {
  React.useEffect(
    () => {
      loadCountryCodes();
    },
    [loadCountryCodes]
  );

  const submitAction = React.useMemo(
    () => isEditMode ? updateCustomer : addCustomer,
    [isEditMode, updateCustomer, addCustomer]
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

  const handleDeleteCustomer = React.useCallback(
    () => deleteCustomer(currentId),
    [deleteCustomer, currentId]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <CustomerInfo
        countryCodes={countryCodes}
        isEditMode={isEditMode}
        isIdentification={isIdentification}
        isReadOnly={isReadOnly}
      />
      <Hr />
      <Flex
        alignItems="center"
        justifyContent={isEditMode ? 'space-between' : 'flex-end'}
      >
        <div>
          {isEditMode && !isReadOnly && (
            <Button
              text="delete"
              iconName={iconNamesConst.DELETE}
              type="reset"
              withConfirmation={true}
              confirmationText={`Delete customer "${currentCustomerName}"?`}
              onClick={handleDeleteCustomer}
            />
          )}
        </div>
        <OkCancelButtons
          okText="Save"
          cancelText="Close"
          onCancel={onCancel}
          withCancelConfirmation={dirty}
          disabledOk={pristine}
          hideOk={isReadOnly}
        />
      </Flex>
    </form >
  );
};

export default reduxForm<{}, EditCustomerFormProps>({
  form: formNamesConst.CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
