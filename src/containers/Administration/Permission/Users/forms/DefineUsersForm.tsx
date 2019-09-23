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
  statusTypes2faOptions,
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
  submitting,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminUser(data)),
    [handleSubmit, defineAdminUser]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
          alignItems="flex-end"
        >
          <Box width={[1 / 4]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              component={InputField}
              label="First Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="Last Name"
              disabled={false}
              isDisabled={isDisabledType}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="username"
              name="username"
              component={InputField}
              label="Username"
              placeholder="Enter Username"
              disabled={isEditMode}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 4]} p="10px">
            <Field
              id="email"
              name="email"
              placeholder="Enter Email"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="User Email"
              validate={[formErrorUtil.required, formErrorUtil.email]}
            />
          </Box>
          {isEditMode && (
            <Box width={[1 / 4]} p="10px">
              <Field
                id="status"
                name="status"
                component={SelectField}
                label="Status"
                placeholder="Select Cycles Editor Status"
                options={requires2faFlagValue ? statusTypes2faOptions : statusTypesOptions}
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
          <Box width={[1 / 3]} p="10px">
            <Field
              id="password"
              name="password"
              placeholder="Enter Password"
              component={PasswordField}
              label="User Password"
              disabled={false}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 3]} p="10px">
            <Field
              id="passwordRepeat"
              name="passwordRepeat"
              placeholder="Repeat Password"
              component={PasswordField}
              label="Repeat Password"
              disabled={false}
              validate={[formErrorUtil.required, formErrorUtil.passwordsMatch]}
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
        disabledOk={pristine || submitting}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNamesConst.DEFINE_ADMIN_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
