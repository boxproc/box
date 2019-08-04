import React from 'react';

import { Box } from '@rebass/grid';
import { Panel, Tabs } from 'components/Tabs';

import {
  UserGroupMembers,
  UserGroupPermission,
} from 'containers/Administration/Permission/UsersGroup/UsersGroupComponents';

import EditGeneralInfoUserGroupFrom from './EditGeneralInfoUserGroupFrom';
import EditGroupPermissionForm from './EditGroupPermissionForm';
import EditUserGroupMembersForm from './EditUserGroupMembersForm';

export interface EditUserGroupFormsProps {
  onCancel: () => void;
}

const EditUserGroupForms: React.FC<EditUserGroupFormsProps> = ({
  onCancel,
}) => {
  return (
    <Tabs>
      <Panel title="General">
        <EditGeneralInfoUserGroupFrom
          onCancel={onCancel}
        />
      </Panel>
      <Panel title="User Group Members">
        <Box mb="30px">
          <EditUserGroupMembersForm />
        </Box>
        <UserGroupMembers />
      </Panel>
      <Panel title="Group Permission">
        <Box mb="30px">
          <EditGroupPermissionForm />
        </Box>
        <UserGroupPermission/>
      </Panel>
    </Tabs>
  );
};

export default EditUserGroupForms;
