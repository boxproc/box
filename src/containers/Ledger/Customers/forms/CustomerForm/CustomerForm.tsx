import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Button, Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst, iconNamesConst, identificationTypesConst } from 'consts';

import CustomerInfo from 'containers/Ledger/Customers/components/CustomerInfo';
import {
  HandleAddLedgerCustomer,
  HandleDeleteLedgerCustomer,
  HandleUpdateLedgerCustomer,
  THandleGetDictionaryCountries,
} from 'store';

import { ISelectValue } from 'types';

interface IEditCustomerForm extends ISpinner {
  addCustomer: HandleAddLedgerCustomer;
  countryCodes: Array<ISelectValue>;
  currentCustomerName: string;
  currentId: number;
  deleteCustomer: HandleDeleteLedgerCustomer;
  identificationTypeValue: ISelectValue;
  isEditMode?: boolean;
  isReadOnly: boolean;
  loadCountryCodes: THandleGetDictionaryCountries;
  onCancel: () => void;
  updateCustomer: HandleUpdateLedgerCustomer;
}

type TEditCustomerForm = IEditCustomerForm & InjectedFormProps<{}, IEditCustomerForm>;

const EditCustomerForm: React.FC<TEditCustomerForm> = ({
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
      && identificationTypeValue.value !== identificationTypesConst.NO_IDENTIFICATION,
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

export default reduxForm<{}, IEditCustomerForm>({
  form: formNamesConst.CUSTOMER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(withSpinner()(EditCustomerForm));
