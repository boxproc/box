import React from 'react';
import { InjectedFormProps, reduxForm } from 'redux-form';

import { Flex } from '@rebass/grid';

import { Hr, ISpinner, OkCancelButtons, withSpinner } from 'components';
import { formNamesConst, identificationTypesConst } from 'consts';
import { CustomerInfo } from './../../components';

import {
  THandleAddCustomer,
  THandleGetDictionaryCountries,
  THandleUpdateCustomer,
} from 'store';

import { ISelectValue } from 'types';

interface IEditCustomerForm extends ISpinner {
  addCustomer: THandleAddCustomer;
  countryCodes: Array<ISelectValue>;
  countryCodeValue: ISelectValue;
  identificationTypeValue: ISelectValue;
  institutionsOptions: Array<ISelectValue>;
  isCountryCodesLoading: boolean;
  isEditMode?: boolean;
  isReadOnly?: boolean;
  loadCountryCodes: THandleGetDictionaryCountries;
  onCancel: () => void;
  updateCustomer: THandleUpdateCustomer;
}

type TEditCustomerForm = IEditCustomerForm & InjectedFormProps<{}, IEditCustomerForm>;

const EditCustomerForm: React.FC<TEditCustomerForm> = ({
  addCustomer,
  countryCodes,
  countryCodeValue,
  dirty,
  handleSubmit,
  identificationTypeValue,
  institutionsOptions,
  isCountryCodesLoading,
  isEditMode,
  isReadOnly,
  loadCountryCodes,
  onCancel,
  pristine,
  updateCustomer,
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

  const isUSACountryCode = React.useMemo(
    () => countryCodeValue && countryCodeValue.value === 'USA',
    [countryCodeValue]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <CustomerInfo
        countryCodes={countryCodes}
        institutionsOptions={institutionsOptions}
        isCountryCodesLoading={isCountryCodesLoading}
        isEditMode={isEditMode}
        isIdentification={isIdentification}
        isReadOnly={isReadOnly}
        isCounty={isUSACountryCode}
      />
      <Hr />
      <Flex justifyContent="flex-end">
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
