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
        <Panel title="User Groups">
      <Box mx="-10px" >
        <Flex
          flexWrap="wrap"
        >
          <Box width={[1 / 2]} p="10px">
            <Field
              id="institutionId"
              name="institutionId"
              placeholder="Select Institution Name"
              component={SelectField}
              label="Institution Name"
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
              label="Name of group organization"
              placeholder="Enter Name of group organization"
            />
          </Box>
        </Flex>
      </Box>
      </Panel>
      <Panel title="User Group Members"/>
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
