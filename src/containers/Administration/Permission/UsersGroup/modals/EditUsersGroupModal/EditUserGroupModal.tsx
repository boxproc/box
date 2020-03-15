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
  const modalTitle = React.useMemo(
    () => `Edit User Group: "${groupName}" (${institutionName})`,
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
      type={modalTypesConst.VIEWING}
      title={modalTitle}
      minContainerHeight="580px"
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
