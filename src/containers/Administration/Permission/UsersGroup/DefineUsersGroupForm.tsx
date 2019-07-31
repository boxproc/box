import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

import { Box, Flex } from '@rebass/grid';

import { OkCancelButtons } from 'components/Buttons/OkCancelButtons';
import { InputField, SelectField } from 'components/Form';

import {
  formNames,
} from 'consts';

import { HandleAddAdminUsersGroups, HandleUpdateAdminUsersGroup } from 'store/domains';

import { Panel, Tabs } from 'components/Tabs';
import { SelectValues } from 'types';
import { formErrorUtil } from 'utils';
import ActiveUsersForm from './ActiveUsers';
import UserGroupMembers from './UserGroupMembers';

interface DefineUsersGroupFormProps {
  defineAdminUsersGroup?: HandleAddAdminUsersGroups | HandleUpdateAdminUsersGroup;
  isDisabledInstitutions?: boolean;
  onCancel?: () => void;
  institutionsOptions?: Array<SelectValues>;
}

type DefineUsersGroupFormAllProps = DefineUsersGroupFormProps &
  InjectedFormProps<{}, DefineUsersGroupFormProps>;

const DefineUsersGroupForm: React.FC<DefineUsersGroupFormAllProps> = ({
  handleSubmit,
  defineAdminUsersGroup,
  onCancel,
  institutionsOptions,
  isDisabledInstitutions,
}) => {
  const handleSubmitForm = React.useCallback(
    handleSubmit(data => defineAdminUsersGroup(data)),
    [handleSubmit, defineAdminUsersGroup]
  );

  return (
    <form onSubmit={handleSubmitForm}>
      <Tabs>
        <Panel title="General">
          <Box mx="-10px" >
            <Flex
              flexWrap="wrap"
            >
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="institutionId"
                  name="institutionId"
                  placeholder="Select Institution"
                  component={SelectField}
                  label="Institution"
                  validate={[formErrorUtil.required]}
                  options={institutionsOptions}
                  isDisabled={isDisabledInstitutions}
                />
              </Box>
              <Box width={[1 / 2]} p="10px">
                <Field
                  id="name"
                  name="name"
                  isSearchable={true}
                  component={InputField}
                  label="User group name"
                  placeholder="Enter User group name"
                />
              </Box>
            </Flex>
          </Box>
        </Panel>
        <Panel
          title="User Group Members"
          // isDisabled={true}
        >
          <Box mb="30px">
          <ActiveUsersForm />
          </Box>
          <UserGroupMembers />
        </Panel>

      </Tabs>
      <OkCancelButtons
        okText="Save"
        cancelText="Cancel"
        onCancel={onCancel}
      />
    </form >
  );
};

export default reduxForm<{}, DefineUsersGroupFormProps>({
  form: formNames.DEFINE_ADMIN_USERS_GROUP,
  destroyOnUnmount: true,
  enableReinitialize: true,
})(DefineUsersGroupForm);
