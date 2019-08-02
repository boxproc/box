import React from 'react';

import { Box } from '@rebass/grid';
import { Panel, Tabs } from 'components/Tabs';

// tslint:disable-next-line: max-line-length
import UserGroupMembers from 'containers/Administration/Permission/UsersGroup/UsersGroupComponents/UserGroupMembers';
// tslint:disable-next-line: max-line-length
import UserGroupPermission from 'containers/Administration/Permission/UsersGroup/UsersGroupComponents/UserGroupPermission';

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
        <Box mb="25px">
          <EditUserGroupMembersForm />
        </Box>
        <UserGroupMembers />
      </Panel>
      <Panel title="Group Permission">
        <Box mb="25px">
          <EditGroupPermissionForm />
        </Box>
        <UserGroupPermission/>
      </Panel>
    </Tabs>
  );
};

export default EditUserGroupForms;
