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
  status2faLoginOptions,
  statusCodes,
  statusLoginOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser, InstitutionItem } from 'store/domains';

import { SelectValue } from 'types';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  institutionsOptions: Array<SelectValue>;
  institutions: Array<InstitutionItem>;
  isEditMode?: boolean;
  requires2faFlagValue: boolean;
  statusValue: SelectValue;
  institutionValue: SelectValue;
  addAdminUser: HandleAddAdminUser;
  updateAdminUser: HandleUpdateAdminUser;
  onCancel?: () => void;
  isReadOnly?: boolean;
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
      && statusValue.value === statusCodes.REGISTRATION_PENDING,
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

  const statusOptions = React.useMemo(
    () => requires2faFlagValue ? status2faLoginOptions : statusLoginOptions,
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
              readOnly={isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              component={InputField}
              label="Last Name"
              readOnly={isReadOnly}
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
              readOnly={isEditMode || isReadOnly}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="email"
              name="email"
              placeholder="Enter Email"
              component={InputField}
              label="Email"
              readOnly={isReadOnly}
              validate={[formErrorUtil.email]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="institution"
              name="institution"
              placeholder="Select Institution"
              component={SelectField}
              label="Institution"
              options={institutionsOptions}
              isClearable={false}
              isDisabled={isEditMode || isReadOnly}
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
                isDisabled={isReadOnly}
                validate={[formErrorUtil.required]}
              />
            </Box>
          )}
          <Box width="100%" p="10px 10px 5px">
            <Field
              id="requires2faFlag"
              name="requires2faFlag"
              component={CheckboxField}
              label="2FA Required"
              disabled={!isMasterInstitutionUser || isReadOnly}
            />
          </Box>
          <Box width="100%" p="5px 10px">
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
            </React.Fragment>
          )}
        </Flex>
      </Box>
      <Hr />
      <OkCancelButtons
        okText="Save"
        cancelText="Close"
        onCancel={onCancel}
        rightPosition={true}
        withCancelConfirmation={dirty}
        disabledOk={pristine}
        hideOk={isReadOnly}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNamesConst.DEFINE_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
