import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ImmutableArray } from 'seamless-immutable';

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
  statusConst,
  userStatusOptions,
  userStatusWith2faOptions,
} from 'consts';

import { IUserInstitution, THandleAddUser, THandleUpdateUser } from 'store';

import { ISelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface IUserForm {
  addUser: THandleAddUser;
  institutions: ImmutableArray<IUserInstitution>;
  institutionsOptions: Array<ISelectValue>;
  institutionValue: ISelectValue;
  isEditMode?: boolean;
  isReadOnly?: boolean;
  onCancel?: () => void;
  requires2faFlagValue: boolean;
  statusValue: ISelectValue;
  updateUser: THandleUpdateUser;
}

type TUserForm = IUserForm & InjectedFormProps<{}, IUserForm>;

const UserForm: React.FC<TUserForm> = ({
  handleSubmit,
  addUser,
  updateUser,
  isEditMode,
  onCancel,
  requires2faFlagValue,
  statusValue,
  institutionValue,
  dirty,
  pristine,
  institutionsOptions,
  institutions,
  change,
  isReadOnly,
}) => {
  const isRegistrationPendingStatus = React.useMemo(
    () => !requires2faFlagValue
      && statusValue
      && statusValue.value === statusConst.REGISTRATION_PENDING,
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
    () => isEditMode ? updateUser : addUser,
    [isEditMode, updateUser, addUser]
  );

  const passwordValidation = React.useMemo(
    () => isEditMode
      ? null
      : [formErrorUtil.isRequired],
    [isEditMode]
  );

  const repeatPasswordValidation = React.useMemo(
    () => isEditMode
      ? [formErrorUtil.passwordsMatch]
      : [formErrorUtil.isRequired, formErrorUtil.passwordsMatch],
    [isEditMode]
  );

  const statusOptions = React.useMemo(
    () => requires2faFlagValue ? userStatusWith2faOptions : userStatusOptions,
    [requires2faFlagValue]
  );

  const isMasterInstitutionUser = React.useMemo(
    () => {
      if (!institutionValue || !institutions) {
        return false;
      }

      const currentInstitutionId = institutionValue.value;
      const currentInstitution = institutions
        .find(institution => institution.id === currentInstitutionId);
      const isMasterInstitution = currentInstitution.masterInstitutionFlag;

      if (!isMasterInstitution) {
        change('changeProfileAllowedFlag', false);
        change('requires2faFlag', true);
      }

      return isMasterInstitution;
    },
    [institutionValue, institutions, change]
  );

  const handleSubmitForm = React.useCallback(
    handleSubmit(submitAction),
    [handleSubmit, submitAction]
  );

  return (
    <form onSubmit={isReadOnly ? null : handleSubmitForm}>
      <Box mx="-8px" >
        <Flex
          flexWrap="wrap"
          alignItems="flex-end"
        >
          <Box width={[1 / 3]} p="8px">
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              component={InputField}
              label="First Name"
              readOnly={isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isAlpha,
              ]}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              component={InputField}
              label="Last Name"
              readOnly={isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isAlpha,
              ]}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="username"
              name="username"
              component={InputField}
              label="Username"
              placeholder="Enter Username"
              readOnly={isEditMode || isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isUsername,
              ]}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="email"
              name="email"
              placeholder="Enter Email"
              component={InputField}
              label="Email"
              readOnly={isReadOnly}
              validate={[
                formErrorUtil.isRequired,
                formErrorUtil.isEmail,
              ]}
            />
          </Box>
          <Box width={[1 / 3]} p="8px">
            <Field
              id="institution"
              name="institution"
              placeholder="Select Institution"
              component={SelectField}
              label="Institution"
              options={institutionsOptions}
              isClearable={false}
              isDisabled={isEditMode || isReadOnly}
              validate={[formErrorUtil.isRequired]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 3]} p="8px">
              <Field
                id="status"
                name="status"
                component={SelectField}
                label="Status"
                placeholder="Select Status"
                options={statusOptions}
                isDisabled={isReadOnly}
                validate={[formErrorUtil.isRequired]}
              />
            </Box>
          )}
          <Box width="100%" p="8px 8px 5px">
            <Field
              id="requires2faFlag"
              name="requires2faFlag"
              component={CheckboxField}
              label="2FA Required"
              disabled={!isMasterInstitutionUser || isReadOnly}
            />
          </Box>
          <Box width="100%" p="5px 8px">
            <Field
              id="changeProfileAllowedFlag"
              name="changeProfileAllowedFlag"
              component={CheckboxField}
              label="Change Profile Allowed"
              disabled={!isMasterInstitutionUser || isReadOnly}
            />
          </Box>
          {!isReadOnly && (
            <React.Fragment>
              <Hr />
              <Box width={[1 / 3]} p="8px">
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
              <Box width={[1 / 3]} p="8px">
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
            </React.Fragment>
          )}
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form >
  );
};

export default reduxForm<{}, IUserForm>({
  form: formNamesConst.USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(UserForm);
