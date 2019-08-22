import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';
import { Hr } from 'components/Text';

import {
  formNames,
  statusTypesOptions,
  typeOfCyclesEditorOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser } from 'store/domains';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  defineAdminUser: HandleAddAdminUser | HandleUpdateAdminUser;
  isDisabledUsername?: boolean;
  isDisabledType?: boolean;
  onCancel?: () => void;
  isDirty: boolean;
}

type DefineUserFormAllProps = DefineUserFormProps &
  InjectedFormProps<{}, DefineUserFormProps>;

const DefineUserForm: React.FC<DefineUserFormAllProps> = ({
  handleSubmit,
  defineAdminUser,
  isDisabledUsername,
  isDisabledType,
  onCancel,
  isDirty,
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
              disabled={isDisabledUsername}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
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
          <Box width={[1 / 2]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              label="Status"
              placeholder="Select Cycles Editor Status"
              options={statusTypesOptions}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="passwordHash"
              name="passwordHash"
              placeholder="Enter Password"
              type={'password'}
              component={InputField}
              label="User Password"
              disabled={false}
              isDisabled={isDisabledType}
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="passwordHashRepeat"
              name="passwordHashRepeat"
              placeholder="Repeat Password "
              component={InputField}
              label="Repeat Password"
              disabled={false}
              type={'password'}
              isDisabled={isDisabledType}
              validate={[formErrorUtil.required]}
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
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNames.DEFINE_ADMIN_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
