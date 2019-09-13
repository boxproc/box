import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { Hr } from 'components/Delimiter';
import { CheckboxField, InputField, PasswordField, SelectField } from 'components/Form';

import {
  formNames,
  statusTypes2faOptions,
  statusTypesOptions,
  typeOfCyclesEditorOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser } from 'store/domains';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  defineAdminUser: HandleAddAdminUser | HandleUpdateAdminUser;
  isEditable?: boolean;
  isDisabledType?: boolean;
  onCancel?: () => void;
  isDirty: boolean;
  requires2faFlagValue?: boolean;
}

type DefineUserFormAllProps = DefineUserFormProps &
  InjectedFormProps<{}, DefineUserFormProps>;

const DefineUserForm: React.FC<DefineUserFormAllProps> = ({
  handleSubmit,
  defineAdminUser,
  isEditable,
  isDisabledType,
  onCancel,
  isDirty,
  requires2faFlagValue,
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
              disabled={false}
              isDisabled={isDisabledType}
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
              disabled={isEditable}
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
              label="User Email"
              validate={[formErrorUtil.required, formErrorUtil.email]}
            />
          </Box>
          {isEditable && (
            <Box width={[1 / 3]} p="10px">
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
          <Box width={[1 / 2]} p="10px">
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
          <Box width={[1 / 2]} p="10px">
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
        withCancelConfirmation={isDirty}
        disabledOk={!isDirty}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNames.DEFINE_ADMIN_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
