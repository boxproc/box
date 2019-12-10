import React from 'react';

import { Box } from '@rebass/grid';

import { Tabs, TabsPanel } from 'components';

import {
  UserGroupMembers,
  UserGroupPermission,
} from 'containers/Administration/Permission/UsersGroup/components';

import EditGeneralInfoUserGroupFrom from './EditGeneralInfoUserGroupFrom';
import EditGroupPermissionForm from './EditGroupPermissionForm';
import EditUserGroupMembersForm from './EditUserGroupMembersForm';

export interface EditUserGroupFormsProps {
  isAnyFormDirty: boolean;
  onCancel: () => void;
}

const EditUserGroupForms: React.FC<EditUserGroupFormsProps> = ({
  isAnyFormDirty,
  onCancel,
}) => {
  return (
    <Tabs>
      <TabsPanel
        title="General"
        withConfirmation={isAnyFormDirty}
      >
        <EditGeneralInfoUserGroupFrom onCancel={onCancel} />
      </TabsPanel>
      <TabsPanel
        title="User Group Members"
        withConfirmation={isAnyFormDirty}
      >
        <Box mb="10px">
          <EditUserGroupMembersForm />
        </Box>
        <UserGroupMembers />
      </TabsPanel>
      <TabsPanel
        title="Group Permission"
        withConfirmation={isAnyFormDirty}
      >
        <Box mb="10px">
          <EditGroupPermissionForm />
        </Box>
        <UserGroupPermission />
      </TabsPanel>
    </Tabs>
  );
};

export default EditUserGroupForms;
