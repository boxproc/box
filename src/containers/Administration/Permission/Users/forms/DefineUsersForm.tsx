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
  statusTypesLoginOptions,
  statusTypesOptions,
  typeOfCyclesEditorOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser } from 'store/domains';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  defineAdminUser: HandleAddAdminUser | HandleUpdateAdminUser;
  isEditMode?: boolean;
  isDisabledType?: boolean;
  onCancel?: () => void;
  requires2faFlagValue?: boolean;
}

type DefineUserFormAllProps = DefineUserFormProps &
  InjectedFormProps<{}, DefineUserFormProps>;

const DefineUserForm: React.FC<DefineUserFormAllProps> = ({
  handleSubmit,
  defineAdminUser,
  isEditMode,
  isDisabledType,
  onCancel,
  requires2faFlagValue,
  dirty,
  pristine,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminUser(data)),
    [handleSubmit, defineAdminUser]
  );

  const passwordValidation = React.useMemo(
    () => isEditMode ? [formErrorUtil.passwordsMatch] :
    [formErrorUtil.required, formErrorUtil.passwordsMatch],
    [isEditMode]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
          alignItems="flex-end"
        >
          <Box width={[1 / 2]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              component={InputField}
              label="First Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="Last Name"
              isDisabled={isDisabledType}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="10px">
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
          <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="10px">
            <Field
              id="email"
              name="email"
              placeholder="Enter Email"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="Email"
              validate={formErrorUtil.email}
            />
          </Box>
          {isEditMode && (
            <Box width={[isEditMode ? 1 / 3 : 1 / 2]} p="10px">
              <Field
                id="status"
                name="status"
                component={SelectField}
                label="Status"
                placeholder="Select Status"
                options={requires2faFlagValue ? statusTypesLoginOptions : statusTypesOptions}
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
          <Box width={[1 / 2]} p="10px">
            <Field
              id="password"
              name="password"
              placeholder="Enter Password"
              component={PasswordField}
              label="Password"
              validate={!isEditMode && formErrorUtil.required}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="passwordRepeat"
              name="passwordRepeat"
              placeholder="Repeat Password"
              component={PasswordField}
              label="Repeat Password"
              validate={passwordValidation}
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
