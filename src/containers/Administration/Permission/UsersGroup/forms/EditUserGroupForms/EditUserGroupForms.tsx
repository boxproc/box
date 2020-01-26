import React from 'react';

import { Tabs, TabsPanel } from 'components';

import {
  UserGroupMembers,
  UserGroupPermission,
} from 'containers/Administration/Permission/UsersGroup/components';

import EditGroupPermissionForm from './EditGroupPermissionForm';
import EditUserGroupMembersForm from './EditUserGroupMembersForm';
import EditUsersGroupFrom from './EditUsersGroupFrom';

export interface EditUserGroupFormsProps {
  isAnyFormDirty: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
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
        <EditUsersGroupFrom
          onCancel={onCancel}
          isReadOnly={isReadOnly}
        />
      </TabsPanel>
      <TabsPanel
        title="User Group Members"
        withConfirmation={isAnyFormDirty}
      >
        {!isReadOnly && (
          <EditUserGroupMembersForm />
        )}
        <UserGroupMembers />
      </TabsPanel>
      <TabsPanel
        title="Group Permission"
        withConfirmation={isAnyFormDirty}
      >
        {!isReadOnly && (
          <EditGroupPermissionForm />
        )}
        <UserGroupPermission />
      </TabsPanel>
    </Tabs>
  );
};

export default EditUserGroupForms;
