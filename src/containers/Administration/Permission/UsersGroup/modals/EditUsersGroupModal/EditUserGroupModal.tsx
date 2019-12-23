import React from 'react';

import { Modal, withSpinner } from 'components';
import { withModal, WithModalProps } from 'HOCs';

import { modalNamesConst, modalTypesConst } from 'consts';

import { EditUserGroupForms } from 'containers/Administration/Permission/UsersGroup/forms';

interface EditUsersGroupModalProps extends WithModalProps {
  groupName: string;
  institutionName: string;
  isGeneralInfoFormDirty: boolean;
  isUserGroupMembersFormDirty: boolean;
  isGroupPermissionFormDirty: boolean;
}

const modalName = modalNamesConst.EDIT_USERS_GROUP;

const EditUsersGroupModal: React.FC<EditUsersGroupModalProps> = ({
  closeModal,
  groupName,
  institutionName,
  isGeneralInfoFormDirty,
  isUserGroupMembersFormDirty,
  isGroupPermissionFormDirty,
  isReadOnly,
}) => {
  const currentName = React.useMemo(
    () => (groupName && institutionName) ? `: "${groupName}" (${institutionName})` : '',
    [groupName, institutionName]
  );

  const isAnyFormDirty = React.useMemo(
    () => {
      return isGeneralInfoFormDirty || isUserGroupMembersFormDirty || isGroupPermissionFormDirty;
    },
    [isGeneralInfoFormDirty, isUserGroupMembersFormDirty, isGroupPermissionFormDirty]
  );

  const handleOnCancel = React.useCallback(
    () => closeModal(modalName),
    [closeModal]
  );

  return (
    <Modal
      name={modalName}
      type={modalTypesConst.EDIT_MODAL}
      title={`Edit User Group${currentName}`}
      minContainerHeight={550}
      withCloseConfirmation={isAnyFormDirty}
    >
      <EditUserGroupForms
        onCancel={handleOnCancel}
        isAnyFormDirty={isAnyFormDirty}
        isReadOnly={isReadOnly}
      />
    </Modal>
  );
};

export default withSpinner({
  isFixed: true,
})(withModal(EditUsersGroupModal));
