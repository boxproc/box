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
  isReadOnly: boolean;
}

const EditUserGroupForms: React.FC<EditUserGroupFormsProps> = ({
  isAnyFormDirty,
  onCancel,
  isReadOnly,
}) => {
  return (
    <Tabs>
      <TabsPanel
        title="General"
        withConfirmation={isAnyFormDirty}
      >
        <EditGeneralInfoUserGroupFrom
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="User Group Members"
        withConfirmation={isAnyFormDirty}
      >
        {!isReadOnly && (<EditUserGroupMembersForm />)}
        <Box mt="20px">
          <UserGroupMembers />
        </Box>
      </TabsPanel>
      <TabsPanel
        title="Group Permission"
        withConfirmation={isAnyFormDirty}
      >
        {!isReadOnly && (<EditGroupPermissionForm />)}
        <Box mt="20px">
          <UserGroupPermission />
        </Box>
      </TabsPanel>
    </Tabs>
  );
};

export default EditUserGroupForms;
