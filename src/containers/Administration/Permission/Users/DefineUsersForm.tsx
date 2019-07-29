import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';

import {
  formNames,
  statusTypesOptions,
  typeOfCyclesEditorOptions,
} from 'consts';

import { HandleAddAdminUser, HandleUpdateAdminUser } from 'store/domains';

import { formErrorUtil } from 'utils';

interface DefineUserFormProps {
  defineAdminUser?: HandleAddAdminUser | HandleUpdateAdminUser;
  isDisabledStatus?: boolean;
  isDisabledType?: boolean;
  onCancel?: () => void;
}

type DefineUserFormAllProps = DefineUserFormProps &
  InjectedFormProps<{}, DefineUserFormProps>;

const DefineUserForm: React.FC<DefineUserFormAllProps> = ({
  handleSubmit,
  defineAdminUser,
  isDisabledStatus,
  isDisabledType,
  onCancel,
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
          <Box width={[1 / 2]} p="10px">
            <Field
              id="firstName"
              name="firstName"
              placeholder="Enter First Name"
              component={InputField}
              label="User First Name"
              validate={[formErrorUtil.required]}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="lastName"
              name="lastName"
              placeholder="Enter  Last Name"
              component={InputField}
              options={typeOfCyclesEditorOptions}
              label="User Last Name"
              disabled={false}
              isDisabled={isDisabledType}
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="username"
              name="username"
              isSearchable={true}
              component={InputField}
              label="Username"
              placeholder="Enter Username"
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
              disabled={false}
              isDisabled={isDisabledType}
            />
          </Box>

          <Box width={[1 / 2]} p="10px">
            <Field
              id="status"
              name="status"
              component={SelectField}
              isSearchable={true}
              label="Status"
              placeholder="Select Cycles Editor Status"
              options={statusTypesOptions}
              isDisabled={isDisabledStatus}
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
            />
          </Box>
          <Box width={[1 / 2]} p="10px">
            <Field
              id="passwordHash"
              name="passwordHash"
              placeholder="Enter Password Again"
              component={InputField}
              label="Confirm  Password"
              disabled={false}
              isDisabled={isDisabledType}
            />
          </Box>
        </Flex>
      </Box>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUserFormProps>({
  form: formNames.DEFINE_ADMIN_USER,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUserForm);
