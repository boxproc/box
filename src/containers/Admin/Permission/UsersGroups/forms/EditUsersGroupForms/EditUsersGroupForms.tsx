import React from 'react';

import { Tabs, TabsPanel } from 'components';
import { UsersGroupMembers, UsersGroupPermissions } from '../../components';
import EditUsersGroupFrom from './EditUsersGroupFrom';
import EditUsersGroupMembersForm from './EditUsersGroupMembersForm';
import EditUsersGroupPermissionsForm from './EditUsersGroupPermissionsForm';

interface IEditUsersGroupForms {
  isAnyFormDirty: boolean;
  isReadOnly: boolean;
  onCancel: () => void;
}

const EditUsersGroupForms: React.FC<IEditUsersGroupForms> = ({
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
          <EditUsersGroupMembersForm />
        )}
        <UsersGroupMembers isReadOnly={isReadOnly} />
      </TabsPanel>
      <TabsPanel
        title="Group Permission"
        withConfirmation={isAnyFormDirty}
      >
        {!isReadOnly && (
          <EditUsersGroupPermissionsForm />
        )}
        <UsersGroupPermissions isReadOnly={isReadOnly} />
      </TabsPanel>
    </Tabs>
  );
};

export default EditUsersGroupForms;
