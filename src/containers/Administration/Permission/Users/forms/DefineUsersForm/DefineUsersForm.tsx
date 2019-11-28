import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import {
  CheckboxField,
  Hr,
  InputField,
  OkCancelButtons,
  PasswordField,
  SelectField,
} from 'components';

import {
  formNamesConst,
  statusTypes2faLoginOptions,
  statusTypesCodes,
  statusTypesLoginOptions,
  typeOfCyclesEditorOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser } from 'store/domains';

import { SelectValues } from 'types';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  institutionsOptions: Array<SelectValues>;
  isEditMode?: boolean;
  requires2faFlagValue: boolean;
  statusValue: SelectValues;
  addAdminUser: HandleAddAdminUser;
  updateAdminUser: HandleUpdateAdminUser;
  onCancel?: () => void;
}

type DefineUserFormAllProps = DefineUserFormProps &
  InjectedFormProps<{}, DefineUserFormProps>;

const DefineUserForm: React.FC<DefineUserFormAllProps> = ({
  handleSubmit,
  addAdminUser,
  updateAdminUser,
  isEditMode,
  onCancel,
  requires2faFlagValue,
  statusValue,
  dirty,
  pristine,
  institutionsOptions,
  change,
}) => {
  const isRegistrationPendingStatus = React.useMemo(
    () => !requires2faFlagValue
      && statusValue
      && statusValue.value === statusTypesCodes.REGISTRATION_PENDING,
    [statusValue, requires2faFlagValue]
  );

  React.useEffect(
    () => {
      if (isRegistrationPendingStatus) {
        change('status', null);
      }
    },
    [isRegistrationPendingStatus, change]
  );

  const submitAction = React.useMemo(
    () => isEditMode ? updateAdminUser : addAdminUser,
    [isEditMode, updateAdminUser, addAdminUser]
  );

  const passwordValidation = React.useMemo(
    () => isEditMode
      ? null
      : [formErrorUtil.required],
    [isEditMode]
  );

  const repeatPasswordValidation = React.useMemo(
    () => isEditMode
      ? [formErrorUtil.passwordsMatch]
      : [formErrorUtil.required, formErrorUtil.passwordsMatch],
    [isEditMode]
  );

  const statusOptions = requires2faFlagValue ? statusTypes2faLoginOptions : statusTypesLoginOptions;

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitAction),
    [handleSubmit, submitAction]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
          alignItems="flex-end"
        >
          <Box width={[1 / 3]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              component={InputField}
              label="First Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="Last Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="username"
              name="username"
              component={InputField}
              label="Username"
              placeholder="Enter Username"
              readOnly={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="email"
              name="email"
              placeholder="Enter Email"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="Email"
              validate={[formErrorUtil.email]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="userInstitution"
              name="userInstitution"
              placeholder="Select Institution"
              component={SelectField}
              label="Institution"
              options={institutionsOptions}
              isClearable={false}
              isDisabled={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 3]} p="10px">
              <Field
                id="status"
                name="status"
                component={SelectField}
                label="Status"
                placeholder="Select Status"
                options={statusOptions}
                validate={[formErrorUtil.required]}
              />
            </Box>
          )}
          <Box width="100%" p="10px">
            <Field
              id="requires2faFlag"
              name="requires2faFlag"
              component={CheckboxField}
              label="2FA Required"
            />
          </Box>
          <Box width="100%" p="10px">
            <Field
              id="changeProfileAllowedFlag"
              name="changeProfileAllowedFlag"
              component={CheckboxField}
              label="Change Profile Allowed"
            />
          </Box>
          <Hr />
          <Box width={[1 / 3]} p="10px">
            <Field
              id="password"
              name="password"
              placeholder="Enter Password"
              component={PasswordField}
              autoComplete="new-password"
              label="Password"
              validate={passwordValidation}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="passwordRepeat"
              name="passwordRepeat"
              placeholder="Repeat Password"
              component={PasswordField}
              autoComplete="new-password"
              label="Repeat Password"
              validate={repeatPasswordValidation}
            />
          </Box>
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNamesConst.DEFINE_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
